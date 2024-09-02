import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import cameraImg from '../assets/imgs/camera.svg';
import computadorImg from '../assets/imgs/computador 1.svg';
import echoImg from '../assets/imgs/echo.svg';
import foneImg from '../assets/imgs/fone.svg';
import kindleImg from '../assets/imgs/kindle.svg';
import notebookImg from '../assets/imgs/notebook.svg';
import ps5Img from '../assets/imgs/ps5.svg';
import smartwhatchImg from '../assets/imgs/smartwhatch.svg';

const ImageCarousel = () => {
  const images = [
    { src: cameraImg, alt: 'Primeiro Slide' },
    { src: computadorImg, alt: 'Segundo Slide' },
    { src: echoImg, alt: 'Terceiro Slide' },
    { src: foneImg, alt: 'Quarto Slide' },
    { src: kindleImg, alt: 'Quinto Slide' },
    { src: notebookImg, alt: 'Sexto Slide' },
    { src: ps5Img, alt: 'Sétimo Slide' },
    { src: smartwhatchImg, alt: 'Oitavo Slide' },
  ];

  return (
    <section>
      <Carousel id='carouselExampleFade' className='d-block'>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <a href="#">
              <img
                className="d-block carousel-img w-100"
                src={image.src}
                alt={image.alt}
                style={{ width: '34.75em', height: '34.75em' }}
              />
            </a>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default ImageCarousel;
