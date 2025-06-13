import { Routes, Route } from 'react-router-dom';
import { PostProvider } from './context/PostContext';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import SignIn from './frontend/src/pages/SignIn'; 

function App() {
  return (
    <PostProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </PostProvider>
  );
}

export default App;
