import React,{useState,useEffect} from "react";
import { useParams } from "react-router";
import DetalleProducto from "../Components/ProductDet/Index";
import {Spinner, Button, Badge, Card} from 'react-bootstrap';
import CustomAlert from "../Components/CustomAlert";
import { useNavigate } from "react-router-dom";
import {getById} from "../Services/ProductService";

function Checkout () {
    const [alert,setAlert] = useState({variant:"",text:""});
    const [producto,setProducto] = useState({});
    const [loading,setLoading] = useState(true);
    const {id}=useParams();
    const navigate = useNavigate();
    console.log(id);

    const volver = async () => {
        navigate("/buy");
      };
        useEffect(
            ()=>{
                getById(id)
                .then(res=>{
                    console.log(res.data);
                    if(res.data){
                        setProducto(res.data);
                        setLoading(false);
                    }

                });
                console.log("Got by ID");
            },[id]
        );

        const Confirmar = ()=>{
            setAlert({variant:"primary",text:"Gracias por su compra" });

        };


        if(loading){
            return(
                <div>
                  <Spinner animation="border" /> Loading
                </div>
            )
        }else{
            return(
                <>
                <h1><Badge bg="secondary">Estas a punto de comprar el siguiente producto:</Badge></h1>
                <form>
                    <Card style={{ width: '25rem' }}>
                        <DetalleProducto datos={producto} /> 
                        <Card.Body>
                            <Button variant="secondary" onClick={volver}>Atras</Button>
                            <Button type="button" variant="success" onClick={Confirmar} >Confirmar Compra</Button>
                            <br/><br/>
                            <CustomAlert variant={alert.variant} text={alert.text}  />
                        </Card.Body>
                    </Card>
                </form>
                </>
            )
        }        
 
}
export default Checkout