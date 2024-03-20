import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotificationBar from "./components/NotificationBar/index.jsx";
import Navbar from "./components/Navbar/index.jsx";
import Contact from "./components/Contact/index.jsx";
import Footer from "./components/Footer/index.jsx";
import Home from "./pages/home/index.jsx";
import Nosotros from "./pages/nosotros/index.jsx";
import Productos from "./pages/productos/index.jsx";
import Contacto from "./pages/contacto/index.jsx";
import "./App.css";

function App() {
  return (
    <div style={{ overflow: "hidden", maxWidth: "100%" }}>
      <BrowserRouter>
        <NotificationBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
