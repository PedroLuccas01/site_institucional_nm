import { Navigate, Route, Routes } from "react-router-dom";
import HashScroll from "./components/HashScroll";
import Home from "./pages/Home";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosDeUso from "./pages/TermosDeUso";
import Cookies from "./pages/Cookies";
import SobreAnuncios from "./pages/SobreAnuncios";
import Acessibilidade from "./pages/Acessibilidade";

export default function App() {
  return (
    <>
      <HashScroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
        <Route path="/termos-de-uso" element={<TermosDeUso />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/sobre-anuncios" element={<SobreAnuncios />} />
        <Route path="/acessibilidade" element={<Acessibilidade />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
