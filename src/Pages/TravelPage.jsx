import React/*,{useContext}*/ from "react";
import { useForm } from "react-hook-form";
import { Alert, Button, Card, Form } from "react-bootstrap";
import firebase from "../Config/firebase";
import { useNavigate } from "react-router-dom";
//import AuthContext from "../Context/AuthContext";

export default function Travel(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    //const context = useContext(AuthContext);
    const navigate = useNavigate();

    const volver = async () => {
        navigate("/");
      };

  const onSubmit = async (data) => {
    console.log("data", data);
    try {
      const document = await firebase.database.collection("viajes").add(...data/*, JSON.parse(context.userInfo) */);
    //fallo al intentar recuperar datos del usuario
      console.log(document);
    } catch (e) {
      console.log("error", e);
    }
  };

  console.log(errors);
  const styles = {
    button: {
      marginRight: "10px",
      paddingLeft: "10px",
    },
  };

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label column="lg" lg={2}>
              Indique cual sera su proximo viaje
            </Form.Label>
            <br />
            <Form.Label>Pais de Origen</Form.Label>
            <Form.Select
              className="me-sm-2"
              id="inlineFormCustomSelect"
              {...register("origen", { required: true })}
            >
              <option value="Argentina">Argentina</option>
              <option value=" EEUU"> EEUU</option>
              <option value=" Brasil"> Brasil</option>
              <option value=" Uruguay"> Uruguay</option>
              <option value=" Otro"> Otro</option>
            </Form.Select>
            <Form.Label>Pais de Destino</Form.Label>
            <Form.Select
              className="me-sm-2"
              id="inlineFormCustomSelect"
              {...register("destino", { required: true })}
            >
              <option value="EEUU">EEUU</option>
              <option value=" Alemania"> Alemania</option>
              <option value=" Canada"> Canada</option>
              <option value=" Mexico"> Mexico</option>
              <option value=" Argentina"> Argentina</option>
              <option value=" Brasil"> Brasil</option>
              <option value=" otro"> otro</option>
            </Form.Select>
            <Form.Label>Fecha del viaje: </Form.Label>
            <Form.Control
              type="datetime"
              placeholder={date}
              {...register("fecha", { required: true })}
            />
            {errors.fecha?.type === "required" && (
              <Alert variant="danger">Ingrese una fecha valida</Alert>
            )}
            <br />
            <Button
              type="reset"
              variant="outline-secondary"
              style={styles.button}
              onClick={volver}
            >
              atras
            </Button>
            <Button
              type="submit"
              variant="outline-primary"
              style={styles.button}
            >
              Informar viaje
            </Button>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}
