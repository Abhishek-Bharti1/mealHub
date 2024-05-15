import { motion } from 'framer-motion';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toggleFavorite } from '../features/recipes/recipesSlice';
import styles from '../styles/FavoriteRecipes.module.css';
import MenuCard from './MenuCard';

const FavoriteRecipes = () => {
  const dispatch = useDispatch();
  const selectedRecipe = useSelector((state) => state.recipes.selectedRecipe);
  const favoriteRecipes = useSelector(state => state.recipes.favoriteRecipes);
  const isFavorite = favoriteRecipes.some(
    (r) => r.idMeal === selectedRecipe.idMeal
  );

  return (
    <div className={styles.favoriteRecipes}>
       <motion.div
        className={styles.recipeDetail1}
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
       Favorite Recipes {favoriteRecipes.length}
     
      </motion.div>
      
<div className={styles.menuCardContainer}>
{
  favoriteRecipes.map((recipe,index)=>    <MenuCard 
       title={recipe.strMeal}
        image={recipe.strMealThumb}
        isFavorite={isFavorite}
        onClick={() => dispatch(toggleFavorite(recipe))}
        styles={styles}
        key={recipe.idMeal}
/>)
 }
</div>

    </div>
  );
};

export default FavoriteRecipes;
