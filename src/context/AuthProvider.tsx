import React, { createContext, useEffect, useState, ReactNode, FC } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/firebase/firebase-config";

// Define the shape of the context
interface AuthContextType {
  user: User | null; // Firebase User or null if not logged in
  loading: boolean; // Indicates whether the auth state is being determined
}

// Create the context with a default value
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Props for the AuthProvider component
interface AuthProviderProps {
  children: ReactNode; // React children elements
}

// AuthProvider component
export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set up the onAuthStateChanged listener
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update the user state
      setLoading(false); // Set loading to false once the state is determined
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
