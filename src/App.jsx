import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import FavoriteRecipes from "./components/FavoriteRecipes";
import Navbar from "./components/Navbar";
import styles from "./styles/App.module.css";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className={styles.app}>
        <div className={styles.sidebar}>
          <RecipeList />
        </div>

        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<RecipeDetail />} />
            <Route path="/fav" element={<FavoriteRecipes />} />
          </Routes>
        </div>
      </div>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
