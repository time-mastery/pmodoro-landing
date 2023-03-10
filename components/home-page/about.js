import React from "react";
import Image from "next/image";

import classes from "./about.module.css";

function About() {
  return (
    <section className={classes.about} id='about'>
      <h2>About us</h2>
      <p className={classes.about_p}>
        Welcome to our open-source organization! We are dedicated to creating
        top-quality open-source products that are both functional and
        user-friendly. Our flagship product is the Pomodoro app, an easy-to-use
        timer that helps users boost productivity and stay organized.
      </p>
      <div className={classes.bullet_points}>
        <div className={classes.bullet_point}>
          <div className={classes.image}>
            <Image
              src="/icons/branch.svg"
              alt="mobile image"
              width={34}
              height={26}
            />
          </div>
          <h3>Open Source</h3>
          <p>
            Pmodoro is completely open source, which means the code is freely
            available for anyone to use, modify, and distribute.
          </p>
        </div>
        <div className={classes.bullet_point}>
          <div className={classes.image}>
            <Image
              src="/icons/thunder.svg"
              alt="mobile image"
              width={15}
              height={26}
            />
          </div>
          <h3>Boost Productivity</h3>
          <p>
            Pmodoro helps you stay focused and on task by breaking up your work
            into manageable chunks, with built-in breaks to prevent burnout.
          </p>
        </div>
        <div className={classes.bullet_point}>
          <div className={classes.image}>
            <Image
              src="/icons/accessibility.svg"
              alt="mobile image"
              width={38}
              height={26}
            />
          </div>
          <h3>Progress Tracking</h3>
          <p>
            Keep track of your progress and see how much you've accomplished
            over time.
          </p>
        </div>
        <div className={classes.bullet_point}>
          <div className={classes.image}>
            <Image
              src="/icons/umbrella.svg"
              alt="mobile image"
              width={35}
              height={26}
            />
          </div>
          <h3>Easy-to-use Timer</h3>
          <p>
            Pmodoro makes it easy to implement the Pomodoro Technique with its
            user-friendly interface and customizable timer settings.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
