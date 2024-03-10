import { Button } from "react-daisyui";

import { Header, Hero, AboutUs, Goal, Contact, Footer } from "./sections";
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
      <main>
        <section>
          <Header />
        </section>
        <section>
          <Hero />
        </section>
        <section>
          <AboutUs />
        </section>
        <section>
          <Goal />
        </section>
        <section>
          <Contact />
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </div>
  );
};
export default App;
