import React, { useContext } from "react";
import { LanguageContext, LanguageProvider } from "../src/LanguageContext"; // Import if using context

const LanguageToggle = () => {
  const { language, changeLanguage } = useContext(LanguageContext) || {
    language: "en",
  }; // Handle context usage

  const handleLanguageChange = (event) => {
    changeLanguage(event.target.value); // Update language state
  };

  return (
    <>
      <select value={language} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="ar">arabic</option>
        {/* Add options for other languages */}
      </select>
    </>
  );
};

export default LanguageToggle;
