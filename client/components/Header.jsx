import React from 'react';
import styles from './css/Header.css';

const Header = () => {
  return (
    <div className={styles['header-container']}>
      <h1 className={styles['title']} >Plant Hero</h1>

      <div>
      </div>

      <h6 className={styles['description']}>For all the plant <del>killers</del> lovers.</h6>
    </div>
  )
}

export default Header;