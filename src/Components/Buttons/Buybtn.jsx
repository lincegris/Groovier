import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


export default function BuyBtn() {
     
    return (
        <>
        <Button variant="outline-primary" as={Link} to="/buy"> Compra con Groovier </Button>
        </>
    );
  };