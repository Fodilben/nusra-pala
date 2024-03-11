import { Button } from "react-daisyui";

import { Header, Hero, AboutUs, Goal, Contact, Footer } from "./sections";

export default function App() {
  return (
    <main className="relative">
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
  );
}
