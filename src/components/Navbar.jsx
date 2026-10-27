const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">StudentPortal</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarDrawer" aria-controls="navbarDrawer" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="navbarDrawer" aria-labelledby="navbarDrawerLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="navbarDrawerLabel">Dashboard</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Students</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Courses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Reports</a>
              </li>
            </ul>
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Settings
                </a>
            <form className="d-flex gap-2" role="search">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-secondary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar