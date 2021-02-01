import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import Classes from './Blog.module.css';

function Blog () {
    return (
        <div>
            <section className={Classes.Posts}>
                <Post />
                <Post />
                <Post />
            </section>
            <section>
                <FullPost />
            </section>
            <section>
                <NewPost />
            </section>
        </div>
    );
}

export default Blog;