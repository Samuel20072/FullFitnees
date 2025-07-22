// src/contexts/EntrenadorContext.tsx
import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

import entrenador1 from "../assets/daniel-apodaca-WdoQio6HPVA-unsplash.jpg";
import entrenador2 from "../assets/john-fornander-TAZoUmDqzXk-unsplash.jpg";
import entrenador3 from "../assets/samuel-girven-2e4lbLTqPIo-unsplash.jpg";

export type Entrenador = {
  id: number;
  nombre: string;
  foto: string;
  especialidad: string;
  experiencia: string;
  descripcion: string;
  idiomas: string;
  contacto: string;
};

type EntrenadorContextType = {
  entrenadores: Entrenador[];
};

const EntrenadorContext = createContext<EntrenadorContextType | null>(null);

export const useEntrenadores = () => {
  const context = useContext(EntrenadorContext);
  if (!context)
    throw new Error("useEntrenadores debe estar dentro de un EntrenadorProvider");
  return context;
};

export const EntrenadorProvider = ({ children }: { children: ReactNode }) => {
  const STORAGE_KEY = "entrenadores_fullfit";

  const entrenadoresBase: Entrenador[] = [
    {
      id: 1,
      nombre: "Laura Ríos",
      foto: entrenador1,
      especialidad: "Zumba, Cardio, HIIT",
      experiencia: "10 años",
      descripcion:
        "Entrenadora certificada con amplia experiencia en clases grupales y personalizadas.",
      idiomas: "Español, Inglés",
      contacto: "laura.rios@gymfit.com",
    },
    {
      id: 2,
      nombre: "Carlos Ramírez",
      foto: entrenador2,
      especialidad: "Musculación, Nutrición",
      experiencia: "8 años",
      descripcion:
        "Apasionado por el bienestar físico y la alimentación saludable.",
      idiomas: "Español",
      contacto: "carlos.ramirez@gymfit.com",
    },
    {
      id: 3,
      nombre: "Andrea Torres",
      foto: entrenador3,
      especialidad: "Pilates, Yoga",
      experiencia: "6 años",
      descripcion:
        "Ayuda a mejorar tu flexibilidad y reducir el estrés con entrenamientos holísticos.",
      idiomas: "Español, Francés",
      contacto: "andrea.torres@gymfit.com",
    },
  ];

  const [entrenadores, setEntrenadores] = useState<Entrenador[]>([]);

  useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      setEntrenadores(JSON.parse(data));
    } else {
      setEntrenadores(entrenadoresBase);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entrenadoresBase));
    }
  }, []);

  return (
    <EntrenadorContext.Provider value={{ entrenadores }}>
      {children}
    </EntrenadorContext.Provider>
  );
};
