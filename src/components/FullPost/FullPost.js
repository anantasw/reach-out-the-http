import { useState, useEffect } from 'react';

import Classes from './FullPost.module.css';
import axios from 'axios';

function FullPost ({selectedPostId}) {

    const [loadedPost, setLoadedPost] = useState(null);

    useEffect(() => {
        if (selectedPostId) {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${selectedPostId}`)
                 .then(response => {
                    //  console.log(response);
                    setLoadedPost(response.data);
                 })
        }   
    }, [selectedPostId])

    let post = <h1 className={Classes.Fallback}>Please select a Post above!</h1>;
    if (selectedPostId) {
        post = <h1 className={Classes.Loading}>Still fetching data.... Please wait!</h1>;
    }
    //if the loadedPost state has finished populating data from the server
    if (loadedPost) {
        post = ( 
            <div className={Classes.FullPost}>
                <h1>{loadedPost.title}</h1>
                <p>{loadedPost.body}</p>
                <div className={Classes.Edit}>
                    <button className={Classes.Delete}>Delete</button>
                </div>
            </div>
    
        );
    }
    return post;
}

export default FullPost;