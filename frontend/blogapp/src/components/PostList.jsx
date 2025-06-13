import { useContext, useEffect } from 'react';
import { PostContext } from './frontend/src/context/PostContext';
import PostItem from './frontend/src/components/PostItem';

function PostList() {
    const { posts, fetchPosts } = useContext(PostContext);

    useEffect(() => {
        fetchPosts();
    });

    return (
        <div>
            {posts && posts.length > 0 ? (
                posts.map((post) => <PostItem key={post._id} post={post} />)
            ) : (
                <p>No posts available.</p>
            )}
        </div>
    );
}

export default PostList;

