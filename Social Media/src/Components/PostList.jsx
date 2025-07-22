import Post from "./Post";
import style from "./PostList.module.css";
import { useContext } from "react";
import { PostContext } from "../store/post-list-store";
import Loading from "./Loading";

function PostList() {
  let { postList , fetching} = useContext(PostContext);

  return (
    <>
      {fetching && <Loading/>}
      <div className={style.cardList}>
        {postList.map((e) => (
          <Post key={e.id} data={e}></Post>
        ))}
      </div>
    </>
  );
}

export default PostList;
