import React from "react";
import { Link } from "react-router-dom";
import {Card, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";

export default function CardProd(props){

    const {datos} = props;

    return(
        
        <Container>
            <Card style={{width:'25rem'}} >
            <Card.Img variant="top" src={datos.thumbnail} style={{ alignSelf:'center', height:'250px', width:'250px' }} />
                <Card.Body>
                    <Card.Title>{datos.title}</Card.Title>
                    <Card.Text>${datos.price}</Card.Text>
                </Card.Body>
                <Button variant="secondary" as={Link} to={"/product/"+datos.id}>Ver detalle</Button>
                <Button variant="success" as={Link} to={"/checkout"} >Comprar</Button>
            </Card>
            <br/>
        </Container>
    );
}
