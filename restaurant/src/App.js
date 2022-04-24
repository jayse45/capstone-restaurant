import './App.css';
import Home from './homepage/home'
import About from './about/about'
import Products from './products/products'
import Contact from './contact/contact'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './navbar/navbar';
import Footer from './footer/footer';

function App() {
  return (
    <div >

      <BrowserRouter>
      <Navbar />

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
