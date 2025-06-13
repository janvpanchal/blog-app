import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/api/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data));
    }, [id]);

    if (!post) return <p>Loading...</p>;

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    );
}

export default PostDetail;
