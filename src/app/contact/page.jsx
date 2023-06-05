import React from "react";

import styles from "./contact.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const Contact = () => {
  return (
    <div>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="email" placeholder="email" className={styles.input} />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className={styles.textArea}
            placeholder="Send your message here..."
          ></textarea>
          <Button url="#" text="Send Message" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
