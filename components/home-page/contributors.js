import React from "react";
import useSwr from "swr";

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
        <div key={contributor.id}>
          <h1>{contributor.login}</h1>
        </div>
      ))}
    </section>
  );
}
