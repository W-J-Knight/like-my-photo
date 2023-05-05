import React, { useState } from "react";
import Title from "../components/Title.jsx";
import {
  AiFillSmile,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineComment,
} from "react-icons/ai";
import DogyDog from "../images/dog.jpg";

function LikeMyPhoto() {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0)

  const toggleLike = () => {
    if (!like) {
      setLike(true);
      setCount(previousCount => previousCount + 1)
    } else {
      setLike(false);
      setCount(previousCount => previousCount - 1)
    }
  };

  return (
    <div className="container text-center">
      <Title text={"Like My Photo App"} />
      <Title classes={"text-center subtitle "} text={`Likes ${count}`} />
      <div
        className="card card-dark m-auto shadow-sm"
        style={{ width: "300px", cursor: "pointer" }}
        onDoubleClick={toggleLike}
      >
        <div className="card-header fs-xl">
          <AiFillSmile className="mr-2" />
          <small>DogyDog</small>
        </div>
        <img src={DogyDog} alt="dog" style={{ height: "fit-content" }} />
        <div
          className="card-footer fs-xl d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <AiOutlineComment />
          {like ? (
            <AiFillHeart className="text-danger" onClick={toggleLike} />
          ) : (
            <AiOutlineHeart onClick={toggleLike} />
          )}
        </div>
      </div>
    </div>
  );
}

export default LikeMyPhoto;
