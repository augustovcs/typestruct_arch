import "./style.css"
import { Link } from "react-router-dom";

export function SideBar() {
  return (
    <aside className="sidebar">
  <nav className="sidebar-nav">
    <Link to="/dashboard" className="sidebar-link active">
      Dashboard
    </Link>

    <a href="#" className="sidebar-link">
      Products
    </a>

    <a href="#" className="sidebar-link">
      Users
    </a>

    <a href="#" className="sidebar-link">
      Settings
    </a>

  </nav>
</aside>
  );
}