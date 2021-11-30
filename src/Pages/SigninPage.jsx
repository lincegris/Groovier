import React, {useState} from "react";
import firebase from "../Config/firebase";
import { useForm } from "react-hook-form";
import FormGroup from "../Components/FormGroup";
import LoadingBtn from "../Components/Buttons/LoadingBtn";
import CustomAlert from "../Components/CustomAlert";
import Container from "react-bootstrap/Container";
//import { useLocation } from "react-router";


export default function SignIn() {

    const { register, handleSubmit,formState:{errors} } = useForm();
/*  const location = useLocation();
    console.log(location);
    const {facebook} = location.state;
    console.log("Location", facebook); */
    const [loading,setLoading] = useState(false);
    const [alert,setAlert] = useState({variant:"",text:""});
    
    
    const onSubmit = async (data) => {
        setLoading(true);
        console.log("data",data);
        try{
            const responseUser = await firebase.auth.createUserWithEmailAndPassword(data.email,data.password);
            console.log("user",responseUser.user.uid);
            if(responseUser.user.uid){
                const document = await firebase.database.collection("usuarios")
                .add({
                    nombre:data.nombre,
                    apellido:data.apellido,
                    userId:responseUser.user.uid
                });
                console.log("document",document);
                setLoading(false);
                setAlert({variant:"success",text:"Registro exitoso"});
            }
        }catch(e){
            console.log("error",e.code);
            setLoading(false);
            if(e.code==="auth/email-already-in-use"){
                setAlert({variant:"danger",text:"El email se encuentra registrado"});
            }
            if(e.code==="auth/invalid-email"){
                setAlert({variant:"danger",text:"Ingrese un email valido"});
            }
        }
    };


    return (
        <div>
            <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup label="Nombre" register={{...register("nombre",{required:true})}}  />
                {errors.nombre && <span>El campo es obligatorio</span>}
                <FormGroup label="Apellido" register={{...register("apellido",{required:true})}}  />
                <FormGroup label="Email" type="email" register={{...register("email",{required:true})}}  />
                <FormGroup label="Contraseña" type="password" register={{...register("password",{required:true,minLength:6})}}  />
                {errors.password?.type==="required" && <span>El campo es obligatorio</span>}
                {errors.password?.type==="minLength" && <span>Debe completar al menos 6 caracteres</span>}
           
                <LoadingBtn loading={loading} type="submit" >Registrarme</LoadingBtn>

                <CustomAlert variant={alert.variant} text={alert.text}  />
            </form>
            </Container>
        </div>
    );
  }; 