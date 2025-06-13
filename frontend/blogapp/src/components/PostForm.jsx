import { useState, useContext } from 'react';
import { PostContext } from '../context/PostContext';

function PostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { createPost } = useContext(PostContext);

  const handleSubmit = e => {
    e.preventDefault();
    createPost({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" required />
      <button type="submit">Add Post</button>
    </form>
  );
}

export default PostForm;
