import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Carrinho from "./pages/Carrinho";
import Home from "./pages/Home";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";

const RoutesApp = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/carrinho" element={<Carrinho />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default RoutesApp;
