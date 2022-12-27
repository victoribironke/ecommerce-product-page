import styles from "../styles/Images.module.css";
import { useState, useEffect, useRef } from "react";

const Images = () => {
  const [slide, setSlide] = useState(1);
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);
  const img4 = useRef(null);
  const img5 = useRef(null);
  const img6 = useRef(null);
  const img7 = useRef(null);
  const img8 = useRef(null);
  const wrapper2 = useRef(null);

  const changeCurrentImage = (num) => {
    const imgArray = [img1, img2, img3, img4];
    if (num == 1) {
      if (slide >= imgArray.length) {
        return;
      }
      imgArray.forEach((img) => img.current.classList.remove(styles.active));
      imgArray[slide].current.classList.add(styles.active);
      setSlide(slide + 1);
    } else if (num == 0) {
      if (slide == 1) {
        return;
      }
      imgArray.forEach((img) => img.current.classList.remove(styles.active));
      imgArray[slide - 2].current.classList.add(styles.active);
      setSlide(slide - 1);
    }
  };

  const changeImg = (src) => {
    wrapper2.current.innerHTML = `<img src=${src} alt="image" />`;
  };

  return (
    <div className={styles.wrapper}>
      <div onClick={() => changeCurrentImage(1)} className={styles.nextDiv}>
        <img src="icon-next.svg" alt="next" />
      </div>
      <div onClick={() => changeCurrentImage(0)} className={styles.previousDiv}>
        <img src="icon-previous.svg" alt="previous" />
      </div>
      <img
        src="/image-product-1.jpg"
        ref={img1}
        className={`${styles.img} ${styles.active}`}
        alt="image-1"
      />
      <img
        src="/image-product-2.jpg"
        ref={img2}
        className={styles.img}
        alt="image-2"
      />
      <img
        src="/image-product-3.jpg"
        ref={img3}
        className={styles.img}
        alt="image-3"
      />
      <img
        src="/image-product-4.jpg"
        ref={img4}
        className={styles.img}
        alt="image-4"
      />

      <div ref={wrapper2} className={styles.wrapper2}>
        <img src="/image-product-1.jpg" alt="image" />
      </div>

      <div className={styles.images}>
        <img
          src="/image-product-1-thumbnail.jpg"
          ref={img5}
          onClick={() => {
            changeImg("/image-product-1.jpg");
            img6.current.style.border = "none";
            img7.current.style.border = "none";
            img8.current.style.border = "none";
            img5.current.style.border = "3px solid var(--orange)";
          }}
          alt="image-1"
        />
        <img
          src="/image-product-2-thumbnail.jpg"
          ref={img6}
          onClick={() => {
            changeImg("/image-product-2.jpg");
            img5.current.style.border = "none";
            img7.current.style.border = "none";
            img8.current.style.border = "none";
            img6.current.style.border = "3px solid var(--orange)";
          }}
          alt="image-2"
        />
        <img
          src="/image-product-3-thumbnail.jpg"
          ref={img7}
          onClick={() => {
            changeImg("/image-product-3.jpg");
            img5.current.style.border = "none";
            img6.current.style.border = "none";
            img8.current.style.border = "none";
            img7.current.style.border = "3px solid var(--orange)";
          }}
          alt="image-3"
        />
        <img
          src="/image-product-4-thumbnail.jpg"
          ref={img8}
          onClick={() => {
            changeImg("/image-product-4.jpg");
            img5.current.style.border = "none";
            img6.current.style.border = "none";
            img7.current.style.border = "none";
            img8.current.style.border = "3px solid var(--orange)";
          }}
          alt="image-4"
        />
      </div>
    </div>
  );
};

export default Images;
