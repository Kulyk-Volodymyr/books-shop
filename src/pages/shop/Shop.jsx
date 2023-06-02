import React from 'react';
import styles from './Shop.module.css';
import {BOOKS} from '../../data/books';
import {Book} from './Book';

export const Shop = () => {
  return (
    <div className={styles.shop}>
        <div className={styles.books}>
            {BOOKS.map((book) => (
                <Book data={book} key={book.id} />
            ))}
        </div>
    </div>
  );
}
