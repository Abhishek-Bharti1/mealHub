import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { selectRecipe } from '../features/recipes/recipesSlice';
import { Link } from 'react-router-dom';
import styles from '../styles/RecipeList.module.css';

const ItemType = {
  RECIPE: 'recipe',
};

const DraggableRecipe = ({ recipe, index, moveRecipe }) => {
  const [, ref] = useDrag({
    type: ItemType.RECIPE,
    item: { index },
  });

  const [, drop] = useDrop({
    accept: ItemType.RECIPE,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveRecipe(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  const dispatch = useDispatch();

  return (
    <div ref={(node) => ref(drop(node))} className={styles.draggableItem}>
      <Link to="/" className={styles.link}>
        <li
          onClick={() => dispatch(selectRecipe(recipe))}
          className={styles.recipeItem}
        >
          <img src={recipe.strMealThumb} alt={recipe.strMeal} className={styles.recipeImage} />
          {recipe.strMeal}
        </li>
      </Link>
    </div>
  );
};

const DroppableList = ({ children }) => {
  const [, ref] = useDrop({
    accept: ItemType.RECIPE,
  });

  return (
    <ul ref={ref} className={styles.recipeList}>
      {children}
    </ul>
  );
};

export { DraggableRecipe, DroppableList };
