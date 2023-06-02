import React, {useContext} from 'react';
import styles from './Cart.module.css';
import { BOOKS } from '../../data/books';
import {CartItem} from './CartItem';
import {ShopContext} from "../../context/ShopContext";
import { ContinueButton } from '../../components/ContinueButton';

export const Cart = () => {
  const {cartItems, getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div className={styles.cart}>
      {totalAmount > 0 && <div>
        <h1>Your Books</h1>
      </div>}

      <div className={styles.books}>
        {BOOKS.map((book) => {
          if (cartItems[book.id] !== 0) {
            return <CartItem data={book} key={book.id} />
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className={styles.checkout}>
          <p>Subtotal: <b>${totalAmount}</b></p>
          <ContinueButton />
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
}
