import { use } from "i18next";
import { createContext, useState, useContext } from "react";
import { getThem } from "../utils";

const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setTheme] = useState(getThem());
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const themeTogg = (newTheme) => {
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };
  return (
    <AppContext.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar, themeTogg, theme }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
