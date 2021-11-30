import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getById } from "../Services/ProductService";
import DetalleProducto from "../Components/ProductDet/Index";
import { Spinner, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Detail() {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const volver = async () => {
    navigate("/buy");
  };
  useEffect(() => {
    getById(id).then((res) => {
      console.log(res.data);
      if (res.data) {
        setProducto(res.data);
        setLoading(false);
      }
    });
    console.log("Got by ID");
  }, [id]);
  if (loading) {
    return (
      <div>
        <Spinner animation="border" /> Loading
      </div>
    );
  } else {
    return (
      <>
        <DetalleProducto datos={producto} />
        <Button variant="secondary" onClick={volver} to="/buy">
          Atras
        </Button>
        <Button
          type="submit"
          variant="success"
          as={Link}
          to={"/checkout/" + id}
        >
          Comprar
        </Button>
      </>
    );
  }
}
