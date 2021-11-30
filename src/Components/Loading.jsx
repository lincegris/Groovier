import React from "react";

import Spinner from 'react-bootstrap/Spinner';

export default function Loading(props){
    const {active} = props;  

    if(active){

        return(
            <>
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="danger" />
            </>
        )
    }else{
        return(
            <>
                {props.children}
            </>
        )

    }
};
