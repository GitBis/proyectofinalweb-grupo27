import react, {useRef} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'; //para notificaciones personalizadas
import 'react-toastify/dist/ReactToastify.css';
import { FaUserCircle } from "react-icons/all";
import { RiLockPasswordFill } from "react-icons/all";
import { useNavigate } from 'react-router';

const Login = () =>{
    //variables 
    const navigate = useNavigate();
    const username = useRef(null)
    const password = useRef(null)

    async function handleSubmit(e){
        e.preventDefault(); //haciendo que el boton no se recargue

        const usernameV = username.current.value;
        const passwordV = password.current.value;
        
        if(!usernameV || !passwordV  ) //campos vacios
        {
            toast('Todos los campos son obligatorios', {type: 'error'});
            return;
        }

        try{//haciendo la peticion a la API
            const response = await axios.post('https://posts-pw2021.herokuapp.com/api/v1/auth/signin', {username: usernameV, password: passwordV})
            if (response.status === 200){
                localStorage.setItem('token', response.data.token) //guardando token en el LS
                navigate('/main')
            }
            
        }catch(error){
            const {response} = error;
            
                let msg = ''; //inicializando varaible
                if(response.status=== 401){
                    msg = 'Contraseña incorrecta';
                }else if(response.status=== 404){
                    msg = 'Usuario inexistente';
                }else if(response.status === 500){
                    msg = 'Ups error de servidor, estamos intentando hacer que este problema no prosiga';
                }
                toast(msg, {type: 'error'});
            
        }
        
    }

    return(
        <div className=" loginpage">
        <form className="formc" onSubmit={handleSubmit}>
            <ToastContainer/>
            <div className="conteinerform">
            <div className="labls">
                
                <label className="username">Username</label>
                <FaUserCircle className="iconouser"/>
                <input className="inputlogin" type="text" placeholder ="Username" ref={username}/>
            </div>
            <div className="labls">
                <label className="username">Password</label>
                <RiLockPasswordFill className="iconopassword"/>
                <input className="inputlogin" type="password" placeholder ="Password" ref={password}/>
            </div>
            <button className="btnlogin" type="submit">Login</button>
            </div>

        </form>
        </div>

    )
    

}

export default Login 