import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SideBar from "./Components/Sidebar";
import PostList from "./Components/PostList";
import CreatePost from "./Components/CreatePost";
import { useState } from "react";
import PostProvider from "./store/post-list-store";
import "./App.css";

function App() {
  let [currTab, setTab] = useState("Home");

  return (
    <PostProvider>
      <div className="app-container">
        <SideBar currTab={currTab} setTab={setTab} />
        <div className="content">
          <Header />
          {currTab === "Home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostProvider>
  );
}

export default App;
