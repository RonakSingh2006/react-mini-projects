import {Link} from "react-router-dom";
import { useState } from "react";
function SideBar() {
  let [currTab, setTab] = useState("Home");
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark heightFix"
      style={{ width: "280px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-4">Sidebar</span>
      </a>

      <hr />

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/" className={`nav-link text-white ${currTab === "Home" && "active"}`} aria-current="page" onClick={()=>{setTab("Home")}}>
            <i className="bi bi-house pe-none me-2"></i>
            Home
          </Link>
        </li>
        <li>
          <Link to="create-post" className={`nav-link text-white ${currTab === "Create Post" && "active"}`} onClick={()=>{setTab("Create Post")}}>
            <i className="bi bi-speedometer2 pe-none me-2"></i>
            Create Post
          </Link>
        </li>
      </ul>

      <hr />

      
      </div>
  );
}

export default SideBar;
