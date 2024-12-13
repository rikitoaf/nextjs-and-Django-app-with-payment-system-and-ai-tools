import { useState, useRef, useEffect } from 'react';

const ImageSlider = ({ images }) => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <div className="carousel" ref={carouselRef}>
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={`/images/${image}`} alt={`Blog Image ${index + 1}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
      <button onClick={handlePrev} className="carousel-button prev">
        &#8249;
      </button>
      <button onClick={handleNext} className="carousel-button next">
        &#8250;
      </button>
      <style jsx>{`
        .carousel-container {
          overflow: hidden;
          position: relative;
        }
        .carousel {
          display: flex;
          transition: transform 0.5s ease-in-out;
        }
        .carousel-item {
          min-width: 100%;
        }
        .carousel-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
          font-size: 20px;
        }
        .carousel-button.prev {
          left: 10px;
        }
        .carousel-button.next {
          right: 10px;
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;
