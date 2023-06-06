import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";

const ProjectCategory = ({ params }) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>My Illustrations</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            itaque fuga culpa perferendis, consectetur dignissimos aliquid
            consequatur minima praesentium, minus dolor consequuntur sed
            cupiditate temporibus.
          </p>
          <Button text="See More" url="#" />
        </div>

        <div className={styles.imgContainer}>
          <Image
            fill={true}
            src="https://images.pexels.com/photos/2860804/pexels-photo-2860804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>My Illustrations</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            itaque fuga culpa perferendis, consectetur dignissimos aliquid
            consequatur minima praesentium, minus dolor consequuntur sed
            cupiditate temporibus.
          </p>
          <Button text="See More" url="#" />
        </div>

        <div className={styles.imgContainer}>
          <Image
            fill={true}
            src="https://images.pexels.com/photos/2860804/pexels-photo-2860804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>My Illustrations</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            itaque fuga culpa perferendis, consectetur dignissimos aliquid
            consequatur minima praesentium, minus dolor consequuntur sed
            cupiditate temporibus.
          </p>
          <Button text="See More" url="#" />
        </div>

        <div className={styles.imgContainer}>
          <Image
            fill={true}
            src="https://images.pexels.com/photos/2860804/pexels-photo-2860804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>My Illustrations</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            itaque fuga culpa perferendis, consectetur dignissimos aliquid
            consequatur minima praesentium, minus dolor consequuntur sed
            cupiditate temporibus.
          </p>
          <Button text="See More" url="#" />
        </div>

        <div className={styles.imgContainer}>
          <Image
            fill={true}
            src="https://images.pexels.com/photos/2860804/pexels-photo-2860804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCategory;
