/* eslint-disable prettier/prettier */
import type { FC } from "react";

import { Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import { Main } from "~/pages/main";
import { Favorites } from "~/pages/favorites";
import { Header } from "~/pages/header";

export const App: FC = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Main />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
      
    </div>
  );
};
