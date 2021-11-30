import { Col, Container,Row } from "react-bootstrap";
export default function Footer() {
    return (
        <>
            <hr/>
            <Container>
                <Row>
                    <Col>
                        <ul>
                            <dl/>Sobre Nosotros <br/>
                            <dl/> Como Funciona Groovier <br/>
                            <dl/> Centro de Ayuda <br/>
                            <dl/> Blog <br/>
                        </ul>
                    </Col>
                    <Col> 
                        <ul>
                            <dl/> Prensa <br/>
                            <dl/> Politica de privacidad <br/>
                            <dl/> Terminos de uso <br/>
                            <dl/> Confianza y seguridad <br/>
                        </ul>
                    </Col>
                </Row>  
            </Container>
            <hr/>
            <div>
                <footer>
                    <nav>
                        <span /> Facebook
                        <span /> Twitter
                        <span /> Instagram
                        <span /> Pinterest
                    </nav>
                </footer>
            </div>
             
        </>
    );
  };