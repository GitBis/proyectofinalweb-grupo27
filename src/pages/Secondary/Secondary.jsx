import react,{ useEffect } from 'react';
import PostsContainer from '../../components/PostsContainer'
import PostForm from '../../components/PostForm'
import { useNavigate } from 'react-router';
import { FaUserCircle } from 'react-icons/all';
const Secondary= () => {
    const navigate = useNavigate();
    const user = localStorage.getItem('token_secondary ');
   

    useEffect(()=>{
        if(user===null){
            navigate('/');
        }
    });
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
            <label className="lbluser"> User </label>
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

export default Secondary;