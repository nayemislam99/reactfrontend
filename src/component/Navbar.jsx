import { NavLink, useNavigate } from "react-router-dom";
const Navbar = () => {
  const logToken = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const navStyleMenu = {
    textDecoration: "none",
    color: "#333",
    marginRight: "10px",
  };

  const navStyleNavbar = {
    textDecoration: "none",
    color: "#333",
    fontSize: "26px",
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light shadow shadow-sm">
        <div class="container-fluid">
          <NavLink class="navbar-brand" style={navStyleNavbar} to="/">
            MernStack
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              {logToken ? (
                <>
                  <li class="nav-item">
                    <NavLink style={navStyleMenu} onClick={logOut}>
                      Logout
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li class="nav-item">
                    <NavLink
                      style={navStyleMenu}
                      class="me-2"
                      aria-current="page"
                      to="/"
                    >
                      Signup
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink style={navStyleMenu} to="/login">
                      Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
