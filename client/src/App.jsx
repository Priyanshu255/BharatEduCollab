import { Routes, Route, Router,Link } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Mentor from "./pages/Mentor";
import Student from "./pages/Student";
import University from "./pages/University";
import Orgaisation from "./pages/Organisation";
import Register from "./pages/Register";
import UploadProject from "./pages/UploadProject";
import AcceptProjects from "./pages/AcceptProjects";
import Shop from "./pages/Shop";
import Filter from "./pages/Filter";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/student" element={<Student />} />
        <Route path="/university" element={<University />} />
        <Route path="/organisation" element={<Orgaisation />} />
        <Route path="/uploadproject" element={<UploadProject />} />
        <Route path="/acceptproject" element={<AcceptProjects />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/filter" element={<Filter />} />
      </Routes>
    </>
  );
}

export default App;
