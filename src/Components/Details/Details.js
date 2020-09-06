import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Photo from "../Photo/Photo";
import { Container, Card } from "@material-ui/core";

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
  const { name,body, email } = props.comments;

  const commentStyle={
    marginTop:'20px',
    paddingLeft:'10px',
    lineHeight:'30px'
  }
  return (
    <Container>
    <Card borders={2} style={{display:'flex',marginBottom:'20px', marginTop:'20px', border:'2px solid green'}}>
      <div>
      <Photo></Photo>
      </div>
      <div style={commentStyle}>
      <h2>{name}</h2>      
      <h4>{email}</h4>
      <p>{body}</p></div>
    </Card>
    </Container>
  );
}
export default Details;
