import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <h2>Get rid of all of the stress that you might have</h2>
      <button>Get the app</button>
      <div className={classes.images}>
        <div className={classes.image_one}>
          <Image
            src="/images/phone-one.png"
            alt="mobile image"
            width={170}
            height={342.4}
          />
        </div>
        <div className={classes.image_two}>
          <Image
            src="/images/phone-one.png"
            alt="mobile image"
            width={170}
            height={342.4}
          />
        </div>
        <div className={classes.image_three}>
          <Image
            src="/images/phone-one.png"
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
