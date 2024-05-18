import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import './index.css';
import CarPage from "./pages/CarPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import RegisterCarPage from "./pages/RegisterCarPage";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRouter from "./components/ProtectedRouter";
import HomePageUser from "./pages/HomePageUser";
import CarPageUser from "./pages/CarPageUser";
import EditCarPage from "./pages/EditCarPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/carro/:id" element={<CarPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route element={<ProtectedRouter/>}>
            <Route path="/home" element={<HomePageUser />} />
            <Route path="/carro/register" element={<RegisterCarPage />} />
            <Route path="/home/carro/:id" element={<CarPageUser />} />
            <Route path="/home/carroEdit/:id" element={<EditCarPage />} />
            <Route path="/profile/" element={<ProfilePage />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
