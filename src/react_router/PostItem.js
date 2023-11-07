import { useNavigate } from "react-router-dom";

const PostItem = ({ post }) => {
  const navigate = useNavigate();
  return (
    <div className="post" onClick={() => navigate(`post/${post.id}`)}>
      <h2>{post.title}</h2>
      <p className="date">{post.date}</p>
      <p className="content">
        {post.content.length > 25
          ? post.content.slice(0, 25) + "..."
          : post.content}
      </p>
    </div>
  );
};

export default PostItem;
