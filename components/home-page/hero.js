import Image from "next/image";
import Link from "next/link";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.hero_content}>
        <h2>Get organized and boost your productivity with our Pmodoro app!</h2>
        <p>
          Our easy-to-use timer allows you to break your work into manageable
          chunks, with built-in breaks to help prevent burnout. Stay on track
          with custom task lists and progress tracking. Download now and see the
          difference it can make in your workday!
        </p>
        <button>
          <Link
            href="https://github.com/time-mastery/pmodoro-application/releases/"
            target="_blank rel=noopener"
          >
            Get the app
          </Link>
        </button>
      </div>
      <div className={classes.images}>
        <div className={classes.image_one}>
          <img
            src="https://raw.githubusercontent.com/mahmoud-eslami/resume/main/pmodoro/1.png"
            alt="mobile image"
          />
        </div>
        <div className={classes.image_two}>
          <img
            src="https://raw.githubusercontent.com/mahmoud-eslami/resume/main/pmodoro/3.png"
            alt="mobile image"
          />
        </div>
        <div className={classes.image_three}>
          <img
            src="https://raw.githubusercontent.com/mahmoud-eslami/resume/main/pmodoro/2.png"
            alt="mobile image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
