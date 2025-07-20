import style from "./Post.module.css";
import { MdDelete } from "react-icons/md";
import { PostContext } from "../store/post-list-store";
import { useContext } from "react";

function Post({ data }) {
  let {deletePost} = useContext(PostContext);
  return (
    <div className={`card ${style.post}`}>
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.post}</p>
        {data.tags.map((e) => (
          <span key={e} className={`badge text-bg-primary ${style.tag}`}>
            {e}
          </span>
        ))}

        <span className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ${style.delete}`} onClick = {()=>deletePost(data.id)}>
          <MdDelete />
          <span className="visually-hidden">unread messages</span>
        </span>

        <div className={`alert alert-success ${style.reaction}`} role="alert">
          {data.reaction}
        </div>
      </div>
    </div>
  );
}

export default Post;
