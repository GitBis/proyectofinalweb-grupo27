import React from 'react';
import axios from 'axios';
const PostsForm = () => {
     async function onSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const body = Object.fromEntries(formData.entries());
        const validator = Array.from(formData.values());
        const isValid = !(validator.some((it) => it === ''));

        if (!isValid) {
            return alert('Datos incompletos');
        };

        const res = await axios.post('https://posts-pw2021.herokuapp.com/api/v1/post/create', body,{
           headers: {
               
            
            Authorization: `Bearer ${localStorage.getItem('token')}`,
           }
        });
        console.log(res);
    }

    return(
       
    <form onSubmit={onSubmit}>
       <div className = "postform">
          <div className ="postinput">
        <div className = "postcontainer">
        <label className="title_create">Crea un post</label>
         <div>
            <label className="titlee">Titulo</label>
            <input className="input_title" type="text" name="title" placeholder="ponle un titulo!" id="title" />
         </div>
         <div>
         <label className="image">Imagen</label>
            <input className="input_image" type="text" name="image" placeholder="link de la imagen!" id = "image"/>
         </div>
         <div>
         <label className="description">Descripcion</label>
            <input className="input_description" type="text" name="description" placeholder="ponle una descripcion!" id="description" />
         </div>
         <button className="to_post" type = "submit">Publicar!</button>
         </div>
         </div>
         </div>
    </form>
    )
}
export default PostsForm;