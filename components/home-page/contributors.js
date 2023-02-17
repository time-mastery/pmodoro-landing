import React from "react";
import useSwr from "swr";
import Link from "next/link";
import Image from "next/image";

import classes from "./contributors.module.css";

async function fetcher(...arg) {
  const res = await fetch(...arg);

  return res.json();
}

export default function Contributors() {
  const { data } = useSwr("/api/github", fetcher);

  return (
    <section className={classes.contributors}>
      <h3>
        Contributors of <div>Pmodoro</div>
      </h3>
      {data?.contributors.map((contributor) => (
        <section key={contributor.id} className={classes.contributor}>
          <Link href={contributor.html_url} target="_blank rel=noopener">
            {contributor ? (
              <div>
                <img
                  className={classes.image}
                  src={contributor.avatar_url}
                  alt={contributor.login}
                />
              </div>
            ) : (
              <Image src="/spinner.gif" alt="spinner" width={40} height={40} />
            )}

            {/* <Image
              src={contributor.avatar_url}
              alt={contributor.login}
              width={30}
              height={30}
            /> */}
          </Link>
        </section>
      ))}
      <Link
        href="https://github.com/time-mastery/pmodoro-application"
        className={classes.link}
      >
        Contribute
      </Link>
    </section>
  );
}
