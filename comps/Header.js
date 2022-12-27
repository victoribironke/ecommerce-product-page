import styles from "../styles/Header.module.css";
import { useEffect, useRef, useState } from "react";
import Cart from "./Cart";
import Sidebar from "./Sidebar";

const Header = () => {
  const menu = useRef(null);
  const cart = useRef(null);
  const [showCart, setShowCart] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <header className={styles.header}>
      <Sidebar show={showSidebar} />
      <img
        src="/icon-menu.svg"
        ref={menu}
        onClick={() => setShowSidebar(!showSidebar)}
        className={styles.menuImg}
        alt="menu"
      />
      <img src="/logo.svg" className={styles.textImg} alt="logo" />
      <ul className={styles.ul}>
        <li className={styles.li}>Collections</li>
        <li className={styles.li}>Men</li>
        <li className={styles.li}>Women</li>
        <li className={styles.li}>About</li>
        <li className={styles.li}>Contact</li>
      </ul>
      <Cart show={showCart} />
      <img
        src="/icon-cart.svg"
        className={`${styles.cartImg} cartImg`}
        alt="cart"
        onClick={() => {
          setShowCart(!showCart);
        }}
      />
      <img src="/image-avatar.png" className={styles.avatarImg} alt="avatar" />
    </header>
  );
};

export default Header;
