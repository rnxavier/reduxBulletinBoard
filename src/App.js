import "./App.css";
import PostsLists from "./features/posts/PostsLists";
import AddPostForm from "./features/posts/AddPostForm";

function App() {
  return (
    <>
      <AddPostForm />
      <PostsLists />
    </>
  );
}

export default App;
