import React, {useState, useRef} from 'react'
import './PostShare.css'
import ProfileImage from '../../img/img1.jpg'

import {UilScenery} from "@iconscout/react-unicons"
import {UilPlayCircle} from "@iconscout/react-unicons"
import {UilLocationPoint} from "@iconscout/react-unicons"
import {UilSchedule} from "@iconscout/react-unicons"
import {UilTimes} from "@iconscout/react-unicons"

const PostShare = () => {
  const [image, setImage] = useState(null)
  const imageRef = useRef()

const onImageChange = (event) => {
    if(event.target.files && event.target.files[0]) {
        let img = event.target.files[0];
        setImage({
            image: URL.createObjectURL(img),
        });
    }
}

  return (
    <div className="PostShare">
        <img src= {ProfileImage} alt="" />
        <div>
            <input type="text" placeholder='Wanna say something???' />
            <div className="PostOptions">
                <div className="Options" style={{color:"var(--photo)"}} onClick = {()=> imageRef.current.click()}>
                    <UilScenery/>
                    Photo
                </div>
                <div className="Options" style={{color:"var(--video)"}}>
                    <UilPlayCircle/>
                    Video
                </div><div className="Options" style={{color:"var(--location)"}}>
                    <UilLocationPoint/>
                    Location
                </div><div className="Options" style={{color:"var(--schedule)"}}>
                    <UilSchedule/>
                    Schedule
                </div>
                <button className="button share-button">Share</button>
                <div style={{display: "none"}}>
                    <input type="file" name="MyImage" ref={imageRef} onChange={onImageChange}/>
                </div>
            </div>
            {image && (
                <div className="PreviewImage">
                    <img src={image.image} alt="" />
                    <UilTimes onClick={() => setImage(null)}/>
                </div>
            )}
        </div>
    </div>
  );
};

export default PostShare