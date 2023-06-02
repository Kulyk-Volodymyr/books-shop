import React, {useContext} from 'react';
import styles from './BookPage.module.css';
import {ShopContext} from '../../context/ShopContext';
import { AddToCartButton } from '../../components/AddToCartButton';
import { ContinueButton } from '../../components/ContinueButton';

export const BookPage = () => {
    const {bookInfo} = useContext(ShopContext);
    const {
        id,
        title, 
        author, 
        bookImage, 
        price, 
        publisher, 
        language, 
        paperback, 
        dimensions, 
        about
    } = bookInfo;

    return (
        <div className={styles.main}>
            <div className={styles.section1}>
                <div className={styles.image}>
                    <img src={bookImage} alt={title} />
                </div>
                <h1>{title}</h1>
                <p>by <b>{author}</b></p>
                <p>$ {price}</p>
                <div className={styles.addButton}>
                    <AddToCartButton id={id} />
                </div>
                <div className={styles.description}>
                    {about.map((i, key) => <p key={key}>{i}</p>)}
                </div>
            </div>
            <div className={styles.section2}>
                <h2>Product details</h2>
                <p><b>Publisher:</b> {publisher}</p>
                <p><b>Language:</b> {language}</p>
                <p><b>Paperback:</b> {paperback}</p>
                <p><b>Dimensions:</b> {dimensions} inches</p>
                <div className={styles.button}>
                    <ContinueButton />
                </div>
            </div>
        </div>
    );
}
