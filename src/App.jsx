import { Button } from "react-daisyui";

import { Header, Hero, AboutUs, Goal, Contact, Footer } from "./sections";
import React, { useContext } from "react";

import { LanguageContext } from "./LanguageContext";

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
      <IntlProvider locale={language} messages={resources[language]}>
        <main>
          <section>
            <Header />
          </section>
          <section>{/* <Hero /> */}</section>
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
      </IntlProvider>
    </div>
  );
};

export default App;
