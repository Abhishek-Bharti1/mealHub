import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllRecipes, selectRecipe, reorderRecipes } from '../features/recipes/recipesSlice';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from '../styles/RecipeList.module.css';

const RecipeList = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.recipes.recipes);
  const status = useSelector(state => state.recipes.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAllRecipes());
    }
  }, [status, dispatch]);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(recipes);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    dispatch(reorderRecipes(items));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="recipes">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef} className={styles.recipeList}>
            {recipes.map((recipe, index) => (
              <Draggable key={recipe.idMeal} draggableId={recipe.idMeal} index={index}>
                {(provided) => (
                  <motion.div
                    initial={{ x: '-100%' }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.5 }}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Link to="/" className={styles.link}>
                      <li
                        onClick={() => dispatch(selectRecipe(recipe))}
                        className={styles.recipeItem}
                      >
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} className={styles.recipeImage} />
                        {recipe.strMeal}
                      </li>
                    </Link>
                  </motion.div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default RecipeList;
