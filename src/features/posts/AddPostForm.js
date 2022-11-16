import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h1>Bulletin Board</h1>
      <h2>New Post</h2>
      <form>
        <p>
          <label htmlFor="postTitle">
            <strong>Title</strong>
          </label>
        </p>
        <p>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
          />
        </p>
        <p>
          <label htmlFor="postContent">
            <strong>Author</strong>
          </label>
        </p>
        <p>
          <select
            id="postAuthor"
            value={userId}
            onChange={onAuthorChanged}
            style={{ width: "100%" }}
          >
            <option value="" />
            {usersOptions}
          </select>
        </p>
        <p>
          <label htmlFor="postContent">
            <strong>Post</strong>
          </label>
        </p>
        <p>
          <textarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
          />
        </p>
      </form>
      <button
        type="button"
        className="save-button"
        onClick={onSavePostClicked}
        disabled={!canSave}
      >
        Add Post
      </button>
    </section>
  );
};

export default AddPostForm;
