import { useState } from "react";
import AuthContext from "./Components/authcontext";

import Encuesta from "./Components/Encuesta";
import Ingreso from "./Components/Ingreso";
import Felicitaciones from "./Components/felicitaciones";

const App = () => {
  const [step, setStep] = useState("Ingreso");
  return (
    <AuthContext.Provider value={{ step, setStep }}>
      <div className="container">
        {step === "Encuesta" && <Encuesta />}
        {step === "Ingreso" && <Ingreso />}
        {step === "Felicitaciones" && <Felicitaciones />}
      </div>
    </AuthContext.Provider>
  );
};

export default App;
