import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Carousel } from 'react-bootstrap';

const ImageCarousel = () => {
  const images = [
    { src: 'src/assets/imgs/camera.svg', alt: 'Primeiro Slide' },
    { src: 'src/assets/imgs/computador 1.svg', alt: 'Segundo Slide' },
    { src: 'src/assets/imgs/echo.svg', alt: 'Terceiro Slide' },
    { src: 'src/assets/imgs/fone.svg', alt: 'Quarto Slide' },
    { src: 'src/assets/imgs/kindle.svg', alt: 'Quinto Slide' },
    { src: 'src/assets/imgs/notebook.svg', alt: 'Sexto Slide' },
    { src: 'src/assets/imgs/ps5.svg', alt: 'Sétimo Slide' },
    { src: 'src/assets/imgs/smartwhatch.svg', alt: 'Oitavo Slide' },
  ];

  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <a href="#">
            <img
              className="d-block carousel-img"
              src={image.src}
              alt={image.alt}
              style={{ width: '18.74em', height: '41em' }}
            />
          </a>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
