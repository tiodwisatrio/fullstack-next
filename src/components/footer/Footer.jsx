import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 tiodwisatrio. All rights reserved</div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} className={styles.icon} height={15} alt="tiodwisatrio" />
        <Image src="/2.png" width={15} className={styles.icon} height={15} alt="tiodwisatrio" />
        <Image src="/3.png" width={15} className={styles.icon} height={15} alt="tiodwisatrio" />
        <Image src="/4.png" width={15} className={styles.icon} height={15} alt="tiodwisatrio" />
      </div>
    </div>
  );
};

export default Footer;
