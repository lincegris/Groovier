import React,{useState, useEffect } from "react";
import {Container ,Row, Col, Spinner } from "react-bootstrap";
import BuyBtn from "../Components/Buttons/Buybtn";
import TravelBtn from "../Components/Buttons/Travelbtn";
import HomeProducts from "../Components/ProductDet/HomeProducts";


export default function HomePage() {

    const [loading, setLoading] = useState([true]);

    useEffect(
        ()=>{
            console.log("array");
            setLoading(false);
        },[]
    );

    if(loading)
    {
        return( 
            <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
            </Spinner>
            );
    }else{
        return(
            <>              
                <div>
                    <h1> <b>Compra en el exterior de manera simple, fácil y segura </b></h1> <br/>
                    <span/> Consigue esos productos que siempre quisiste al precios más bajo y entregados por viajeros a tu ciudad            
                </div>
                <Container>
                    <Row>
                        <Col> <BuyBtn /> </Col>
                        <Col> <TravelBtn /> </Col>
                    </Row>
                </Container>
                <hr/>
                <div>
                    <h1> <b>Productos entregados recientemente </b></h1> <br/>
                    <label/> Estos productos fueron entregados recientemente al otro lado del mundo. De forma segura, rápida y barata
                </div>
                <HomeProducts/>

            </>
        );
    } 
};