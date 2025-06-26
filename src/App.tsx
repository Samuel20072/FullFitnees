import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import  Inicio  from "./pages/inicio";
import Login from "./pages/Login"; 
import Register from "./pages/Register";

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
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />

            </Routes>
          </AutoLogoutWrapper>
    </BrowserRouter>
  );
}

export default App;
