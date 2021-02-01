import { useState } from 'react';

import Classes from './NewPost.module.css';

function NewPost () {
    const postState = {
        title: '',
        content: '',
        author: 'Max'
    }

    const [post, setPost] = useState(postState);

    return (
        <div className={Classes.NewPost}>
            <h1>Add a Post</h1>
            <label>Title</label>
            <input type="text" value={post.title} onChange={(event) => setPost({...post, title: event.target.value})} />
            <label>Content</label>
            <textarea rows="4" value={post.content} onChange={(event) => setPost({...post, content: event.target.value})} />
            <label>Author</label>
            <select value={post.author} onChange={(event) => {
                setPost({...post, author: event.target.value})
            }}>
                <option value="Max">Max</option>
                <option value="Manu">Manu</option>
            </select>
            <button>Add Post</button>
        </div>
    );
}

export default NewPost;