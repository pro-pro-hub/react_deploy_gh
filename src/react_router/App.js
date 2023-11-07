import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setPosts(
      [
        {
          id: 1,
          title: "My First Post",
          content: "Lorem ipsum dolol sit amen hahahahahadd",
          date: "October 31, 2023 8:18:31 PM",
        },
        {
          id: 2,
          title: "My Other Post",
          content: "Lorem ipsum dolol sit amen hahahahahadd",
          date: "October 31, 2023 8:18:31 PM",
        },
        {
          id: 3,
          title: "My Third Post",
          content: "Lorem ipsum dolol sit amen hahahahahadd",
          date: "October 31, 2023 8:18:31 PM",
        },
        {
          id: 4,
          title: "My Fourth Post",
          content: "Lorem ipsum dolol sit amen hahahahahadd",
          date: "October 31, 2023 8:18:31 PM",
        },
        {
          id: 5,
          title: "My Last Post",
          content: "Lorem ipsum dolol sit amen hahahahahadd",
          date: "October 31, 2023 8:18:31 PM",
        },
      ].reverse()
    );
  }, []);
  useEffect(() => {
    const matchedPost = posts.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.content.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredPosts(matchedPost);
  }, [search, posts]);
  return (
    <div className="App">
      <Header title={"React JS Blog"} />
      <Nav
        search={search}
        setSearch={setSearch}
        posts={posts}
        setFilteredPosts={setFilteredPosts}
      />
      <Routes>
        <Route path="/" element={<Home posts={filteredPosts} />} />
        <Route
          path="post"
          element={<NewPost posts={posts} setPosts={setPosts} />}
        />
        <Route
          path="post/:id"
          element={<PostPage posts={posts || []} setPosts={setPosts} />}
        />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
