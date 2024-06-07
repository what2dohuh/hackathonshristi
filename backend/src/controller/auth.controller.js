const userModel = require("../models/user.model");
const { hashedPassword, comparePassword } = require("../helper/auth");
const upload = require("../helper/multer");
const jwt = require("jsonwebtoken");
const cloudinary = require("../helper/cloudinary.config");
const uploadRescueModel = require("../models/uploadRescue.model");

const get = (req, res) => {
  res.send("Hello World");
};

//This is for registering a new user

const Register = async (req, res) => {
  const { email, name, password,address } = req.body;
  try {
    if (!email) {
      return res.status(400).json({ error: "email is required" });
    }
    if (!name) {
      return res.status(400).json({ error: "name is required" });
    }
    if (!password || password < 6) {
      return res
        .status(400)
        .json({ error: "passwords is required and more than 6 characters " });
    }
    if(!address ){
      return res
       .status(400)
       .json({ error: "address is required" });
    }
    const hashedPass = await hashedPassword(password);
    const isMatch = await userModel.findOne({email})
    if (isMatch) {
      return res
        .status(400)
        .json({ error: "email is already registered" });
    } else {
    if (req.file) {
      
        cloudinary.uploader.upload(req.file.path, async (err, result) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: false,
            message: "Error",
          });
        } else {
         
            const user = await userModel.create({
              name,
              email,
              address,
              password: hashedPass,
              profile: result.secure_url,
            });

            return res.status(200).json(user);
          }
        }
      );
    } else {
      const user = await userModel.create({
        name,
        email,
        address,
        password: hashedPass,
        profile:""
      });
      return res.status(200).json({file:req.file,user:user});
    }}

  } catch (error) {
    res.status(500).send(error.message);
  }
};

//This is for login the user
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email) {
     return res.status(400).json({error:"email is required"});
    }
    if (!password) {
      return res.status(400).json({error:"password is required"});
    }
    const user = await userModel.findOne({ email });

    if (!user) {
      res.status(400).send("email is not registered");
    }
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      res.status(400).send("password is incorrect");
    } else {
      jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        process.env.JWT_SEC,
        {},
        (err, token) => {
          if (err) {
            return res.status(500).send(err.message);
          } else {
           return res.cookie("token", token).json({token:token,user});
         
          }
        }
      );
    }
  } catch (error) {
    return  res.status(500).send(error.message);
  }
};

//Thia is to get the profile if token available

const getProfile = (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (token) {
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) {
        return res.status(401).json({error:"unauthorized"});
      } else {
        return  res.status(200).json(user);
      }
    });
  } else {
    return  res.json(null);
  }
};

const logout= (req, res) => { 
    console.log(req.cookies)
    res.cookie("token",null).json("logout");
}

const uploadRescue = (req, res) => {
  const {name,description,lat,long}= req.body;
//image is temp for now
console.log(req.file)
  if (!name || !description || !req.file || !lat || !long) {
    res.status(404).json({error:"Error fill up all the details"})
  }else{
    cloudinary.uploader.upload(req.file.path,async(err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "Error",
        })}
        else{
          const uploadRes = await uploadRescueModel.create({name, description, image:data.secure_url, lat ,long})
          return res.status(200).json(uploadRes)
        }
    })
   
}
}

const getres =async (req, res) => {
  const data = await uploadRescueModel.find({})
  try {
  return   res.status(200).json(data)
  } catch (error) {
   return res.status(400).json({"error":error.message})
  }
}


module.exports = { get, Register, login, getProfile ,logout,uploadRescue,getres};
