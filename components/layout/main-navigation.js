import Link from "next/link";
import Image from "next/image";
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
            <Link href="/#about">About</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
          <li className={classes.getStarted}>
            <Link
              href="https://github.com/time-mastery/pmodoro-application"
              className={classes.link}
            >
              contribute
              <Image
                src="/icons/github-black.svg"
                alt="mobile image"
                width={18}
                height={18}
                className={classes.image}
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
