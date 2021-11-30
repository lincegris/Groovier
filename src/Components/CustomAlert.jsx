import React from "react";
//import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert';
const styles={
    alert:{
        marginTop:"10px"
    }
};
export default function CustomAlert(props){
    const {variant,text} = props;  
    return(

        <Alert  variant={variant} style={styles.alert} >
            {text}
        </Alert>
    )
};
