import style from "./CreatePost.module.css";
import { useRef , useContext} from "react";
import { PostContext } from "../store/post-list-store";

function CreatePost() {

  let user = useRef();
  let title = useRef();
  let postText = useRef();
  let reaction = useRef();
  let tags = useRef();

  let {addPost} = useContext(PostContext);


  return (
    <form className={style.createPost} onSubmit={(e)=>{
      e.preventDefault();

      let reactionArr = reaction.current.value.split(" ");
      let reactionObj = {
        likes : reactionArr[0],
        dislikes : reactionArr[1]
      } 

      fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title.current.value,
        userId: user.current.value,
        body:postText.current.value,
        reactions : reactionObj,
        tags : tags.current.value.split(" ")
      })
      })
      .then(res => res.json())
      .then(r=>addPost(r));
      

      user.current.value = '';
      title.current.value = '';
      postText.current.value = '';
      reaction.current.value = '';
      tags.current.value = '';
    }}>

      {/* user Id  */}
      <div className="mb-3">
        <label htmlFor="user-id" className="form-label">
          userId
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="Enter your userId"
          ref={user}
        />
      </div>

      {/* title  */}
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter Title of Post"
          ref = {title}
        />
      </div>

      {/* post  */}
      <div className="mb-3">
        <label htmlFor="post" className="form-label">
          Post
        </label>
        <textarea
          type="text"
          className="form-control"
          id="post"
          placeholder="Enter Your Post"
          rows={4}
          ref = {postText}
        />
      </div>

      {/* reactions */}
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          Reaction
        </label>
        <input
          type="text"
          className="form-control"
          id="reaction"
          placeholder="Like Dislike"
          ref = {reaction}
        />
      </div>

      {/* hashtags */}
      <div className="mb-3">
        <label htmlFor="hashTag" className="form-label">
          HashTag
        </label>
        <input
          type="text"
          className="form-control"
          id="hashTag"
          placeholder="Enter  HashTags  space  seperated"
          ref = {tags}
        />
      </div>

      <button type="submit" className="btn btn-primary" >
        Post
      </button>
    </form>
  );
}

export default CreatePost;
