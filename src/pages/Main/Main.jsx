import react,{ useEffect, useState } from 'react';
import axios from 'axios'
import PostsContainer from '../../components/PostsContainer'
import PostForm from '../../components/PostForm'
import { useNavigate } from 'react-router';
import { FaUserCircle } from 'react-icons/all';
const Main = () => {
    const navigate = useNavigate();
    const user = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const [whoami, setWhoami] = useState();
   

    useEffect(()=>{

        async function identity(){
            const   response  = await axios.get('https://posts-pw2021.herokuapp.com/api/v1/auth/whoami',{
                headers: {
                    Authorization: `Bearer ${user}`
                },
            });
            setWhoami(response);
            console.log(response.data);
            localStorage.setItem('role', response.data.role);
            localStorage.setItem('username', response.data.username);
        }
        /**/
        

        if(user===null){
            navigate('/');
        }
        identity();
    },[]);
    const handleLogout = () =>{
        navigate('/login')
    }

    return(

        <div className="all" >
        <div  className ="allpage">
        <div className="Background_profile">
            <div className="Container_profile">
            < FaUserCircle className="icon_profile"/>
            <div className="lbls">
            <label className="lbluser"> Admin </label>
            <label className="lblname"> Username </label>
            
            </div>
            <div className="btnout">
                <button className="btnget_out" onClick={handleLogout}>Salir</button>
            </div>
            
            </div>
        </div>
        </div>
            <div>
                <PostForm/>
            </div>
        <div className="postsconteiner">
            <PostsContainer/>
        </div>
        </div>

        
        
    )
}

export default Main;