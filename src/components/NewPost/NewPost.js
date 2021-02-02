import { useState } from 'react';
import axios from 'axios';

import Classes from './NewPost.module.css';

function NewPost () {
    const postState = {
        title: '',
        content: '',
        author: ''
    }

    const [post, setPost] = useState(postState);

    const postDataHandler = () => {
        axios.post(`https://jsonplaceholder.typicode.com/posts`, {
            title: post.title,
            body: post.content,
            author: post.author
        }).then(response => {
            console.log(response);
        })
    }

    return (
        <div className={Classes.NewPost}>
            <h1>Add a Post</h1>
            <label>Title</label>
            <input type="text" value={post.title} onChange={(event) => setPost({...post, title: event.target.value})} />
            <label>Content</label>
            <textarea rows="4" value={post.content} onChange={(event) => setPost({...post, content: event.target.value})} />
            <label>Author</label>
            <select value={post.author} onChange={(event) => setPost({...post, author: event.target.value})}>
                <option value="Abhisena">Abhisena</option>
                <option value="Prabawa">Prabawa</option>
            </select>
            <button onClick={postDataHandler}>Add Post</button>
        </div>
    );
}

export default NewPost;