import styles from "../styles/Sidebar.module.css";
import { useRef, useEffect } from "react";

const Sidebar = (props) => {
  const close = useRef(null);
  const sidebar = useRef(null);
  const closeSidebar = () => {
    sidebar.current.classList.toggle(styles.show);
  };

  useEffect(() => {
    props.show == true
      ? sidebar.current.classList.add(styles.show)
      : sidebar.current.classList.remove(styles.show);
  }, [props.show]);

  return (
    <div ref={sidebar} className={styles.sidebar}>
      <img
        src="/icon-close.svg"
        onClick={closeSidebar}
        ref={close}
        className={styles.closeImg}
        alt="close"
      />
      <ul className={styles.ul}>
        <li className={styles.li}>Collections</li>
        <li className={styles.li}>Men</li>
        <li className={styles.li}>Women</li>
        <li className={styles.li}>About</li>
        <li className={styles.li}>Contact</li>
      </ul>
    </div>
  );
};

export default Sidebar;
