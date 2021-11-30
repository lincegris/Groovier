import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


export default function TravelBtn() {
     
    return (
        <>
        <Button variant="primary" as={Link} to="/travel"> Viaja con Groovier</Button>
        </>
    );
  };