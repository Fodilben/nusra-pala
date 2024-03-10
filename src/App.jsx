import React, { useContext } from "react";

import { LanguageContext } from "./LanguageContext";
// Import if using context
import LanguageToggle from "../compontents/LanguageToggle ";
import { IntlProvider, FormattedMessage } from "react-intl";
import enMessages from "../data/messages.en.json";
import arMessages from "../data/messages.ar.json";
const resources = {
  en: enMessages,
  ar: arMessages,
};

const App = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="App">
      <LanguageToggle /> {/* Language toggle component */}
      <IntlProvider
        locale={language}
        messages={resources[language]}
      ></IntlProvider>
    </div>
  );
};
export default App;
