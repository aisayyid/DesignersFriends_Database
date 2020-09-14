import React from "react";
import "./style.css";
import imagesAPI from "../../utils/imagesAPI"
import { useSelector } from "react-redux";
import {useHistory} from "react-router-dom"
import ModalImage from "react-modal-image";


function GalleryCard( props ) {
  const user = useSelector(state => state.auth.currentUser);
  //function
  // console.log("this is the user" , user)

  function imageDelete(image){
    //delete method
    imagesAPI.deletePicture(user._id, image)
    .then(res => {
      props.refreshImage()
    console.log("These should be pictures",res)
    })
      .catch(err => console.log(err));
    }

  return (
    <div className = "col-sm-4">
    <div className="card" style={{width: "18rem;"}} id="gallerycards">
    {/* <img src={`${props.image}`} className="card-img-top" alt="..." id="galleryimg"/> */}

    <ModalImage className="galmodalImg"
    small={`${props.image}`}
    large={`${props.image}`}
    />
   
    <button type="button" onClick = {(e) => imageDelete(props.image)} className="btn btn-danger btn-sm" id="delete">Remove from Gallery</button>
    </div>
  </div>
  );
}

export default GalleryCard;