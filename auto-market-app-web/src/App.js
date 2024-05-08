import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import './index.css';
import CarPage from "./pages/CarPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/carro/:id" element={<CarPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
