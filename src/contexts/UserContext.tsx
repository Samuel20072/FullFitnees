import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

// Tipo del usuario
export type Usuario = {
  cc: string;
  fullName: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  role: "cliente" | "admin" | "entrenador";
  estado: "activo" | "inactivo";
  fechaPago?: string;         // nueva propiedad
  fechaVencimiento?: string;  // nueva propiedad
};

// Tipo del contexto
type UserContextType = {
  usuarios: Usuario[];
  setUsuarios: React.Dispatch<React.SetStateAction<Usuario[]>>;
  login: (email: string, password: string) => Usuario | null;
  updateEstado: (cc: string, estado: "activo" | "inactivo") => void;
  addUser: (nuevo: Usuario) => void;
  updateUser: (cc: string, data: Partial<Usuario>) => void;
  deleteUser: (cc: string) => void;
};

// Crear el contexto
const UserContext = createContext<UserContextType | null>(null);

// Hook personalizado para usar el contexto
export const useUsuarios = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUsuarios debe estar dentro de un UserProvider");
  }
  return context;
};

// Provider del contexto
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const STORAGE_KEY = "usuarios_fullfit";

  const defaultUsers: Usuario[] = [
    {
      cc: "123456789",
      fullName: "Juan Pérez",
      username: "juanp",
      email: "cliente@example.com",
      phone: "3011234567",
      password: "cliente123",
      role: "cliente",
      estado: "activo",
      fechaPago: "2025-07-01",
      fechaVencimiento: "2025-07-31",
    },
    {
      cc: "987654321",
      fullName: "Ana Torres",
      username: "anatorres",
      email: "entrenador@example.com",
      phone: "3021234567",
      password: "entrenador123",
      role: "entrenador",
      estado: "activo",
    },
    {
      cc: "555555555",
      fullName: "Carlos Gómez",
      username: "carlosg",
      email: "admin@example.com",
      phone: "3031234567",
      password: "admin123",
      role: "admin",
      estado: "activo",
    },
  ];

  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  // Cargar usuarios desde localStorage
  useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      setUsuarios(JSON.parse(data));
    } else {
      setUsuarios(defaultUsers);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultUsers));
    }
  }, []);

  // Guardar cambios en localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(usuarios));
  }, [usuarios]);

  // Login
  const login = (email: string, password: string): Usuario | null => {
    return usuarios.find((u) => u.email === email && u.password === password) || null;
  };

  // Actualizar estado (activo/inactivo)
  const updateEstado = (cc: string, estado: "activo" | "inactivo") => {
    setUsuarios((prev) =>
      prev.map((u) => {
        if (u.cc !== cc) return u;

        if (estado === "activo") {
          const hoy = new Date();
          const fechaPago = hoy.toISOString().split("T")[0];
          const fechaVencimiento = new Date(hoy.setMonth(hoy.getMonth() + 1))
            .toISOString()
            .split("T")[0];

          return {
            ...u,
            estado,
            fechaPago,
            fechaVencimiento,
          };
        } else {
          return {
            ...u,
            estado,
            fechaPago: undefined,
            fechaVencimiento: undefined,
          };
        }
      })
    );
  };

  const addUser = (nuevo: Usuario) => {
    setUsuarios((prev) => [...prev, nuevo]);
  };

  const updateUser = (cc: string, data: Partial<Usuario>) => {
    setUsuarios((prev) =>
      prev.map((u) => (u.cc === cc ? { ...u, ...data } : u))
    );
  };

  const deleteUser = (cc: string) => {
    setUsuarios((prev) => prev.filter((u) => u.cc !== cc));
  };

  return (
    <UserContext.Provider
      value={{
        usuarios,
        setUsuarios,
        login,
        updateEstado,
        addUser,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
