import React from "react";
import {Card} from 'react-bootstrap';
import AuthContext from "../../Context/AuthContext";

const styles = {
    Imagen:{
        display: "block",
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:"auto",
        marginBottom:"auto",
        width:"80%"
    }
    
  };
export default function DBproducts (props){
  const {datos} = props;
  ;

  return(
    <AuthContext.Consumer>
    {
      context=>
      <Card style={{ width: '18rem' }}>
      <Card.Img style={styles.Imagen} src={datos.Imagen} />
        </Card>
    }
    </AuthContext.Consumer>
  )
}
