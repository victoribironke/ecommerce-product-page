import { useState } from "react";
import styles from "../styles/Description.module.css";

const Description = () => {
  const [counter, setCounter] = useState(0);

  const change = (num) => {
    if (num == 0) {
      setCounter(counter - 1);
    } else if (num == 1) {
      setCounter(counter + 1);
    }
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.up}>sneaker company</p>
      <p className={styles.down}>Fall Limited Edition Sneakers</p>
      <p className={styles.description}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className={styles.prices}>
        <p className={styles.one}>$125.00</p>
        <p className={styles.two}>50%</p>
        <p className={styles.three}>$250.00</p>
      </div>
      <div className={styles.container}>
        <div className={styles.adder}>
          <img
            onClick={counter == 0 ? null : () => change(0)}
            src="/icon-minus.svg"
            className="minus"
            alt="minus"
          />
          <p className="cha">{counter}</p>
          <img
            onClick={() => change(1)}
            className="plus"
            src="/icon-plus.svg"
            alt="plus"
          />
        </div>
        <div className={styles.button}>
          <img src="/icon-cart-2.svg" alt="cart" />
          <p>Add to cart</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
