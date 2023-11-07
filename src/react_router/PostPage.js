import { useParams } from "react-router-dom";
import SinglePost from "./SinglePost";
const PostPage = ({ posts, setPosts }) => {
  const id = useParams();
  const target = posts.filter((item) => item.id === Number(id.id));
  return (
    <main>
      <SinglePost
        post={target[0] || {}}
        posts={posts}
        setPosts={setPosts}
        id={Number(id.id)}
      />
    </main>
  );
};

export default PostPage;
