import React, { createContext } from 'react';

export const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
  const [handleId, setHandleId] = React.useState();

  return (
    <AppContext.Provider value={{ submitInput, setSubmitInput, searchValue, setSearchValue }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
