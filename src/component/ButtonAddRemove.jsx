import styles from './buttonAddRemove.module.css';
import { HiPlusSm } from "react-icons/hi";
import { HiMinusSm } from "react-icons/hi";
export const ButtonAddRemove = ({ quantity, handdleAddItems, handdleRemoveItems }) => {
    return (
        <div className={`${styles.buttonAddRemove}`}>
            {quantity !== 0 ? (<button className={`${styles.buttonAddRemovePositive} flex a-center`}>
                <HiMinusSm onClick={
                    handdleRemoveItems
                } className={`${styles.HiIconSm}`} /> <span>{quantity}</span> <HiPlusSm className={`${styles.HiIconSm}`} onClick={handdleAddItems} />
            </button>) : (<button className={`${styles.buttonAddRemoveNegative} flex a-center`} onClick={handdleAddItems}>
                <span>add to cart</span>
                <HiPlusSm className={`${styles.HiIconSm}`} />
            </button>
            )}
        </div>
    )
}