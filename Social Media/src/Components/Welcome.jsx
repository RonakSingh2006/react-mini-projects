import { PostContext } from "../store/post-list-store";

import { useContext } from "react";

function Welcome() {
  let { initPost } = useContext(PostContext);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>There are no Posts</h1>
      <button
        type="button"
        className="btn btn-primary"
        style={{ marginLeft: "43%" }}
        onClick={async () => {
          // fectch intial data from dummy api
          let response = await fetch("https://dummyjson.com/posts");
          let postdata = await response.json();
          initPost(postdata.posts);
        }}
      >
        Load Post From Server
      </button>
    </>
  );
}

export default Welcome;
