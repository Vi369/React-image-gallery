// import css 
import '../style/ImageDetails.css'
import React,{useState,useEffect} from 'react'
import { useParams, Link} from 'react-router-dom';


function ImageDetails() {
  const [image, setImage] = useState({});
  const {id} = useParams();
  console.log(id);
  const oneImageDeatail = async()=>{
    try {
      const responce = await fetch(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
      const imageDetails = await responce.json();
      setImage(imageDetails.photo)
      console.log(imageDetails.photo);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect( ()=>{
    oneImageDeatail();
  },[])
  return (
    <>
    <header className='header'>
      <Link
       to={'/'}
       className='button'
      >
        Back
      </Link>
      <h1>Image Details</h1>
    </header>
      <div className='imageDetailsContainer'>
        <div className='leftContainer'>
          <img src={image.url} alt="" />
        </div>
        <div className='rightContainer'>
            <h2>Title :) <span>{image.title}</span></h2>
            <h2>Description :) <span>{image.description}</span></h2>   
        </div>
      </div>
    </>
   
  )
}

export default ImageDetails