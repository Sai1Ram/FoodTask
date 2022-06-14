import styles from "./foodCard.module.css";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ButtonAddRemove } from "./ButtonAddRemove";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
    selectCartItems,
    selectCartItemsCount,
} from "../redux/cart/cartSelector";
import { cartAddItem, cartRemoveItem } from "../redux/cart/cart.action";
const FoodCard = ({
    item,
    cartCount,
    cartList,
    cartAddItem,
    cartRemoveItem,
}) => {
    const { id, img, name, price, info } = item;
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [100, -100], [-30, 30]);
    const handleQuantity = () => {
        let quantity = 0;
        if (cartCount !== 0) {
            const foundItemInCart = cartList.find((item) => item.id === id);
            if (foundItemInCart) {
                quantity = foundItemInCart.quantity;
            }
        }
        return quantity;
    };
    return (
        <div className={`${styles.wrap} flex j-center a-center`}>
            <motion.div
                className={`${styles.foodCard} flex f-col a-center`}
                style={{ x, y, rotateX, rotateY, z: 100 }}
                drag
                dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
                dragElastic={0.16}
                tabIndex="1"
            >
                <div
                    className={`${styles.image}`}
                    style={{ x, y, rotateX, rotateY, z: 100 }}
                    drag
                    dragConstraints={{ top: 0, left: 0, bottom: 0, right: 0 }}
                    dragElastic={0.16}
                >
                    <img src={img} alt="" />
                </div>
                {/* <div className={`flex f-col ${styles.contentWrap} a-center`}> */}
                <div className={`${styles.priceClass} flex f-col a-center`}>
                    <h3>${price}.00</h3>
                    <ButtonAddRemove
                        quantity={handleQuantity()}
                        handdleAddItems={() => {
                            cartAddItem(item);
                        }}
                        handdleRemoveItems={() => cartRemoveItem(item)}
                    />
                    <div className={`${styles.content} flex f-col`}>
                        <h3>{name}</h3>
                        <p>{info}</p>
                    </div>
                </div>
                {/* <div className={`${styles.content} flex f-col`}>
                        <h3>{name}</h3>
                        <p>{info}</p>

                    </div> */}
                {/* </div> */}
            </motion.div>
        </div>
    );
};
const mapStateToProps = createStructuredSelector({
    cartCount: selectCartItemsCount,
    cartList: selectCartItems,
});
const mapDispatchToProps = (dispatch) => ({
    cartAddItem: (items) => dispatch(cartAddItem(items)),
    cartRemoveItem: (items) => dispatch(cartRemoveItem(items)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodCard);
