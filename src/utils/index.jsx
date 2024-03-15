export const getThem = () => {
  const theme = localStorage.getItem("theme") || "myLight";
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};
