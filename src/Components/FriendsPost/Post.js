import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";

const Post = () => {
  const [post, setPost] = useState([]);
//get data from API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div>
      <h2>Total Post: {post.length}</h2>
      {post.map((post) => (
        <ShowPost post={post}></ShowPost>
      ))}
    </div>
  );
};

function ShowPost(props) {
  const { id, title, body} = props.post;

  return (
  <div>
      <p>{id}</p>
      <p>{title}</p>
      <p>{body}</p>
      <h2><Link to={`/posts/${id}`}>See More</Link></h2>
    </div>
  );
}

export default Post;
