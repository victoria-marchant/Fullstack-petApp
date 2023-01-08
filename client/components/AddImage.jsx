
import React from "react"


export default function AddImage(props) {

  const imageType = props.imageType
  console.log(imageType)
  return(

<div>
{imageType === "URL" ? (<input
              id="imageurl"
              type="text"
              // onChange={handleChange}
              // value={form.image||""}
              // value="url"
              name="image"
             />
     ):(  <input
      id='imageupload'
         className="primary-button"
        type="file"
        name="image"
      //  onChange={handleiChange}
        /> )}
  </div>
 
  )
     }
  
 