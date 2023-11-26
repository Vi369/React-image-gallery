// css import 
import '../style/HomePage.css'
import React,{useState, useEffect} from 'react'
import ImageCard from '../component/ImageCard'
function HomePage() {
    const [data, setData] = useState([]);
    // fetch image data
    const downloadImageData = async ()=>{
        try {
            const responce = await fetch('https://api.slingacademy.com/v1/sample-data/photos?limit=20');
            const imageData = await responce.json()
            setData(imageData.photos);
            console.log(imageData.photos)
        } catch (error) {
            alert(error.message);
        }  
    }

    useEffect( ()=>{
        downloadImageData()
    },[])
  return (
    <>
        <h1 className='heading'>Image Gallery</h1>
        <h3 className='subHeading'>Click Any Image for more Details</h3>
        {/* image container */}
        <div className='imageContainer'>
            {
                data?.map( (eachImageObj)=>{
                    // console.log(eachImageObj)
                    // console.log(eachImageObj.id)
                    // console.log(eachImageObj.url);
                    return (
                        <ImageCard 
                        key={eachImageObj.id}
                        id={eachImageObj.id}
                        url={eachImageObj.url}
                        title = {eachImageObj.title}
                    />
                    )
                } )
            }
        </div>
    </>
  )
}

export default HomePage