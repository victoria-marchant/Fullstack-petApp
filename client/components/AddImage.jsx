
import React from "react"


export default function AddImage(props) {

  const imageType = props.imageType
  

  
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
      attribute
         className="primary-button"
        type="file"
        name="imagePath"
       onChange={props.handleiChange}
        /> )}
  </div>
 
  )
     }
  
 