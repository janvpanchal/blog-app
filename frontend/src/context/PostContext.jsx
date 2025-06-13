import { createContext, useState } from 'react';

export const PostContext = createContext();

export function PostProvider({ children }) {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const res = await fetch('http://localhost:5000/api/posts');
        const data = await res.json();
        setPosts(data);
    };

    const createPost = async (post) => {
        await fetch('http://localhost:5000/api/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(post)
        });
        fetchPosts();
    };

    return (
        <PostContext.Provider value={{ posts, fetchPosts, createPost }}>
            {children}
        </PostContext.Provider>
    );
}
