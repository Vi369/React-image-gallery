// import css
import '../style/ImageCard.css'
import React from 'react'
import {useNavigate} from 'react-router-dom'

function ImageCard({id,url, title}) {
    const navigate = useNavigate();

    const reDirectPagetoImageDetails = ()=>{
      navigate(`/${id}`);
    }
  return (
    <div>
        <img 
          className='image'
          key={id}
          onClick={reDirectPagetoImageDetails} 
          src={url}  
          alt={title}/>
    </div>
  )
}

export default ImageCard