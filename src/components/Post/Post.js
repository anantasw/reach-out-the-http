import Classes from './Post.module.css';

const Post = (props) => (
    <article className={Classes.Post} onClick={props.postClickedHandler}>
        <h1>{props.title}</h1>
        <div className={Classes.Info}>
            <div className={Classes.Author}>{props.author}</div>
        </div>
    </article>
);

export default Post;