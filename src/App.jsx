import { Button } from "react-daisyui";

import { Header, Hero, AboutUs, Goal, Contact, Footer } from "./sections";

export default function App() {
  return (
    <main className="relative w-full ">
      <Header />
      <Hero />
      <AboutUs />
      <Goal />
      <Contact />
      <Footer />
    </main>
  );
}
