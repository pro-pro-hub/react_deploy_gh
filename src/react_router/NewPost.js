import PostForm from "./PostForm";
const NewPost = ({ posts, setPosts }) => {
  return (
    <main className="new-post-page">
      <h2>New Post</h2>
      <PostForm posts={posts} setPosts={setPosts} />
    </main>
  );
};

export default NewPost;
