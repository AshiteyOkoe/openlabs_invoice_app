"use client";

import { useState, useEffect } from 'react';
// import styles from '@/app/ui/home.module.css';
import styles from './ImageGallery.module.css';
import clsx from 'clsx';

const ImageGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/images/a.jpg',
    '/images/b.jpg',
    '/images/c.jpg',
    '/images/d.jpeg',
    '/images/e.jpg',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [images]);

  const handleForwardClick = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handleBackwardClick = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  const handleIconClick = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <div className={clsx(styles.ImageGallery)}>
      <div className={clsx(styles.imageContainer)}>
        <img src={images[currentImage]} alt="Current Image" />
        <div className={clsx(styles.buttonContainer)}>
          <button className={styles.backwardButton} onClick={handleBackwardClick}>
            &#60;
          </button>
          <button className={styles.forwardButton} onClick={handleForwardClick}>
            &#62;
          </button>
        </div>
      </div>
      <div className={clsx (styles.iconContainer)}>
        {images.map((image, index) => (
          <div
            key={index}
            className={clsx(`icon ${currentImage === index ? 'active' : ''}`)}
            onClick={() => handleIconClick(index)}
          >
            &#9679;
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;