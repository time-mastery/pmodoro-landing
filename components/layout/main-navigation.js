import Link from "next/link";
import Logo from "./logo";

import classes from "./main-navigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li className={classes.getStarted}>
            <Link href="">Get Started</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
