import React, { useState } from "react";
import styles from "../Carousel.module.css";

interface Props {
    images: string[];
}

const Carousel: React.FC<Props> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClickPrev = () => {
        const lastIndex = images.length - 1;
        const shouldResetIndex = currentIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentIndex - 1;
        setCurrentIndex(index);
    };

    const handleClickNext = () => {
        const lastIndex = images.length - 1;
        const shouldResetIndex = currentIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentIndex + 1;
        setCurrentIndex(index);
    };

    const handleClickDot = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className={styles.carousel}>
            <div className={styles.slide}>
                {images.map((src, index) => (
                    <img
                        key={src}
                        className={index === currentIndex ? styles.active : ""}
                        src={src}
                        alt={`Image ${index + 1}`}
                    />
                ))}
            </div>
            <div className={styles.controls}>
                <button onClick={handleClickPrev}>&lt;</button>
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleClickDot(index)}
                        className={index === currentIndex ? styles.active : ""}
                    >
                        &bull;
                    </button>
                ))}
                <button onClick={handleClickNext}>&gt;</button>
            </div>
        </div>
    );
};

export default Carousel;

/* 


import Carousel from "../components/Carousel";

const images = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
  "/image5.jpg

*/
