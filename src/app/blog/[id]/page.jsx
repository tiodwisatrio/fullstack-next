import React from "react";

import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Judul Blog</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla iure
            doloremque nemo cupiditate ex veniam officia ipsum aliquid,
            temporibus illum! Ratione esse cupiditate voluptate quaerat.
          </p>
          <div className={styles.author}>
            <Image
              // src={data.img}
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Tio Dwi Satrio</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/6953623/pexels-photo-6953623.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint dolores
          sunt in nobis fuga sed unde culpa modi, repellat tenetur fugiat dolor.
          Accusamus doloribus eos cum maxime deserunt. Mollitia, culpa hic eum
          animi possimus ipsa debitis quidem fuga consequatur quasi velit sint
          tenetur placeat voluptatibus error suscipit dolores asperiores
          quisquam ex alias magnam! Ipsum molestias minima veritatis sed
          temporibus repudiandae necessitatibus labore ad? Nulla sed saepe nam
          repudiandae aspernatur a fugit, alias, vitae facere aut perspiciatis,
          exercitationem aliquam. Minima praesentium consectetur inventore!
          Magnam, excepturi tempora libero culpa dicta facere asperiores, ipsam
          expedita delectus possimus neque mollitia tempore consectetur magni
          nesciunt.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
