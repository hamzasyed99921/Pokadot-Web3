import './App.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Base from './components/Layouts/Base';
import Technology from './pages/Technology';
import Community from './pages/Community';
import About from './pages/About';
import Blog from './pages/Blog';
import Build from './pages/Build';
import Contact from './pages/Contact';



function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Base>
        <Routes>
          <Route index path="/" element={<Home/>} />
          <Route  path="/technology" element={<Technology/>} />
          <Route  path="/community" element={<Community/>} />
          <Route  path="/about" element={<About/>} />
          <Route  path="/blog" element={<Blog/>} />
          <Route  path="/build" element={<Build/>} />
          <Route  path="/contact" element={<Contact/>} />
          {/* <Route path="/*" element={<PageNotFound />}/> */}
        </Routes>
      </Base>
    </BrowserRouter>
    </div>
  );
}

export default App;
