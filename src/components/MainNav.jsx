import { NavLink } from "react-router-dom";
import classes from "./MainNav.module.css";
export default function MainNav() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? classes.active : "")}
              end
              //   end to not include any link with '/'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? classes.active : "")}
              end
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
