import React, {useState, useEffect} from "react";
import { getAll } from "../Services/ProductService";
import CardProd from "../Components/ProductDet/CardProd";
import Loading from "../Components/Loading";

export default function Buy() {

    const [productos, setProductos ] = useState([]);
    const [loading, setLoading ] = useState(true);

    useEffect(
        ()=>{
            getAll()
            .then(res=>{
                console.log(res);
                if(res.data.results){
                    setProductos (res.data.results);
                    setLoading(false);
                }
            });
            console.log("ya");
        },[]
    );
        return(

            <Loading active={loading}>
            <>
                {productos.map(producto=><CardProd key={producto.id} datos={producto} />)}
            </>

            </Loading>
            ) 
        };