import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Card, Container, Typography } from "@material-ui/core";
import "./Post.css";

const Post = () => {
  //create state
  const [post, setPost] = useState([]);

  //get data from API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <Container style={{ paddingBottom: "10px" }}>
      <h2>Total Post: {post.length}</h2>
      {post.map((post) => (
        <ShowPost post={post}></ShowPost>
      ))}
    </Container>
  );
};

//Display post

function ShowPost(props) {
  const { id, title, body } = props.post;

  return (
    <Container>
      <Card
        style={{
          marginBottom: "30px",
          marginTop: "20px",
          padding: "20px",
          border: "2px solid red",
        }}
      >
        <h2 style={{ paddingBottom: "10px" }}>{title}</h2>
        <Typography variant="body2" color="textSecondary" component="p">
          <p>{body}</p>
        </Typography>

        <Link to={`/posts/${id}`}>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "10px", marginBottom: "0px" }}
          >
            See more
          </Button>
        </Link>
      </Card>
    </Container>
  );
}

export default Post;
