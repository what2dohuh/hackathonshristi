import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { Card } from '../components/Card.component';
import axios from 'axios'
const RequestPage = (props) => {
  const [response, setresponse] = useState([]);
  useEffect(() => {
    const gets= async()=>{
      try {
      const data = await axios.get('/respost')
      setresponse(data.data)

      } catch (error) {
        console.log(error)
      }
     
    }
    gets()
    
  }, []);
    return (
       <>
       <div className='text-center mt-3'>

     <Link to='/createrequest' style={{color:'#000000'}}>  <button type="button" class="btn  btn-outline-dark">Create Request</button></Link>
       <h2  style={{"marginleft":'10px',color:'#000000'}}>POSTS</h2>
       </div>
       <div className="App">
      <div className="col">
      <div className="container-sm  d-flex flex-grow- flex-fill "style={{padding:"10px"}}>
      <div className="  d-flex flex-wrap justify-content-center" style={{padding:"5px"}}>
        {response.map((res)=>{
  return  <Card
  id={res._id}
  imgSrc={res?.image}
  imgAlt="Card Image 1"
  title={res?.name}
   lat={res?.lat}
   long={res?.long}
   type="Dog"
   description={res?.description}
  />

        })}
        </div>
        </div>
      
       
      </div>
      </div>
       </>
    );
}

export default RequestPage;
