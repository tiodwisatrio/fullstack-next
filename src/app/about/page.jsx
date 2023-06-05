import React from "react";

import styles from "./about.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/1647919/pexels-photo-1647919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            commodi ullam mollitia velit quod, sapiente soluta reiciendis atque
            explicabo corporis tempora molestiae libero dolore voluptates sit,
            id fuga obcaecati? Nihil eos consectetur laudantium dignissimos
            harum autem inventore vitae, ex vero deleniti voluptates quam
            recusandae. Veritatis, deserunt suscipit. Asperiores, nihil rem?
          </p>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            commodi ullam mollitia velit quod, sapiente soluta reiciendis atque
            explicabo corporis tempora molestiae libero dolore voluptates sit,
            id fuga obcaecati.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            praesentium facere inventore laboriosam earum fugit sunt culpa amet
            suscipit beatae maiores rerum rem, fugiat illo!
          </p>
          <div className={styles.listItem}>
            <p>- Landing Page</p>
            <p>- Dynamics Website</p>
            <p>- Fast and Handy</p>
          </div>
          <Button url="contact" text="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default About;
