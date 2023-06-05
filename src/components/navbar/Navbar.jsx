"use client";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";

import { links } from "./constants.js";

const Navbar = () => {

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        coolstudio
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.name}
          </Link>
        ))}
        <button
          className={styles.logout}
          onClick={() => {
            console.log("logged out");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
