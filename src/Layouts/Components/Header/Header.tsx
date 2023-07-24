import Favourite from "../Favourite/Favourite";
import "./Header.styles.css";

export const Header = () => {
  return (
    <header className="app-header">
      <h2 className="titleHeader">
        <b>Github</b> Jobs
      </h2>
      <Favourite />
    </header>
  );
};
export default Header;
