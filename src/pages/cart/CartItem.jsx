import React, {useContext} from "react";
import {ShopContext} from "../../context/ShopContext";
import styles from './Cart.module.css';
import { useNavigate } from 'react-router-dom';

export const CartItem = (props) => {
    const {id, title, author, price, bookImage} = props.data;
    const {
        cartItems, 
        addToCart, 
        removeFromCart, 
        updateCartItemCount, 
        sendBookId
    } = useContext(ShopContext);
    const navigate = useNavigate();
    return (
        <div className={styles.cartItem}>
            <img src={bookImage} alt={title} className={styles.hover} onClick={() => {
                sendBookId(id);
                navigate("/book");
            }}/>
            <div className={styles.description}>

                <h3 className={styles.hover} onClick={() => {
                        sendBookId(id);
                        navigate("/book");
                    }}>{title}</h3>
                <p>by <b>{author}</b></p>
                <p> ${price} </p>

                <div className={styles.countHandler}>
                    <button onClick={() => removeFromCart(id)}> - </button>
                    <input 
                        value={cartItems[id]} 
                        onChange={(e) => updateCartItemCount(Number(e.target.value), id)} 
                    />
                    <button onClick={() => addToCart(id)}> + </button>
                </div>

            </div>
        </div>
    );
};