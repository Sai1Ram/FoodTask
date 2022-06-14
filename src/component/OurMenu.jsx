import styles from './ourMenu.module.css';
import FoodCard from './FoodCard';
export const OurMenu = ({ newList }) => {
    return (
        <div className={`${styles.ourMenu}  `}>{newList.map((items, index) => {
            return (<FoodCard item={items} />)
        })}</div>
    )
}
// image={items.img} id={items.id} nameOfFood={items.name} info={items.info} price={items.price} 