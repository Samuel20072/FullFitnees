import {
  createContext,
  useContext,
  useState,
  useEffect
} from "react";
import type { ReactNode } from "react";

import rumba from "../assets/rumba.png";
import zumba from "../assets/zumba.jpg";
import funcional from "../assets/Prueba los entrenamientos grupales, dinámicos, divertidos y económicos_.jfif";

// Tipo de datos extendido con fecha, hora y videos
export type Clase = {
  id: number;
  title: string;
  description: string;
  image: string;
  fecha: string; // formato: YYYY-MM-DD
  hora: string;  // Ej: "08:00 AM"
  videos: string[];
};

type ClaseContextType = {
  clases: Clase[];
  addClase: (nueva: Clase) => void;
};

const ClaseContext = createContext<ClaseContextType | null>(null);

// Hook personalizado
export const useClases = () => {
  const context = useContext(ClaseContext);
  if (!context) throw new Error("useClases debe estar dentro de un ClaseProvider");
  return context;
};

export const ClaseProvider = ({ children }: { children: ReactNode }) => {
  const STORAGE_KEY = "clases_fullfit";

  const clasesBase: Clase[] = [
    {
      id: 1,
      title: "Clases de Rumba",
      description: "Ejercítate al ritmo de la música con nuestras sesiones dirigidas.",
      image: rumba,
      fecha: "2025-07-22",
      hora: "08:00 AM",
      videos: ["https://www.youtube.com/watch?v=video1"]
    },
    {
      id: 2,
      title: "Entrenamiento Funcional",
      description: "Rutinas dinámicas que mejoran fuerza, resistencia y coordinación.",
      image: funcional,
      fecha: "2025-07-23",
      hora: "06:00 PM",
      videos: ["https://www.youtube.com/watch?v=video2"]
    },
    {
      id: 3,
      title: "Clases de Zumba",
      description: "Un entrenador diseña un plan adaptado a tus metas.",
      image: zumba,
      fecha: "2025-07-24",
      hora: "07:30 AM",
      videos: ["https://www.youtube.com/watch?v=video3"]
    },
    {
      id: 4,
      title: "Zona de Pesas",
      description: "Área equipada para potenciar tu masa muscular.",
      image: rumba,
      fecha: "2025-07-25",
      hora: "05:00 PM",
      videos: ["https://www.youtube.com/watch?v=video4"]
    }
  ];

  const [clases, setClases] = useState<Clase[]>([]);

  // Cargar clases desde localStorage o iniciar con clasesBase
  useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      setClases(JSON.parse(data));
    } else {
      setClases(clasesBase);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(clasesBase));
    }
  }, []);

  // Guardar en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(clases));
  }, [clases]);

  // Agregar nueva clase
  const addClase = (nueva: Clase) => {
    setClases((prev) => [...prev, nueva]);
  };

  return (
    <ClaseContext.Provider value={{ clases, addClase }}>
      {children}
    </ClaseContext.Provider>
  );
};
