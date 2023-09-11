import React from 'react';
import styles from "./footer.module.css";

export const Footer = () => {
    return (
      <>
      <div className={styles.container}>
        <div className={styles.info_container}>
          <span className={styles.info}>Created by <a href="https://github.com/annakrm">annakrm</a> (c)</span>
          <span className={styles.info}>2023</span>
        </div>
      </div>
      </>
    );
}

export default Footer;