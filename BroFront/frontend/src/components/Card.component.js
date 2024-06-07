import React from "react";
import { Link } from "react-router-dom";
import "../card.css";

export const Card = ({
  imgSrc,
  imgAlt,lat,long,
  title,
  id,
  type,
  description,
  buttonText,
  link,
}) => {
  return (
    
    <div class="card" style={{margin:"5px",width: "18rem"}}>
       <Link to={`/help/${id}`}>
  <img src={imgSrc} class="card-img-top" style={{width:'100%',height:"200px"}} alt="..."/>
       </Link>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{description.length > 20 ?<> {description.split(' ',20 )} ... </> : description}</p>
    <p class="card-text">{lat}:{long}</p>
    <a href="#" class="btn btn-primary">Help </a>
    <a href="#" class="btn btn-outline-dark ">Donate </a>
  </div>
</div>
  );
};