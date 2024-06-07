const multer = require('multer');
const path = require('path');
const DIR = './';
const storage  = multer.diskStorage({
    filename: function(req, file,cb){
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    },

})
const storageImg  = multer.diskStorage({
     destination: 'uploads/' ,
    filename: function(req, file,cb){
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    },

})

const uploadprofile = multer({storage: storage})
const uploadimage = multer({storage: storageImg})

module.exports = {uploadprofile,uploadimage}