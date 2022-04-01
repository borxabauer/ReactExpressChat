const host = "https://web-develop-react-express-chat.herokuapp.com"
const  htmlGetUsers = document.querySelector("#getUsers");
const  htmlGetLogin = document.querySelector("#getLogin");
const htmlUpdateButton = document.querySelector("#updateButton");
const htmlLoginButton=document.querySelector("#loginButton");

htmlUpdateButton.addEventListener("click", updateButtonClickHandler);
htmlLoginButton.addEventListener("click", loginButtonClickHandler);

async function get(url) {
    const response = await fetch(url, {
        headers: {
            'Accept': 'application/json'
        }
    });
    const data = await response.json();
    htmlGetUsers.innerText=JSON.stringify(data);
}

const data= {userName:"Pocholo",password:"1234"};
const json=JSON.stringify(data);


async function post(url,data){
    const response =await fetch(
        url,
        {
        method: 'POST',
        body :data,
        }
    );
    const responseData = await response.json();
    htmlGetUsers.innerText=JSON.stringify(login)
}


function updateButtonClickHandler() {
    get(host+"/users/");
}
function loginButtonClickHandler(){
    post(host+"/login/",json);
}
