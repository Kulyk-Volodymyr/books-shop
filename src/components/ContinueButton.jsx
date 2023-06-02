import React from 'react';
import styles from './ContinueButton.module.css';
import { useNavigate } from 'react-router-dom';

export const ContinueButton = () => {
    const navigate = useNavigate();

    return (
        <>
            <button onClick={() => navigate("/")} className={styles.button} >
                Continue Shopping
            </button>
        </>
    );
}
