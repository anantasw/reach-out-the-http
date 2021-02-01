import { useState, useEffect } from 'react'

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import Classes from './Blog.module.css';
import axios from 'axios';

function Blog () {
    const [posts, setPosts] = useState([]);
    const [selectedPostId, setSelectedPostId] = useState(null);

    const postClickedHandler = (id) => {
        setSelectedPostId(id);
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
             .then(response => {
                const rawPosts = response.data.slice(0,4);
                const updatedPosts = rawPosts.map(post => {
                    return {
                        ...post,
                        author: 'Abhisena'
                    }
                });

                setPosts(updatedPosts);
                // console.log(response.data)
             });
    }, []);

    const postComponents = posts.map(post => {
        return <Post 
                key={post.id} 
                title={post.title} 
                author={post.author} 
                postClickedHandler={ () => postClickedHandler(post.id) }
              />;
    });


    return (
        <div>
            <section className={Classes.Posts}>
                {postComponents}
            </section>
            <section>
                <FullPost selectedPostId={selectedPostId}/>
            </section>
            <section>
                <NewPost />
            </section>
        </div>
    );
}

export default Blog;