import { createContext, useReducer} from "react";
const PostContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

export { PostContext };


function create(userId,title,post,reaction,tags){
  return {
    id : Date.now(),
    title : title,
    post : post,
    reaction : reaction,
    userId : userId,
    tags : tags.split(" ")
  }
}



// postr reducer

const postReducer = (postList, action) => {

  let newList = postList;
  if(action.type === 'DELETE_POST'){
    newList = postList.filter((p)=>p.id != action.payload.id);
  }
  else if(action.type === 'ADD_POST'){
    let newPost = action.payload;
    newList = [...newList,newPost];
  }
  return newList;
};


// Intial Data
const tempdata = [
  {id : 1 ,
    title : "Going on a Vacation",
    post : "This summer i am visiiting the Shimla , Please suggest nice spots to see there",
    reaction : 2,
    userId : 'ronak',
    tags : ['vacation','shimla']
  },
  {id : 2 ,
    title : "Have a interview tommorow",
    post : "I have a interview tommorow at YY online 8 am please give me what to prepare for the interview",
    reaction : 5,
    userId : 'singh',
    tags : ['interview','job','YY']
  }
]



function PostProvider({ children }) {

  // addPost 
  const addPost = (userId,title,post,reaction,tags) => {

    let addDispatch = {
      type : 'ADD_POST',
      payload : create(userId,title,post,reaction,tags)
    }

    postdispatch(addDispatch);

  };


  // delete Post 
  const deletePost = (id) => {
    const deleteDispatch = {
      type : "DELETE_POST",
      payload : {id}
    }

    postdispatch(deleteDispatch);
  };

  // Reducer

  const [postList, postdispatch] = useReducer(postReducer, tempdata);


  // Provider

  return (
    <PostContext.Provider
      value={{ postList, addPost, deletePost}}
    >
      {children}
    </PostContext.Provider>
  );
}

export default PostProvider;
