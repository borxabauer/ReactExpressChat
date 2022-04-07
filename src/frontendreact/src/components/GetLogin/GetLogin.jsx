

import { useState } from "react";

function GetLogin() {
    const host="https://web-develop-react-express-chat.herokuapp.com";
    const data={usuario:"Pocholo3",password:"1234"};
    const json=JSON.stringify(data);
    const [users,setUsers]= useState("");

    async function get(url){
        const response =await fetch(url);
        const data=await response.json();
        return data;
    }

    function updateButton() {
        console.log(get(host+"/users/"));
    }



    return(
        <>
        <h1>Conseguir Usuarios</h1>
        <h2>Respuesta GET /users/: <span id={users}></span></h2>
        <button onClick={updateButton}>Update</button>
        </>
    )
}
export default GetLogin;