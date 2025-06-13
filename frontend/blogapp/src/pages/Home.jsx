import PostForm from '../components/PostForm';
import PostList from '../components/PostList';

function Home() {
    return (
        <div>
            <h1>Mini Blog</h1>
            <PostForm />
            <PostList />
        </div>
    );
}

export default Home;
