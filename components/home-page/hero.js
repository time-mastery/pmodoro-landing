import Image from "next/image";
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
        <button>Get the app</button>
      </div>
      <div className={classes.images}>
        <div className={classes.image_one}>
          <Image
            src="/images/screenshot1.png"
            alt="mobile image"
            width={170}
            height={342.4}
          />
        </div>
        <div className={classes.image_two}>
          <Image
            src="/images/screenshot2.png"
            alt="mobile image"
            width={170}
            height={342.4}
          />
        </div>
        <div className={classes.image_three}>
          <Image
            src="/images/screenshot3.png"
            alt="mobile image"
            width={170}
            height={342.4}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
