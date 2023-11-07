import PostItem from "./PostItem";

const Home = ({ posts }) => {
  return (
    <main>
      {posts.length ? (
        posts.map((post) => <PostItem post={post} key={post.id} />)
      ) : (
        <p className="center-msg">There's Nothing Here 😢</p>
      )}
    </main>
  );
};

export default Home;
