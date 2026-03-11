import { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'admin' | 'user';

interface User {
  id: string;
  username: string;
  email: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // Mock logic: admin@example.com is admin
    if (email === 'admin@example.com' && password === 'admin123') {
      setUser({ id: '1', username: 'Admin User', email, role: 'admin' });
    } else if (password === 'password123') {
      setUser({ id: '2', username: 'Regular User', email, role: 'user' });
    } else {
      throw new Error('Invalid email or password');
    }
  };

  const register = async (username: string, email: string, password: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setUser({ id: Math.random().toString(), username, email, role: 'user' });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      register, 
      logout, 
      isAuthenticated: !!user,
      isAdmin: user?.role === 'admin'
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
