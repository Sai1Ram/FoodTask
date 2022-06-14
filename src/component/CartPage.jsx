import styles from "./cartPage.module.css";
import Cart from "./Cart";
import { Logo } from "./Logo";
import { OurMenu } from "./OurMenu";
import { EmptyCart } from "./EmptyCart";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from "../redux/cart/cartSelector";
import { useNavigate } from "react-router-dom";
const CartPage = ({ cartCount, cartList, cartTotal }) => {
  const navigate = useNavigate();
  return (
    <div className={`${styles.cartPage}`}>
      <div className={`${styles.header}`}>
        <Logo />
        <Cart />
      </div>
      {cartCount === 0 ? (
        <EmptyCart />
      ) : (
        <div className={`${styles.order}`}>
          <div className={`${styles.orderHeading}`}>
            <h1>Your Order</h1>
            <hr />
          </div>
          <div className={`${styles.orderMenu}`}>
            <OurMenu newList={cartList} />
          </div>

          <div className={`${styles.orderTotal} flex j-center a-center f-col`}>
            <hr />
            <div
              className={`${styles.total} flex a-center`}
              style={{ justifyContent: "space-between", width: "50%", alignSelf: "flex-end" }}
            >
              <h1>Order Total</h1> <h2>=</h2> <h2> {cartTotal}</h2>
            </div>
            <button
              className="btn flex j-center a-center"
              onClick={() => navigate("/mainMenu")}
            >
              Shop More
            </button>
          </div>
        </div>
      )}

      {/* <EmptyCart /> */}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CartPage);
