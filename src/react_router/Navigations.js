import { Link, useParams } from "react-router-dom";

const Navigations = () => {
  const currentPage = Object.values(useParams())[0] || "home";
  return (
    <div>
      <Link to="/" className={currentPage === "home" ? "active-page" : null}>
        Home
      </Link>
      <Link to="post" className={currentPage === "post" ? "active-page" : null}>
        Post
      </Link>
      <Link
        to="about"
        className={currentPage === "about" ? "active-page" : null}
      >
        About
      </Link>
    </div>
  );
};

export default Navigations;
