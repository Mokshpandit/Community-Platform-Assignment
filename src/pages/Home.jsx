import CreatePost from '../components/CreatePost';
import PostCard from '../components/PostCard';

const posts = [
  { title: "Welcome to the community!", content: "Feel free to share anything." },
  { title: "Tailwind vs Bootstrap", content: "Which one do you prefer and why?" },
];

const Home = () => (
  <div className="flex-1 p-4 overflow-y-auto">
    <CreatePost/>
    {posts.map((post, idx) => (
      <PostCard key={idx} title={post.title} content={post.content} />
    ))}
  </div>
);

export default Home;
