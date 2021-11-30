import React,{useState, useEffect} from "react";
import { CardGroup } from "react-bootstrap";
import Loading from "../Loading";
import firebase from "../../Config/firebase";
import DBproducts from "./DBproducts";

export default function HomeProducts(){

const [productos, setProductos] = useState([]);
const [loading, setLoading] = useState(true);
const [reload, setReload] = useState(true);

    async function request(){
        try{
            const productQuery = await firebase.database.collection("Productos")
            .get();
            if(productQuery.docs){
                setProductos(productQuery.docs);
                setLoading(false);
                setReload(false);
            }
        }catch(e){
            console.log("error al mostrar productos");
        }
    }
    useEffect(
        ()=>{
            if(reload)request();
        },[reload]
    );

    return(
    <Loading active={loading} >
        <>
        <CardGroup>
            {productos.map(producto=><DBproducts key={producto.id} datos={{...producto.data(),id:producto.id}} />)}
        </CardGroup>
        </>
    </Loading>
    );
}