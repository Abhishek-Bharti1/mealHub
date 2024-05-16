import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAllRecipes,
  reorderRecipes,
} from "../features/recipes/recipesSlice";
import { DraggableRecipe, DroppableList } from "./DragRecipe";
import { motion } from "framer-motion";

const RecipeList = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes.recipes);
  const status = useSelector((state) => state.recipes.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAllRecipes());
    }
  }, [status, dispatch]);

  const moveRecipe = (fromIndex, toIndex) => {
    const updatedRecipes = Array.from(recipes);
    const [movedRecipe] = updatedRecipes.splice(fromIndex, 1);
    updatedRecipes.splice(toIndex, 0, movedRecipe);
    dispatch(reorderRecipes(updatedRecipes));
  };

  return (
    <DroppableList>
      {recipes.map((recipe, index) => (
        <motion.div
          initial={{ x: "-100%" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <DraggableRecipe
            key={recipe.idMeal}
            index={index}
            recipe={recipe}
            moveRecipe={moveRecipe}
          />
        </motion.div>
      ))}
    </DroppableList>
  );
};

export default RecipeList;
