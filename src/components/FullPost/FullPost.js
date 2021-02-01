import Classes from './FullPost.module.css';

function FullPost () {
    let post = <p>Please select a Post!</p>;
    post = (
        <div className={Classes.FullPost}>
            <h1>Title</h1>
            <p>Content</p>
            <div className={Classes.Edit}>
                <button className={Classes.Delete}>Delete</button>
            </div>
        </div>

    );
    return post;
}

export default FullPost;