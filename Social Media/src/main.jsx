import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./routes/App.jsx"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import CreatePost from "./Components/CreatePost.jsx";
import PostList from "./Components/PostList.jsx";

let router = createBrowserRouter([{
  path : "/" ,
  element : <App/>,
  children : [
    {
      path : "/create-post",
      element : <CreatePost/> 
    }
    ,{
      path : "/",
      element : <PostList/>
    }
  ]
}]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
