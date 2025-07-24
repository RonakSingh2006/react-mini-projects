import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SideBar from "../Components/Sidebar";
import PostProvider from "../store/post-list-store";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <PostProvider>
      <div className="app-container">
        <SideBar />
        <div className="content">
          <Header />
          <Outlet/>
          <Footer />
        </div>
      </div>
    </PostProvider>
  );
}

export default App;
