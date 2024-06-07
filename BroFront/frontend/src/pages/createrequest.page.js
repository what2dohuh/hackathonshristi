import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import LoaderComponent from '../components/loader.component';
const CreateRequestPage = () => {
  const navigator = useNavigate()
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    email:'',
    image: null,
    lat:null,
    long:null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, description, image,lat,long } = formData;
    setLoading(true)
    getnav();
    if(!name && !description && !image){
      alert('Please fill all the fields')
      setLoading(false)
      return
    }
    else if(!lat && !long ){
      alert('Give Location Permision')
      setLoading(false)
      return;
    }

    
    const formDataToSend = new FormData();
    formDataToSend.append('name', name);
    formDataToSend.append('description', description);
    formDataToSend.append('image', image);
    formDataToSend.append('lat',lat)
    formDataToSend.append('long',long)
    

    try {
      const response = await axios.post('/uploadrescue', formDataToSend);
      console.log(response.data);
      setLoading(false)
      navigator('/request')
    } catch (error) {
      console.error('Error uploading file:', error);
      setLoading(false)
    }
  };
  const getnav = ()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
       setFormData({...formData,lat: position.coords.latitude,long: position.coords.longitude})
        console.log(position.coords.latitude,position.coords.longitude)
      })
    }
  }
useEffect(() => {

 

}, []);


  return (
    
    <div className='container-sm'>
      {loading?<LoaderComponent text={"Uploading..."}/> : <>
      <h2 className='text-dark'>Create Request</h2>
      <form onSubmit={handleSubmit}>
      <div class="mb-3">
<label for="exampleFormControlInput1" class="form-label" style={{color:'#000000'}}>Name:</label>
<input type="text" class="form-control" id="exampleFormControlInput1" placeholder="joe doe" name='name' value={formData.name} onChange={handleInputChange}/>
</div>
<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label"style={{color:'#000000'}}>Email address:</label>
<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" value={formData.email} onChange={handleInputChange}/>
</div>
<div class="mb-3">
<label for="exampleFormControlTextarea1" class="form-label"style={{color:'#000000'}}>Description:</label>
<textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Explain the situation in brief' name="description" value={formData.description} onChange={handleInputChange}></textarea>
</div>
<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label"style={{color:'#000000'}}>Image:</label>
<input type="file" class="form-control"  onChange={handleFileChange} name='image'/>
{formData.image ?  <img src= {URL.createObjectURL(formData?.image)} style={{height:'200px'}}></img> : <></>}

</div>
<div class="mb-3">
<button className='btn  btn-outline-secondary' >Submit</button>
</div>
      </form>
      </>}
    
    </div>
  );
};


export default CreateRequestPage;
