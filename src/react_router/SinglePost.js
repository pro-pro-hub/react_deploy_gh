import { useNavigate } from "react-router-dom";
const SinglePost = ({ post, posts, setPosts, id }) => {
  const navigate = useNavigate();
  const handleDelete = () => {
    const newPosts = posts.filter((thisPost) => thisPost.id !== id);
    setPosts(newPosts);
    navigate("/");
  };
  return (
    <div className="full-post">
      {Object.values(post).length > 0 ? (
        <>
          <h2>{post.title}</h2>
          <p className="date">{post.date}</p>
          <p className="content">{post.content}</p>
          <button onClick={handleDelete}>Delete Post</button>
        </>
      ) : (
        <p className="center-msg">There's Nothing Here 😢</p>
      )}
    </div>
  );
};

export default SinglePost;
