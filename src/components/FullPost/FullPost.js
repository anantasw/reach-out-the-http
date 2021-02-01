import { useEffect } from 'react';

import Classes from './FullPost.module.css';
import axios from 'axios';

function FullPost (props) {
    let post = <h1 className={Classes.Fallback}>Please select a Post!</h1>;
    if (props.selectedPostId) {
        post = (
            <div className={Classes.FullPost}>
                <h1>Title</h1>
                <p>Content</p>
                <div className={Classes.Edit}>
                    <button className={Classes.Delete}>Delete</button>
                </div>
            </div>
    
        );
    }
    return post;
}

export default FullPost;