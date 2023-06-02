import React, { useContext } from 'react';
import styles from './AddToCartButton.module.css';
import {ShopContext} from '../context/ShopContext';
import cart from '../assets/cart.png';

export const AddToCartButton = (props) => {
    const {addToCart, cartItems} = useContext(ShopContext);
    const cartItemAmount = cartItems[props.id];

    return (
        <div className={styles.addBtn} onClick={() => addToCart(props.id)}>
            <div className={styles.addBtnContainer}>
                <div className={styles.addBtnItem1}>Add To Cart</div>
                <div className={styles.addBtnItem2}></div>
                <div className={styles.addBtnItem3}>
                    <img src={cart} alt="cart sign" />
                    {cartItemAmount > 0 && <> &nbsp;({cartItemAmount}) </>}
                </div>
            </div>
        </div>
    );
}
