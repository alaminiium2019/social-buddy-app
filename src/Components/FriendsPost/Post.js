import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";
const Post = () => {
  const [post, setPost] = useState([]); //create state for data load

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div>
      <Container fixed>
        <h2>Post will be here...</h2>
      </Container>

      {post.map((post) => (
        <ShowPost post={post}></ShowPost>
      ))}
    </div>
  );
};

function ShowPost(props) {
  const { id, title, body, email } = props.post;
  return (
    <Container bgcolor="red">
      <Box border={2} margin="40px" bgcolor="primary.main">
        <React.Fragment>
          <h2>Id: {id}</h2>
          <p>{email}</p>
          <h3>Title:{title}</h3>
          <p>{body}</p>
          <Button variant="outlined" color="primary">
            <Link to={"/posts/" + id}>See More</Link>
          </Button>
        </React.Fragment>
      </Box>
    </Container>
  );
}

export default Post;
