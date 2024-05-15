import React from 'react'

const Bars = ({styles}) => {
  return (
    <div >
    <div className={styles.bar}></div>
    <div className={styles.bar}></div>
    <div className={styles.bar}></div>
  </div>
  )
}

export default Bars