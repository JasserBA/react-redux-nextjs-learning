import { NavLink } from "react-router-dom";
import "./PageNav.module.css";
export const PageNav = () => {
  return (
    <navbar>
      <ul>
        <NavLink className="nav" to="/">
          <li>Go Home</li>
        </NavLink>

        <NavLink className="nav" to="/product">
          <li>Go Product</li>
        </NavLink>

        <NavLink className="nav" to="/pricing">
          <li>Go Pricing</li>
        </NavLink>
      </ul>
    </navbar>
  );
};
