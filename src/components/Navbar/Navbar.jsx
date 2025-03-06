import { useState } from "react";
import "./navbar.scss";

export default function Navbar() {
  const [sidebarVisible,setSidebarVisible] = useState(false)

  console.log(sidebarVisible)

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>DanEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        <a href="/">Sign in</a>
        <a href="/" className="register">
          Sign up
        </a>
        <div className="menuIcon" onClick={() => setSidebarVisible((prev) => !prev)}>
          <img src="/menu.png" alt="" />
        </div>
        <div className={sidebarVisible ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}
