import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./logo";

import classes from "./main-navigation.module.css";

function MainNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/#about" scroll={false}>About</Link>
          </li>

          <li className={classes.contact}>
            <div onClick={() => setOpen(!open)} style={{ cursor: "pointer" }}>
              Contact
            </div>

            {open && (
              <div className={classes.icons}>
                <Link
                  href="https://github.com/time-mastery"
                  target="_blank rel=noopener"
                  className={classes.icon}
                >
                  <Image
                    src="/icons/github.svg"
                    alt="github"
                    width={28}
                    height={20}
                  />
                </Link>
                <Link
                  href="https://github.com/time-mastery"
                  target="_blank rel=noopener"
                  className={classes.icon}
                >
                  <Image
                    src="/icons/mail.svg"
                    alt="email"
                    width={30}
                    height={18}
                  />
                </Link>
              </div>
            )}
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
