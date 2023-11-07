import getDate from "./getDate";
const Footer = () => {
  return <footer>Copyright &copy; {getDate("year")}</footer>;
};

export default Footer;
