import React from "react";
import styles from "./blog.module.css";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/7676401/pexels-photo-7676401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image-blog"
            width={450}
            height={300}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Tutorial Menjadi Seleb TikTok Handal</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            qui esse hic delectus iste quas totam quasi doloribus quaerat
            officiis sapiente non, rerum asperiores deleniti nam incidunt
            nostrum tempora necessitatibus ipsum repellat impedit earum. Dolorem
            possimus eveniet consequatur deserunt minus. Fugiat ea sequi
            veritatis reprehenderit? Sed ipsum officia repellendus aliquam?
          </p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/7676401/pexels-photo-7676401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image-blog"
            width={450}
            height={300}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Tutorial Menjadi Seleb TikTok Handal</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            qui esse hic delectus iste quas totam quasi doloribus quaerat
            officiis sapiente non, rerum asperiores deleniti nam incidunt
            nostrum tempora necessitatibus ipsum repellat impedit earum. Dolorem
            possimus eveniet consequatur deserunt minus. Fugiat ea sequi
            veritatis reprehenderit? Sed ipsum officia repellendus aliquam?
          </p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/7676401/pexels-photo-7676401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image-blog"
            width={450}
            height={300}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Tutorial Menjadi Seleb TikTok Handal</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            qui esse hic delectus iste quas totam quasi doloribus quaerat
            officiis sapiente non, rerum asperiores deleniti nam incidunt
            nostrum tempora necessitatibus ipsum repellat impedit earum. Dolorem
            possimus eveniet consequatur deserunt minus. Fugiat ea sequi
            veritatis reprehenderit? Sed ipsum officia repellendus aliquam?
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
