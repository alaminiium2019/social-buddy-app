import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Photo from "../Photo/Photo";

const Details = () => {
  const { NewId, postId } = useParams(0);
  //Comments API
  const [comment, setComment] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?${postId}`)
      .then((res) => res.json())
      .then((data) => setComment(data[0]));
  }, []);
  //

  return (
    <div style={{display:'flex'}}>
      <div>
        <Photo></Photo>
      </div>
      <div>
        <p>User id: {NewId}</p>
        <h3>{comment.email}</h3>
        <p>{comment.body}</p>
      </div>
    </div>
  );
};

export default Details;
