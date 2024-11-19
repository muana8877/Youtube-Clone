import { createContext, useContext, useState } from "react";

// Create the context
const UtilsContext = createContext(null);

// Provide context
export const UtilsContextProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [mobileShow, setMobileShow] = useState(false);

  return (
    <UtilsContext.Provider value={{ isSidebar, setIsSidebar, mobileShow, setMobileShow }}>
      {children} {/* Make sure it's children, not childer */}
    </UtilsContext.Provider>
  );
};

// Custom hook to use context
export const useUtils = () => {
  const context = useContext(UtilsContext);

  if (!context) {
    console.error("useUtils must be used within a UtilsContextProvider");
    return null;
  }

  return context;
};
