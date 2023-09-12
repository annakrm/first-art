import React from 'react';
import styles from "./slider.module.css";
import arrow from "../../assets/images/Arrow_1.svg";
import like from "../../assets/images/favorite_border_24px_outlined.svg";


export const Slider = () => {
    return (
      <>
      <div className={styles.container}>
        <span className={styles.info}>Get to know the works of art that are worthy of your attention</span>
          <div className={styles.central_container}>
            <div className={styles.content}>

            </div>
            <span className={styles.artist_name}>Ivan Shishkin</span>
            <span className={styles.painting_name}>Rye Field</span>
          </div>

          <img className={styles.arrow} src={arrow} />
          <img className={styles.like} src={like}/>
        </div>
      </>
    );
}

export default Slider;