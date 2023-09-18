import React, { useState } from 'react';
import styles from "./slider.module.css";
import rightArrow from "../../assets/images/Arrow_1.svg";
import leftArrow from "../../assets/images/Arrow_3.svg";
import like from "../../assets/images/favorite_border_24px_outlined.svg";
import { slides } from '~/data';


export const Slider = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };


  return (
    <div className={styles.slider_container}>
      <span className={styles.info}>Get to know the works of art that are worthy of your attention</span>
      <img className={`${styles.arrow} ${styles.right_arrow}`} src={rightArrow} onClick={nextSlide}/>
      <div className={styles.central_container}>
        <div className={styles.images_container}>
              
              {data.map((item, idx) => {
              return (
                <div className={styles.imagesinfo_container}>
                <img 
                className={slide === idx ? styles.slide : `${styles.slide} ${styles.slide_hidden}` }
                src={item.src} 
                alt={item.alt} 
                key={idx}
                />
                  <div className={styles.info_container}>
                    <span className={slide === idx ? styles.artist_name : `${styles.artist_name} ${styles.artist_name_hidden}` }>{item.author}</span>
                    <span className={slide === idx ? styles.painting_name : `${styles.painting_name} ${styles.painting_name_hidden}` }>{item.name}</span>
                  </div>
                </div>
              )
            })}

          </div>

        </div>
        <img className={`${styles.arrow} ${styles.left_arrow}`} src={leftArrow} onClick={prevSlide}/>
     </div>
  )
}