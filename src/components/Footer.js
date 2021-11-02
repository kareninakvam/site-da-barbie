import React from "react";
import { Container, Row, Col } from "react-bootstrap";


export default function Footer() {
    return (
        <>
            <footer className="footer">
                <Container>
                    <Row>
                        <Col>
                            <p>
                                Siga a Barbie nas Redes Sociais:
                                <div class="icons">
                                    <a href="https://www.instagram.com/Barbie/" > <img src="./img/icons-social-media/instagram-icon.png" alt="Abre nova janela do Instagram" /></a>
                                    <a href="https://www.youtube.com/user/barbie" > <img src="./img/icons-social-media/youtube-icon.png" alt="Abre nova janela do Youtube." /></a>
                                    <a href="https://www.twitter.com/Barbie/" > <img src="./img/icons-social-media/twitter-icon.png" alt="Abre nova janela do Twitter." /></a>
                                    <a href="https://www.facebook.com/barbie/" > <img src="./img/icons-social-media/facebook-icon.png" alt="Abre nova janela do Facebook." /></a>
                                </div>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
}