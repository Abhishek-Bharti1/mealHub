import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../features/recipes/recipesSlice";
import { motion } from "framer-motion";
import styles from "../styles/RecipeDetail.module.css";
import { MdFoodBank } from "react-icons/md";
import MenuCard from "./MenuCard";
const RecipeDetail = () => {
  const selectedRecipe = useSelector((state) => state.recipes.selectedRecipe);
  const favoriteRecipes = useSelector((state) => state.recipes.favoriteRecipes);
  const dispatch = useDispatch();

  const isFavorite = favoriteRecipes.some(
    (r) => r.idMeal === selectedRecipe.idMeal
  );
  if (!selectedRecipe) {
    return (
      <motion.div
        className={styles.recipeDetail1}
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Select a recipe to see details or &nbsp;<span className={styles.messageDrag}>Drag and drop to re-arrange me.</span>
        <span className={styles.foodIcon}>
          <MdFoodBank />
        </span>
      </motion.div>
    );
  }

  return (
    <section id="menu">
      <motion.h1
      className={styles.head}
        initial={{ y: '-100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileInView={{y: 0}}
        transition={{ duration: 0.5 }}
      >
        The Meal Hub
      </motion.h1>

    <div>
    <MenuCard
        title={selectedRecipe.strMeal}
        image={selectedRecipe.strMealThumb}
        description={selectedRecipe.strInstructions}
        isFavorite={isFavorite}
        onClick={() => dispatch(toggleFavorite(selectedRecipe))}
        styles={styles}
        key={selectedRecipe.idMeal}
      />
    </div>
  </section>
  );
};

export default RecipeDetail;
