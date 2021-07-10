import Link from "next/link";
import navStyles from "../styles/Nav.module.css";
import { signIn, signOut, useSession } from "next-auth/client";

const Nav = () => {
  const [session] = useSession();

  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        {!session ? (
          <Link href="/signIn">Sign In</Link>
        ) : (
          <>
            <li>
              <Link style={{ margin: "5px, 15px" }} href="/Swell">
                Swell
              </Link>
            </li>
            <li>
              <Link style={{ margin: "5px, 15px" }} href="/Search">
                Search
              </Link>
            </li>
            <li>
              <a onClick={signOut} style={{ cursor: "pointer" }}>
                Log Out
              </a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
