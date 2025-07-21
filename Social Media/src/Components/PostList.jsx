import Post from "./Post";
import style from "./PostList.module.css";
import { useContext , useEffect , useState} from "react";
import { PostContext } from "../store/post-list-store";
import Loading from "./Loading";

function PostList() {
  let { postList , initPost} = useContext(PostContext);

  let [fetching , setFetch] = useState(false);

  useEffect(()=>{
   if(postList.length === 0){
     let load = async ()=>{
        setFetch(true);
        let response = await fetch('https://dummyjson.com/posts');
        let postdata = await response.json();
        initPost(postdata.posts);
        setFetch(false);
    }

    load();
   }
  },[initPost, postList.length]); // run of first render

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
