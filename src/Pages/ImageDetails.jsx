// import css 
import '../style/ImageDetails.css'
import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom';


function ImageDetails() {
  const id = useParams();
  const oneImageDeatail = async()=>{
    const responce = await fetch(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
    const imageDetails = await responce.json();
    console.log(imageDetails);
  }
  useEffect( ()=>{
    oneImageDeatail();
  },[])
  return (
    <div className='imageDetailsPage'>
      <img src="" alt="" />
      <h2>
        title
      </h2>
      <p>
        description
      </p>
    </div>
  )
}

export default ImageDetails