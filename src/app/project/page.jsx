import Link from "next/link";
import React from "react";

import styles from "./project.module.css";

const Project = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/project/ilustrations" className={styles.item}>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href="/project/websites" className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href="/project/applications" className={styles.item}>
          <span className={styles.title}>Applications</span>
        </Link>
      </div>
    </div>
  );
};

export default Project;
