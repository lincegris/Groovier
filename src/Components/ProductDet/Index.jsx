import React from "react";
import {Card} from 'react-bootstrap';

export default function DetalleProducto(props) {
    const {datos} = props;
    console.log(props.datos);

    return(
            <Card style={{ width: '25rem' }}>
                <label/> Tarjeta de datos del Producto
                <Card.Img variant="top" src={datos.thumbnail} alt="prod-img"/>
                <Card.Body>
                    <Card.Title>{datos.title}</Card.Title>
                    <Card.Text> <span>Precio: $ {datos.price}</span><br/>
                    <span>Marca: {datos.attributes[0].value_name}</span><br/>
                    <span>Garantia: {datos.warranty}</span><br/>
                    </Card.Text>
                </Card.Body>
            </Card>
    )
}