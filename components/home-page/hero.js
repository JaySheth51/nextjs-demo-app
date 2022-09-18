import Image from 'next/image';
import classes from './hero.module.css';


function Hero() {
  return <section className={classes.hero}>
    <div className={classes.image}>
      <Image src="/images/site/jay.png" alt="An image showing Jay" width={300} height={300} />
    </div>
    <h1>Hi I'm Jay</h1>
    <p>I blog about web development - especially frontend frameworks</p>
  </section>
}

export default Hero;