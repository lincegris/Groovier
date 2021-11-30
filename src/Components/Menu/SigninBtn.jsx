import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
export default function SigninBtn() {
    const styles= {
        button:{
            position:"absolute",
            right:"5px",
            marginRight:"5px",
        }
    };
    return (
        <>
        <Button style={styles.button} variant="success" as={ Link} to="/signin" >Sign In</Button>
        </>
    );
  };