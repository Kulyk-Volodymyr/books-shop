import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';
import cart from '../assets/cart.png';
import styles from './Navbar.module.css';
import {ShopContext} from '../context/ShopContext';

export const Navbar = () => {
  const {getTotalBooksInCart} = useContext(ShopContext);
  const totalBooks = getTotalBooksInCart();

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <Link to='/'>
          <img src={logo} alt="cart" className={styles.logo}/>
        </Link>
        <div className={styles.links}>
          <Link to='/' className={styles.shopItem}>Shop</Link>
          <Link to='/cart'>
            <img src={cart} alt="cart" />
              {totalBooks > 0 && <span className={styles.booksQty}> ({totalBooks}) </span>}
          </Link>
        </div>
      </div>
    </div>
  );
}
