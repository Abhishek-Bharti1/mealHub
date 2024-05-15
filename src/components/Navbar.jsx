import React from 'react';
import { IoFastFoodOutline } from 'react-icons/io5';
import { MdOutlineFavorite } from "react-icons/md";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const favoriteRecipes = useSelector(state => state.recipes.favoriteRecipes);

  return (
    <nav className={styles.nav}>
      <motion.div
        initial={{ x: '-100%' }}
        whileInView={{ x: 0 }}
        className={styles.navIcon}
      >
        <IoFastFoodOutline />
      </motion.div>
      <div>
        <Link to="/fav" className={styles.link}>
        <MdOutlineFavorite />{favoriteRecipes.length}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
