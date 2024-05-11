import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";

import * as Sentry from "@sentry/react";
import Features from "./components/Features";

function App() {
  // return <button onClick={() => methodDoesNotExist()}>Break the world</button>;
  return (
    <main className="bg-black">
      <NavBar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
    </main>
  );
}

export default Sentry.withProfiler(App);
