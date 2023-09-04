import React from 'react';
import styles from "./header.module.css";
import { NavLink, Outlet } from 'react-router-dom';

export const Header = ({ link }: { link?: string }) => {
    return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.navbar}>
            <NavLink to="/">Gallery</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
          </div>
        </div>
      </header>

      <Outlet />
    </> 
  );
}

export default Header;