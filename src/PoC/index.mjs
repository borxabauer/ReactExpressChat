const  host = "https://web-develop-react-express-chat.herokuapp.com"
const  htmlGetUsers = document.querySelector("#getUsers");
const  htmlGetLogin = document.querySelector("#getLogin");
const  htmlGetAuth  = document.querySelector("#getAuth");
const  htmlPostAuth = document.querySelector("#postAuth");
const htmlUpdateButton = document.querySelector("#updateButton");
const htmlLoginButton=document.querySelector("#loginButton");
const htmlAuthButton =document.querySelector("#authButton");
const htmlGetAuthButton=document.querySelector("#getAuthButton");
htmlUpdateButton.addEventListener("click", updateButtonClickHandler);
htmlLoginButton.addEventListener("click", loginButtonClickHandler);
htmlAuthButton.addEventListener("click", authButtonClickHandler);
htmlGetAuthButton.addEventListener("click",getAuthButtonClickHandler);

async function get(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}

const data= {userName:"Pocholo2",password:"1234"};
const json=JSON.stringify(data);
const token= authToken("1649239231452","1234");
const content = JSON.stringify({content: "Tengo una cosa barbara."});



async function post(url,data){
    const response =await fetch(
        url,
        {
        method: 'POST',
        body :data,
        headers:{
            "Content-Type":
            "application/json",
        }
        }
    );
    const responseData = await response.json();
    console.log(responseData);
    return responseData
}

    async function authGet(url,token){
        const response=await fetch(
            url,
            {
                headers:{
                    Authorization:token
                }
            }
        );
        const data = await response.json();
        console.log(data);
        return data;

    }

function authToken(id,secret){
    const authToken=`${id}:${secret}`;
    const base64token=btoa(authToken);
    return `Basic ${base64token}`;
}

async function authPost(url, token, data) {
    const response = await fetch(
        url,
        {
            method: "POST",
            body: data,
            headers: {
                "Content-Type": "application/json",
                Authorization: token
            }
        }
    );
    const responseData = await response.json();
    console.log(responseData);
    return responseData;
}

function updateButtonClickHandler() {
    get(host+"/users/");
}
function loginButtonClickHandler(){
    post(host+"/login/",json);
}
function authButtonClickHandler(){
    authGet(host+"/messages/",token);
}
function getAuthButtonClickHandler(){
    authPost(host+"/message/",token,content);
}