import { useState } from "react";

import Encuesta from "./Components/encuesta";
import Ingreso from "./Components/Ingreso";

const App = () => {
  const [step, setStep] = useState("Ingreso");
  return (
    <div className="container">
      {step === "Encuesta" && <Encuesta />}
      {step === "Ingreso" && <Ingreso />}
    </div>
  );
};

export default App;
