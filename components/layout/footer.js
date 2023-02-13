import React from "react";
import Image from "next/image";
import Link from "next/link";

import classes from "./footer.module.css";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.icons}>
        <Link
          href="https://github.com/time-mastery"
          target="_blank rel=noopener"
          className={classes.icon}
        >
          <Image src="/icons/github.svg" alt="github" width={34} height={20} />
        </Link>
        <Link
          href="https://github.com/time-mastery"
          target="_blank rel=noopener"
          className={classes.icon}
        >
          <Image src="/icons/mail.svg" alt="email" width={34} height={19} />
        </Link>
      </div>
      <span>Copyright © Pmodoro 2023</span>
    </footer>
  );
}

export default Footer;
