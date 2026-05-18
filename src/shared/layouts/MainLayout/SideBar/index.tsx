import "./style.css"

export function SideBar() {
  return (
    <aside className="sidebar">
  <nav className="sidebar-nav">

    <a href="#" className="sidebar-link active">
      Dashboard
    </a>

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