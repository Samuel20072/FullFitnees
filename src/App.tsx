import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Inicio from "./pages/inicio";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Perfil from "./pages/Perfil";
import ClaseDetalle from "./pages/ClaseDetalle";
import EntrenadorDetalle from "./pages/EntrenadorDetalle";
import ProductDetail from "./pages/ProductDetail";
import Dashboard from "./pages/admin/Dashboard";
import TodosLosProductos from "./pages/TodosLosProductos";
import TodosLosEntrenadores from "./pages/TodosLosEntrenadores";
import TodasLasClases from "./pages/TodasLasClases";
import { ClaseProvider } from "./contexts/ClaseContext";
import { ProductoProvider } from "./contexts/ProductoContext";
import { UserProvider } from "./contexts/UserContext";
import { EntrenadorProvider } from "./contexts/EntrenadorContext";

function AutoLogoutWrapper({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  useEffect(() => {
    const INACTIVITY_MS = 60 * 60 * 1000; // 1 hora
    let timeoutId: ReturnType<typeof setTimeout>;

    const cerrarSesion = () => {
      localStorage.clear();
      navigate("/");
    };

    const resetTimer = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(cerrarSesion, INACTIVITY_MS);
    };

    const eventos = ["mousemove", "keydown", "click", "scroll", "touchstart"];
    eventos.forEach((ev) => window.addEventListener(ev, resetTimer));
    resetTimer();

    return () => {
      eventos.forEach((ev) => window.removeEventListener(ev, resetTimer));
      clearTimeout(timeoutId);
    };
  }, [navigate]);

  return <>{children}</>;
}

function App() {
  return (
    <BrowserRouter>
      <AutoLogoutWrapper>
        <ClaseProvider>
          <ProductoProvider>
            <UserProvider>
              <EntrenadorProvider>
                 {" "}
              <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/login" element={<Login />} />
                <Route path="registro" element={<Register />} />
                <Route path="/profile" element={<Perfil />} />
                <Route path="/clases/:id" element={<ClaseDetalle />} />
                <Route path="/entrenadores/:id"element={<EntrenadorDetalle />}/>
                <Route path="/entrenadores"element={<TodosLosEntrenadores />}/>
                <Route path="/productos" element={<TodosLosProductos />} />
                <Route path="/clases" element={<TodasLasClases />} />
                <Route path="/producto/:id" element={<ProductDetail />} />
                <Route path="/admin/dashboard" element={<Dashboard />} />
              </Routes>
              </EntrenadorProvider>
             
            </UserProvider>
          </ProductoProvider>
        </ClaseProvider>
      </AutoLogoutWrapper>
    </BrowserRouter>
  );
}

export default App;
