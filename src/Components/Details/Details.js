import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Photo from "../Photo/Photo";

const Details = () => {
  const { postId } = useParams();

  const [comment, setComment] = useState([]);
  // const [postData, setPostData] = useState({});

  // //data
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  //     .then((res) => res.json())
  //     .then((data) => setPostData(data));
  // }, []);

  //comments
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setComment(data));
  }, []);

  return (
    <div>
      {comment.map((com) => (
        <ShowDetails comments={com} key={com.id}></ShowDetails>
      ))}
    </div>
  );
};

function ShowDetails(props) {
  const { id, body, email } = props.comments;
  return (
    <div>
      <div>
      <Photo></Photo>
      </div>
      <div>      
      <p>{email}</p>
      <p>{id}</p>
      <p>{body}</p></div>

    </div>
  );
}
export default Details;
