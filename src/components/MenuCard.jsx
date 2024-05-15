import React, { memo, useState } from "react";
import { motion } from "framer-motion";

const MenuCard = memo(({ title, image, description, onClick, isFavorite,styles,key }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };
  return (
    <motion.div
      className={styles.menuCard}
      key={key}
      initial={{ x: '100%', opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
  
    >
      <div>{title}</div>
      <main>
      <img src={image} alt={title} />
      {
        description ?  <p>{isExpanded ? description : `${description.slice(0, 200)}...`} <span className={styles.read} onClick={toggleExpand}>{isExpanded ? 'Read less' : 'Read more'}</span></p> : <p></p>
        
      }
      <button onClick={onClick}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
      </main>
    </motion.div>
  );
});

export default MenuCard;