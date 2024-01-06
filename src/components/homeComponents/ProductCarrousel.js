import React, {useState} from "react"; 
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Carousel } from 'react-bootstrap';  

//import styles from '../../styles/productCarrousel.module.css';

function ProductCarousel(props) {
  const [index, setIndex] = useState(0);
  const {images,description,brand}=props;

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {images.map((slide, i) => {
        return (
          <Carousel.Item>        
        <img
          className="d-block w-100"
          src={slide}
          alt="sliderImg"
          style={{maxHeight:"350px",maxWidth:"650px", margin:"auto"}} 
        />
        <Carousel.Caption>
          <h3>{brand}</h3>
          <p>{description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}
      
    </Carousel>
  );
}
export default ProductCarousel;