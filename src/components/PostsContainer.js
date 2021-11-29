import React, { useEffect, useState } from 'react';
import Post from './Post'
import axios from 'axios';
const PostsContainer = () => {
    const [posts, setPosts] = useState({
        status: 'loading',
        data: null
    });
    useEffect(() => {
        async function getPosts() {
            const { data: response } = await axios.get('https://posts-pw2021.herokuapp.com/api/v1/post/all?limit=10&page=0',{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                }
            });
            setPosts({ status: 'done', data: response.data });
        }
        getPosts();
    }, []);

    if(posts.status === 'loading') return <h1>Loading...</h1>;

    return(
        <div className="postcontainer" >
        {
            posts.data && posts.data.map((it) => <Post key={it._id} struct={it} />)
        }
        </div>
    );
}
export default PostsContainer;