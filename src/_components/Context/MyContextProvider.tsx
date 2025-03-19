'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface MyContextType {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export const MyContextProvider = ({ children }: { children: ReactNode }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const openTimer = setTimeout(() => {
      setModalOpen(true);
      const closeTimer = setTimeout(() => setModalOpen(false), 2000000); // Close after x seconds
      return () => clearTimeout(closeTimer);
    }, 5000); // Show modal after x seconds

    return () => clearTimeout(openTimer); // Cleanup timeout
  }, []);

  return (
    <MyContext.Provider value={{ modalOpen, setModalOpen }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};
