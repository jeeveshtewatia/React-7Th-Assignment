import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Home from "./Components/home";
import Student from "./Components/Student";
import Navbar from "./Components/Navbar";
import "./Components/Navbar.css";
import ShowDetails from "./Components/ShowDetails";
import CreateStudent from "./Components/CreateStudent";
import EditStudent from "./Components/EditStudent";

function App() {
  return (
    <>
      <div className="App">
        {/* <Router>
          <Routes>
            <Route path="/" element={<ShowDetails />} />
            <Route path="/CreateStudent" element={<CreateStudent />} />
            <Route path="/EditStudent" element={<EditStudent />} />
          </Routes>
        </Router> */}
        {/* <Route path="/Student" element={<Student />} /> */}

        {/* <ShowDetails /> */}

        <Router>
          <Navbar />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/ShowDetails" element={<ShowDetails />} />
            <Route path="/CreateStudent" element={<CreateStudent />} />
            <Route path="/EditStudent" element={<EditStudent />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
