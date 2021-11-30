import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

export default function Product(props) {
    const {data} = props;
    console.log(data);
    const [loading, setLoading] = useState(true);
    
    useEffect(
        ()=>{

            console.log("ya");
            setLoading(false);
        },[]
    );

    if(loading){
        return(
        <div>
            loading...
        </div>
        )
    }else{
        return(
            <div>
               <h2>{data.title}</h2>
               <p>$ {data.price}</p>
               <img src={data.thumbnail} alt="img" />
               <button><Link to={"/products/"+data.id}>Ver detalle</Link></button>
            </div>
        )
        };
}









