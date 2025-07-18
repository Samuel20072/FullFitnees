import {
  createContext,
  useContext,
  useState,
  useEffect
} from "react";
import type { ReactNode } from "react";

import producto1 from "../assets/productos/resilience-cbd-MRjtLNRC4XI-unsplash.jpg";
import producto2 from "../assets/productos/ryan-hoffman-Kf6UgCx5mb8-unsplash.jpg";
import producto3 from "../assets/productos/tim-bernhard-ZIKUoYcwu48-unsplash.jpg";

export type Producto = {
  id: number;
  image: string;
  category: string;
  name: string;
  price: string;
  summary?: string;
};

type ProductoContextType = {
  productos: Producto[];
  addProducto: (nuevo: Producto) => void;
  editProducto: (id: number, datosActualizados: Partial<Producto>) => void;
  deleteProducto: (id: number) => void;
};

const ProductoContext = createContext<ProductoContextType | null>(null);

export const useProductos = () => {
  const context = useContext(ProductoContext);
  if (!context) throw new Error("useProductos debe estar dentro de un ProductoProvider");
  return context;
};

export const ProductoProvider = ({ children }: { children: ReactNode }) => {
  const STORAGE_KEY = "productos_fullfit";

  const productosBase: Producto[] = [
    {
      id: 1,
      image: producto1,
      category: "Proteína",
      name: "Whey Protein Pro 2Kg",
      price: "$180.000 COP",
      summary:
        "Mejora tu recuperación muscular con esta proteína de alta calidad, ideal para después de tus entrenamientos.",
    },
    {
      id: 2,
      image: producto2,
      category: "Accesorios",
      name: "Guantes de Entrenamiento",
      price: "$35.000 COP",
    },
    {
      id: 3,
      image: producto3,
      category: "Suplementos",
      name: "Creatina Monohidratada 300g",
      price: "$65.000 COP",
    },
    {
      id: 4,
      image: producto2,
      category: "Ropa Deportiva",
      name: "Camiseta Dry-Fit FullFitness",
      price: "$40.000 COP",
    },
  ];

  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      setProductos(JSON.parse(data));
    } else {
      setProductos(productosBase);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(productosBase));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(productos));
  }, [productos]);

  const addProducto = (nuevo: Producto) => {
    setProductos((prev) => [...prev, nuevo]);
  };

  const editProducto = (id: number, datosActualizados: Partial<Producto>) => {
    setProductos((prev) =>
      prev.map((prod) =>
        prod.id === id ? { ...prod, ...datosActualizados } : prod
      )
    );
  };

  const deleteProducto = (id: number) => {
    setProductos((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <ProductoContext.Provider
      value={{ productos, addProducto, editProducto, deleteProducto }}
    >
      {children}
    </ProductoContext.Provider>
  );
};
