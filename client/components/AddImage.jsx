
import React from "react"


export default function AddImage(props) {

  const imageType = props.imageType
  // console.log(imageType)
  return(

<div>
{imageType === "URL" ? (<input
              id="imageurl"
              type="text"
              onChange={props.handleChange}
              value={props.imagePath||""}
              name="imagePath"
             />
     ):(  <input
      id='imageupload'
         className="primary-button"
        type="file"
        name="imagePath"
        value = {props.imagePath}
       onChange={props.handleiChange}
        /> )}
  </div>
 
  )
     }
  
 