import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export default function Loginbtn() {
    const styles= {
        button:{
            position:"absolute",
            right:"100px",
        }
    };
    return (
        <>
        <Button style={styles.button} variant="outline-success" as={Link} to="/login" >Log In</Button>
        </>
    );
  };