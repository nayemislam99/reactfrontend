import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import Navbar from "./component/Navbar";
import Blog from "./component/Blog";
import Contact from "./component/Contact";
import ProtectedRoute from "./service/ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<ProtectedRoute />}>
            <Route path="home" element={<Home />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<h4>404 not found</h4>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
