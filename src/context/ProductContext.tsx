import { createContext, useContext, useState, ReactNode } from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  stock: number;
  category: string;
}

interface ProductContextType {
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  searchProducts: (query: string) => Product[];
}

const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
    description: 'High-quality wireless headphones with noise cancellation.',
    stock: 15,
    category: 'Electronics'
  },
  {
    id: '2',
    name: 'Vintage Digital Camera',
    price: 189,
    image: 'https://i.pcmag.com/imagery/roundup-groups/00cA1CsFXpl5Oh46NCM2dFq-1.fit_lim.size_1050x.jpg?auto=format&fit=crop&q=80&w=800',
    description: 'Classic look with modern digital features.',
    stock: 8,
    category: 'Electronics'
  },
  {
    id: '3',
    name: 'Minimalist Desk Lamp',
    price: 75,
    image: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=800',
    description: 'Sleek design for your modern workspace.',
    stock: 25,
    category: 'Home Office'
  },
  {
    id: '4',
    name: 'Elite Runner Sneakers',
    price: 120,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
    description: 'Lightweight and durable for professional runners.',
    stock: 12,
    category: 'Footwear'
  }
];

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>(initialProducts);

  const addProduct = (product: Omit<Product, 'id'>) => {
    setProducts([...products, { ...product, id: Math.random().toString() }]);
  };

  const updateProduct = (id: string, updatedFields: Partial<Product>) => {
    setProducts(products.map(p => p.id === id ? { ...p, ...updatedFields } : p));
  };

  const deleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const searchProducts = (query: string) => {
    return products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct, searchProducts }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error('useProducts must be used within ProductProvider');
  return context;
};
