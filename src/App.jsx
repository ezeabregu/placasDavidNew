import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import FloatingButtons from "./components/FloatingButtons";
import { TickerBanner } from "./components/TickerBanner";

function App() {
  const anuncios = [
    "¡Presupuesto SIN CARGO!",
    "Asesores técnicos todos los días",
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <TickerBanner announcements={anuncios} />
      <FloatingButtons />
    </Router>
  );
}

export default App;
