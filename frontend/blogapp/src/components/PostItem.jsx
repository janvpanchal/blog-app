import { Link } from 'react-router-dom';

function PostItem({ post }) {
    return (
        <div>
            <h3>{post.title}</h3>
            <Link to={`/posts/${post._id}`}>Read More</Link>
        </div>
    );
}

export default PostItem;
