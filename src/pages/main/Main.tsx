import React from 'react';
import styles from "./Main.module.css";
import { NavLink, Outlet } from 'react-router-dom';
import { Slider } from '../slider';
import { Footer } from '../footer';

export const Main = () => {
    return (
      <>
      <div className={styles.container}>
        <div className={styles.navbar_container}>
            <div className={styles.navbar}>
              <NavLink className={styles.link} to="/">Gallery</NavLink>
              <NavLink className={styles.link}to="/favorites">Favorites</NavLink>
            </div>
          </div>
          <p className={styles.title}><span>Welcome to</span><span className={styles.subtitle}>Art</span></p>
      </div>

      <Slider/>
      <Footer/>
      </>
    );
}

export default Main;