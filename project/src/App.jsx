import { useState } from "react";

import "./App.css";
import Card from "./Components/Card";
import bottom from "../src/assets/images/bg-pattern-bottom.svg";
import top from "../src/assets/images/bg-pattern-top.svg";
import Attribution from "./Components/Attribution";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="min-h-[100vh] relative overflow-hidden flex flex-col justify-center items-center">
        <img src={bottom} alt="img" className="absolute sm:bottom-[-33rem] sm:right-[-13rem] bottom-[-7rem] right-[-12rem]"/>
        <img src={top} alt="img" className="absolute sm:top-[-33rem] sm:left-[-13rem] top-[-12rem] left-[-12rem]"/>
        <Card />
        <Attribution/>
      </section>
    </>
  );
}

export default App;
