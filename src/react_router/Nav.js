import Form from "./Form";
import Navigations from "./Navigations";

const Nav = ({ search, setSearch }) => {
  return (
    <nav>
      <Form search={search} setSearch={setSearch} />
      <Navigations />
    </nav>
  );
};

export default Nav;
