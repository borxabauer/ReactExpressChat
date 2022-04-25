# React-router-dom

1. Instalamos:
```bash
npm install react-router-dom
```

2. Añadimos el wrapper a los componentes en los que queremos usar el router. En este caso se lo aplicamos en index.js a toda la aplicación. Importamos el
```js
    import { BrowserRouter } from "react-router-dom";
    ...
    <BrowserRouter>
        <App /> 
    </BrowserRouter>
```
2. En el componente en el que deseamos alternar diferentes vistas en base a las rutas, definimos la rutas deseadas. En cada ruta asociamos un path a un componente de vista.
```js
import { Routes, Route } from 'react-router-dom';
...
<Routes>
    <Route path='/chat/' element={<Chat/>}/>
    <Route path='/signup/' element={<SignUp/>}/>
</Routes>
```
3. Ahora podemos emplear el componente `<Link/>` para crear enlaces a las rutas definidas o el método creado mediante `useNavigate`  para cambiar la vista mostrada desde el código.
```js
import { Link } from 'react-router-dom';
...
<nav>
    <ul>
        <li><Link to="/chat/">Chat</Link></li>
        <li><Link to="/signup/">Sign up</Link></li>
    </ul>
</nav>
```
```js
import { useNavigate } from 'react-router-dom';
...
const navigate = useNavigate()
navigate("/chat/")
```