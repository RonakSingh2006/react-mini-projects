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
      
      addPost(user.current.value,title.current.value,postText.current.value,reaction.current.value,tags.current.value);

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
          placeholder="Enter No of Recations"
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
