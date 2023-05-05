import React from "react";
import Title from '../components/Title.jsx'


function LikeMyPhoto() {
  return (
    <div className="container text-center">
      <Title text={"Like My Photo App"} />
      <Title classes={"text-center subtitle "} />
      <div className="card card-dark m-auto"
      style={{width: "300px", cursor: "pointer"}}>
        <div className="card-header fs-xl">
          <small>DogyDog</small>
        </div>
        <img src="" alt="photo of a dog" style={{height: "fit-content"}}/>
        <div className="card-footer fs-xl d-flex" style={{justifyContent: "space-between"}}>

        </div>
      </div>
    </div>
  );
}

export default LikeMyPhoto;
