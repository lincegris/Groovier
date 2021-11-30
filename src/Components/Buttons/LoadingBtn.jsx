import React from "react";
//import Button from 'react-bootstrap/Button';
import {Button,Spinner} from 'react-bootstrap';

const styles={
    button:
    {
        color:"#fff",
        fontSize:"20px",
    }
};

export default function LoadingBtn(props){
    const {variant,type,loading} = props;    
    return(

        <Button 
            type={type || "submit"} 
            variant={variant || "primary"} 
            disabled={loading} 
            style={styles.button}
        >
            {
                loading &&
                <Spinner animation="border" size="sm" />
            }
            
            {props.children}
        </Button>
    )
    
};

