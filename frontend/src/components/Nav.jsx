import { Link } from "react-router-dom";
// styles
import "./Nav.css";

// images
import Logo from "../assets/logo.png";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li className="logo">
          <img src={Logo} alt="brand image" />
        </li>
        <li>
          <Link to={"/orders"}>Orders</Link>
        </li>
      </ul>
    </nav>
  );
}
