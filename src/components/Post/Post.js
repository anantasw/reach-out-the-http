import Classes from './Post.module.css';

const Post = (props) => (
    <article className={Classes.Post}>
        <h1>Title</h1>
        <div className={Classes.Info}>
            <div className={Classes.Author}>Author</div>
        </div>
    </article>
);

export default Post;