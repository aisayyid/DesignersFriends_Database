import React from "react";
import "./style.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from 'react-toastify';
import ModalImage from "react-modal-image";

function Card({ image }) {
  const user = useSelector(state => state.auth.currentUser);
  //function
  function imageSubmit(url) {
    //use axios to post to user dashboard
    axios.post("/gallery",
      { //set user to user id
        user: user._id,
        //set gallery to image name
        gallery: url
        //push image into gallery
      }).then(data => {
        console.log(data)
        toast.dark("Image saved!")
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="col-sm-4">
      <div className="card" style={{ width: "18rem;" }} id="searchcards">

        <ModalImage className="modalImg"
          small={`${image.url}`}
          large={`${image.url}`}
        />
        <div className="card-body">
          <p>
            {image.confidence}
          </p>
          {image.labels.map(label => (
            <span className="badge badge-pill badge-info">{label}</span>
          ))}
        </div>
        <button type="button" onClick={(e) => imageSubmit(image.url)} className="btn btn-primary btn-sm">Save to Gallery</button>
      </div>
    </div>
  );
}

export default Card;