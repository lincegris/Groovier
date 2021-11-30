import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import FormGroup from "../Components/FormGroup";
import Button from "react-bootstrap/Button";
import firebase from "../Config/firebase";
import CustomAlert from "../Components/CustomAlert";
import Loading from "../Components/Loading";
import { useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState([true]);
  const [alert, setAlert] = useState({ variant: "", text: "" });
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("testing");
    setLoading(false);
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    console.log("data", data);
    try {
      const responseUser = await firebase.auth.signInWithEmailAndPassword(
        data.email,
        data.password
      );

      if (responseUser.user.uid) {
        const userInfo = await firebase.database
          .collection("usuarios")
          .where("userId", "==", responseUser.user.uid)
          .get();
        console.log("userInfo", userInfo.docs[0]?.data());
        setAlert({ variant: "success", text: "Bienvenido" });
        setLoading(false);
        context.loginUser(userInfo.docs[0]?.data());
        setTimeout(() => {
            navigate("/");
        }, 3000);
      }
    } catch (e) {
      console.log("error", e);
      setLoading(false);
      if (e.code === "auth/wrong-password") {
        setAlert({ variant: "danger", text: "Contraseña incorrecta" });
      }
      if (e.code === "auth/user-not-found") {
        setAlert({
          variant: "danger",
          text: "El correo ingresado no está registrado",
        });
      }
    }
  };

  return (
    <Loading active={loading}>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup
            label="Email"
            type="email"
            register={{ ...register("email", { required: true }) }}
          />
          <FormGroup
            label="password"
            type="password"
            register={{
              ...register("password", { requiered: true, minLength: 6 }),
            }}
          />
          {errors.password?.type === "required" && (
            <span>El campo es obligatorio</span>
          )}
          {errors.password?.type === "minLength" && (
            <span>Debe completar al menos 6 caracteres</span>
          )}
          <CustomAlert variant={alert.variant} text={alert.text} />

          <Button type="submit" variant="success">
            {" "}
            Ingresar
          </Button>
        </form>
      </div>
    </Loading>
  );
}
