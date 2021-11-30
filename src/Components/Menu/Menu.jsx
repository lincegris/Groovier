import React from "react";
import { Button, Nav, Navbar, Container } from "react-bootstrap";
import "../../App.css";
import Loginbtn from "./Loginbtn";
import SigninBtn from "./SigninBtn";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";


export default function Menu() {
  return (
    <AuthContext.Consumer>
      {(context) => (
        <>
          <Container fluid>
            <Navbar bg="light" variant="light">
              <Nav className="me-center">
                <Navbar.Brand
                  className="brand"
                  as={Link}
                  to={{ pathname: "/" }}
                >
                  Groovier
                </Navbar.Brand>
                {context.userLogin && (
                  <>
                    <Nav.Link as={Link} to="/travel">
                      Viajar
                    </Nav.Link>
                    <Nav.Link as={Link} to="/buy">
                      Comprar
                    </Nav.Link>
                    <Button variant="danger" onClick={context.logoutUser}>Salir</Button>
                  </>
                )}
                {!context.userLogin && (
                  <>
                    <Loginbtn />
                    <SigninBtn />
                  </>
                )}
              </Nav>
            </Navbar>
            {context.userLogin && 
            <div>
              Hola {context.userInfo.nombre}
            </div>
            }
          </Container>
        </>
      )}
    </AuthContext.Consumer>
  );
}
