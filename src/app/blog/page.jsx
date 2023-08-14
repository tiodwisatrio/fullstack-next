import React from "react";
import styles from "./blog.module.css";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/id" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/7676401/pexels-photo-7676401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image_blog"
            width={450}
            height={300}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Tutorial menjadi TikToker Handal</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed libero
            nisi voluptatem tenetur neque! Aut nam quibusdam ad asperiores eius
            fugit vel rerum ipsa quo, eum voluptatibus voluptates doloremque
            tempore?
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
