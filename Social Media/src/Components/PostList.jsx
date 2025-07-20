import Post from "./Post";
import style from "./PostList.module.css";
import { useContext } from "react";
import { PostContext } from "../store/post-list-store";
import Welcome from "./Welcome";

function PostList() {
  let { postList } = useContext(PostContext);

  return (
    <>
      {postList.length === 0 && <Welcome />}
      <div className={style.cardList}>
        {postList.map((e) => (
          <Post key={e.id} data={e}></Post>
        ))}
      </div>
    </>
  );
}

export default PostList;
