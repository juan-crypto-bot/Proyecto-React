import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";
import "./LayoutStyle.css";
import Footer from "./Components/Footer/Footer";

export const Layout = () => {
  return (
    <div className="App">
      <Header />
      <div className="outlet">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
