import React, {useState} from 'react';
import { AiFillLike} from 'react-icons/all';
import { MdModeComment } from 'react-icons/all';
import axios from 'axios';
const Post = ({ struct }) => {
    const { title, image, description, user, likes, comments,_id} = struct;
    const  [likes1, setLikes] = useState(likes.length);
    const  [isliked, setIsLiked] = useState(likes.some((it) => it.user === localStorage.getItem('user')));
    async function likef(){
        const res = await axios.patch(`https://posts-pw2021.herokuapp.com/api/v1/post/like/${_id}`,null,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        });
        if(!isliked){
            setLikes(likes1 + 1);
            setIsLiked(true);
        }else{
            setLikes(likes1 - 1);
            setIsLiked(false);
        }
    }
    return(
	<div className="allpost">
         <h1 id= "titulo" className = "feedbackTitle">Feedback</h1>
         <main>
            <div className="feedback">

            <div className="conteinerpostF">
                <div className="postconteiner" >
                    <div className="postF">
                    <div className="name_user">
                    <h1 className="name_user_e">
                        {user?.username}
                    </h1>
                    </div>
                    <div className="title_of_post">
                    <h2 className="title_of_post_e">{ title } </h2>
                    </div>
                    </div>
                <div className="imgpostF">
                 {
                    image &&
                    <div className="insideimg">
                    <img className="img_zise" src={image} alt=""/> 
                    </div>
                 }
                </div>
                <div className="postconteiner">
                    <p className="description_post">{ description }</p>
                </div>
                <div className="iconos">
                <span><AiFillLike className = {`${isliked && `isLikedBtn`} likeBtn`} onClick={likef}></AiFillLike></span>
                <span>{ likes1}</span>
                <span><MdModeComment className="commentbtn"></MdModeComment></span>
                { comments.length }
                </div>
                </div>
                </div>
            </div>
         </main>
    </div>
    )

}

export default Post;