import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './emptyCart.module.css';
export function EmptyCart() {
    const navigate = useNavigate()
    return (
        <div className={`${styles.wrap} flex a-center j-center f-col`}>
            <div className={`${styles.content} flex f-col a-center j-center`} >
                <div className={`${styles.container} flex f-col a-center j-center`}> <img src="logo.png" alt='' /></div>
                <p>Oops! Not added anything to cart</p>
            </div>
            <button onClick={() => navigate('/mainMenu')} className="btn flex a-center j-center">Shop Now</button>
        </div>
    )
}
