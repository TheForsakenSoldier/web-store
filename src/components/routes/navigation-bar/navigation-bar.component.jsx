import { Outlet } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <div>
        <h1>I am the NavBar</h1>;
      </div>
      <Outlet />
    </div>
  );
};
export default NavBar;
