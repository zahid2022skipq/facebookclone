import "./App.css";
import CreatePost from "./components/CreatePost/CreatePost";
import Navbar from "./components/Navbar/Navbar";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <div className="">
      <Navbar />
      <CreatePost />
      <Posts />
    </div>
  );
}

export default App;
