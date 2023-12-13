import React, { createContext, useState, useContext } from 'react';

// Создание контекста
export const HandleIdContext = createContext();

// Провайдер контекста
export const HandleIdProvider = ({ children }) => {
  const [handleId, setHandleId] = useState();

  return (
    <HandleIdContext.Provider value={{ handleId, setHandleId }}>
      {children}
    </HandleIdContext.Provider>
  );
};

// Кастомный хук для более удобного использования значения контекста
export const useHandleId = () => {
  const context = useContext(HandleIdContext);
  if (!context) {
    throw new Error('useHandleId must be used within a HandleIdProvider');
  }
  return context;
};
