import styles from "./cart.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import {
    selectCartItems,
    selectCartItemsCount,
} from "../redux/cart/cartSelector";
import { connect } from "react-redux";
import { motion } from "framer-motion";

const Cart = ({ cartCount }) => {
    const navigate = useNavigate();
    return (
        <motion.div

            whileTap={{ scale: "0.7" }}
            whileHover={{ scale: "1.2" }}
            className={`${styles.cartCss} flex j-center a-center`}
            onClick={() => navigate("/cart")}
        >
            <div className={`${styles.cartNum} flex a-center j-center`}>
                {cartCount >= 100 ? "99+" : cartCount}
            </div>
            <FaShoppingCart className={styles.cartIcon}></FaShoppingCart>
        </motion.div>
    );
};
const mapStateToProps = createStructuredSelector({
    cartCount: selectCartItemsCount,
    cartList: selectCartItems,
});
export default connect(mapStateToProps)(Cart);
