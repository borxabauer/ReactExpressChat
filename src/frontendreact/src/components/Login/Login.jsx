
import { useState } from "react";

function Login() {
    const host="https://web-develop-react-express-chat.herokuapp.com";
    const data={usuario:"Cristian Benzema",password:"1234"};
    const json=JSON.stringify(data);
    const [login,setLogin]= useState("");

    async function post(url,data){
        const response =await fetch(
            url,
            {
                method:'POST',
                body:data,
                headers:{
                    "Content-Type":"application/json",
                }

            }
        );
        const responseData= await response.json();
        return responseData;
    }

    function loginButton() {
        console.log(post(host+"/login/",data));
    }



    return(
        <>
        <h1>Crear Usuario</h1>
        <h2>Respuesta POST /users/: <span id={login}></span></h2>
        <button onClick={loginButton}>Login</button>
        </>
    )
}
export default Login ;