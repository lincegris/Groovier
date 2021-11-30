import React from "react";

export default function ProductBox(props){
    const {datos} = props;
    console.log(datos);

    return(
        <div>
            <div>
                <img src={producto.thumbnail} alt="product"></img>
            </div>
            <div>
                <p>{producto.title}</p>
                <p>{producto.price}</p>
                <button>Solicitar este articulo</button>
            </div>
            
        </div>
    )
}