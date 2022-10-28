import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Carrinho from "./pages/Carrinho";
import Favoritos from "./pages/Favoritos";
import Home from "./pages/Home";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";

const RoutesApp = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info/:id" element={<Info />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/favoritos" element={<Favoritos />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default RoutesApp;
