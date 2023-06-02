import React, { useContext } from 'react';
import styles from './Shop.module.css';
import {ShopContext} from '../../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { AddToCartButton } from '../../components/AddToCartButton';

export const Book = (props) => {
    const {id, title, price, bookImage} = props.data;
    const {sendBookId} = useContext(ShopContext);
    const navigate = useNavigate();

    return (
        <div className={styles.book}>
            <div className={styles.bookContainer}>
                <div className={styles.imgContainer}  onClick={() => {
                        sendBookId(id);
                        navigate("/book");
                    }}>
                    <img src={bookImage} alt={title} />
                </div>
                <div className={styles.description}>
                    <p  onClick={() => {
                        sendBookId(id);
                        navigate("/book");
                    }}>
                        <b>{title}</b>
                    </p>
                    <p> ${price} </p>
                    <div className={styles.btnContainer}>
                        <AddToCartButton id={id} />
                    </div>
                </div>
            </div>
        </div>
    );
}
