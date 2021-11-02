import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Slides(){
    return(
        <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./img/slides/princess.jpg"
            alt="Slide das Barbies Princesas"
          />
          <Carousel.Caption>
            <h3>Siga sua intuição.</h3>
            <p>Seu coração sempre sabe qual o caminho certo.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./img/slides/rapunzel.jpg"
            alt="Slide da Barbie Rapunzel"
          />
      
          <Carousel.Caption>
            <h3>Se ame.</h3>
            <p>A relação consigo é a melhor que você terá!</p>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    );
}