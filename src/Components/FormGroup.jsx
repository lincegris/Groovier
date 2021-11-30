import React from "react";
import Form from "react-bootstrap/Form";

export default function FormGroup(props){

    const {label, type, register} = props;

    return(
            <>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>{label}</Form.Label>
                    <Form.Control type={type || "text"} {...register} />    
                </Form.Group>
            </>

    )
}