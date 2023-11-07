import { useState } from "react";
import { useNavigate } from "react-router-dom";
import getDate from "./getDate";

const PostForm = ({ posts, setPosts }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [postInput, setPostInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: posts[0] ? posts[0].id + 1 : 1,
      title: title.trim(),
      content: postInput.trim(),
      date: getDate(),
    };
    const newlyCreatedPost = [newPost, ...posts];
    setPosts(newlyCreatedPost);
    console.log(newlyCreatedPost);
    navigate("/");
  };

  return (
    <form className="new-post" onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        autoFocus
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="post">Post:</label>
      <textarea
        id="post"
        value={postInput}
        onChange={(e) => setPostInput(e.target.value)}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;
