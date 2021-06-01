import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/SignUp">Sign Up</Link>
        </li>
        <li>
          <Link href="/LogIn">Log In</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
