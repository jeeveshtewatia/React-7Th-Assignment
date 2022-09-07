import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contact from './Components/Contact';
import Home from './Components/home';
import Student from './Components/Student';
import Navbar from './Components/Navbar';
import './Components/Navbar.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Student' element={<Student />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
