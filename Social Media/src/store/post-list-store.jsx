import { createContext, useReducer } from "react";
const PostContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  initPost: () => {},
});

export { PostContext };

function create(userId, title, post, reaction, tags, id = Date.now()) {
  return {
    id: id,
    title: title,
    post: post,
    reaction: `Like ${reaction.likes} Dislike ${reaction.dislikes}`,
    userId: userId,
    tags: tags,
  };
}

// postr reducer
const postReducer = (postList, action) => {
  let newList = postList;
  if (action.type === "DELETE_POST") {
    newList = postList.filter((p) => p.id != action.payload.id);
  } else if (action.type === "ADD_POST") {
    let newPost = action.payload;
    newList = [...newList, newPost];
  } else if (action.type === "ADD_INIT_POST") {
    newList = action.payload.posts.map((e) =>
      create(e.userId, e.title, e.body, e.reactions, e.tags, e.id)
    );
  }
  return newList;
};

function PostProvider({ children }) {
  // add Intial Posts
  const initPost = (posts) => {
    let intialPostDispatch = {
      type: "ADD_INIT_POST",
      payload: {
        posts,
      },
    };

    postdispatch(intialPostDispatch);
  };

  // addPost
  const addPost = (userId, title, post, reaction, tags) => {
    let addDispatch = {
      type: "ADD_POST",
      payload: create(userId, title, post, reaction, tags),
    };

    postdispatch(addDispatch);
  };

  // delete Post
  const deletePost = (id) => {
    const deleteDispatch = {
      type: "DELETE_POST",
      payload: { id },
    };

    postdispatch(deleteDispatch);
  };

  // Reducer
  const [postList, postdispatch] = useReducer(postReducer, []);

  // Provider
  return (
    <PostContext.Provider value={{ postList, addPost, deletePost, initPost }}>
      {children}
    </PostContext.Provider>
  );
}

export default PostProvider;
