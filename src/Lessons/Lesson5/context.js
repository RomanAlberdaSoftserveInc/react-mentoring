import React, { useCallback, useContext, useState, useRef } from "react";

const UniverseContext = React.createContext(null);
const UniverseChangerContext = React.createContext(null);

export const Provider = ({ children, defaultValue = 42 }) => {
  const [state, setState] = useState(defaultValue);
  const stateRef = useRef(state);

  stateRef.current = state;

  const handleChange = useCallback(handler => {
    setState(handler(stateRef.current));
  }, []);

  const value = {
    answer: state,
    onChange: handleChange,
  };

  return (
    <UniverseContext.Provider value={value}>
      {children}
    </UniverseContext.Provider>
  );
};

export const ChangeProvider = ({ children }) => {
  const { onChange } = useUniverseContext();

  return (
    <UniverseChangerContext.Provider value={onChange}>
      {children}
    </UniverseChangerContext.Provider>
  );
};

export const useUniverseContext = () => useContext(UniverseContext);
export const useUniverseChangeContext = () =>
  useContext(UniverseChangerContext);
