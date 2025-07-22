import { createContext, useCallback, useReducer , useEffect , useState} from "react";
const PostContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  fetching : false
});

export { PostContext };

function create(post) {
  return {
    id: post.id,
    title: post.title,
    post: post.body,
    reaction: `Like ${post.reactions.likes} Dislike ${post.reactions.dislikes}`,
    userId: post.userId,
    tags: post.tags,
  };
}

// postr reducer
const postReducer = (postList, action) => {
  let newList = postList;
  if (action.type === "DELETE_POST") {
    newList = postList.filter((p) => p.id != action.payload.id);
  } 
  else if (action.type === "ADD_POST") {
    let newPost = action.payload;
    newList = [newPost, ...newList];
  } 
  else if (action.type === "ADD_INIT_POST") {
    newList = action.payload.posts.map((e) =>
      create(e)
    );
  }
  return newList;
};

function PostProvider({ children }) {

  // Reducer
  const [postList, postdispatch] = useReducer(postReducer, []);
  let [fetching , setFetch] = useState(false);

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
  const addPost = useCallback(
    (post) => {
      let addDispatch = {
        type: "ADD_POST",
        payload: create(post),
      };

      postdispatch(addDispatch);
    },
    [postdispatch]
  );

  // delete Post
  // useCallback is used to stop rerender function on every call
  const deletePost = useCallback(
    (id) => {
      const deleteDispatch = {
        type: "DELETE_POST",
        payload: { id },
      };

      postdispatch(deleteDispatch);
    },
    [postdispatch]
  );

  // fetching post
  // run of first render

  useEffect(()=>{
    let load = async ()=>{
      setFetch(true);
      let response = await fetch('https://dummyjson.com/posts');
      let postdata = await response.json();
      initPost(postdata.posts);
      setFetch(false);
    }
    load();
  },[]); 


  // Provider
  return (
    <PostContext.Provider value={{ postList, addPost, fetching , deletePost, initPost }}>
      {children}
    </PostContext.Provider>
  );
}

export default PostProvider;
