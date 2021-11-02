import "../styles.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Form, Container, Row, Col, Image, Button } from "react-bootstrap";


export default function Contact() {
    return (
        <>
            <Header />
            <main>
                <Container>
                    <h1> FALE CONOSCO</h1>
                    <Row>
                        <Col>
                            <Image src="./img/barbie-swan-lake.jpg" alt="Barbie Lago dos Cisnes" />
                        </Col>

                        <Col>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Nome:</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Telefone</Form.Label>
                                    <Form.Control type="text" placeholder="(XX) XXXXX-XXXX" />
                                </Form.Group>
                                 <p>Quais tipos de filmes da Barbie você já viu:  </p>
                                {['checkbox'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label="Animação"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                        />
                                    
                                        <Form.Check
                                            inline
                                            label="Musical"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                        />
                                        <Form.Check
                                            inline
                                            label="Fantasia"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-3`}
                                        />
                                    </div>
                                ))}

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control type="email" placeholder="nome@exemplo.com" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Nos deixe sua sugestão!</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                
                                <Button variant="dark" type="submit">Enviar</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>



            </main>
            <Footer />
        </>);

}