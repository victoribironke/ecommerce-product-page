import styles from "../styles/Cart.module.css";
import { useRef, useEffect, useState } from "react";

const Cart = (props) => {
  const cart = useRef(null);
  const prices = useRef(null);
  const pricesDiv = useRef(null);
  const emptyDiv = useRef(null);

  useEffect(() => {
    props.show == true
      ? cart.current.classList.remove(styles.hide)
      : cart.current.classList.add(styles.hide);
  }, [props.show]);

  return (
    <div ref={cart} className={`${styles.wrapper} chacha ${styles.hide}`}>
      <p className={styles.text}>Cart</p>
      <hr className={styles.hr} />
      <div ref={emptyDiv} className={`${styles.empty} empty`}>
        Your cart is empty.
      </div>
      <div ref={pricesDiv} className={`${styles.items} item hide`}>
        <div className={styles.subItems}>
          <img
            src="/image-product-1-thumbnail.jpg"
            className={styles.thumbnail}
            alt="thumbnail"
          />
          <div className={styles.middle}>
            <p className={styles.up}>Fall Limited Edition Sneakers</p>
            <p ref={prices} className={`${styles.down} text`}>
              $125.00 x 3 <span className="span">$375.00</span>
            </p>
          </div>
          <img src="/icon-delete.svg" className={styles.delete} alt="delete" />
        </div>
        <button className={styles.button}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
