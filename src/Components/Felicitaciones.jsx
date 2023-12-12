import { useContext } from "react";
import AuthContext from "./authcontext";

const Felicitaciones = () => {
  let { setStep } = useContext(AuthContext);

  return (
    <div className="terminar">
      <h1>Felicitaciones</h1>
      <button onClick={() => setStep("Ingreso")}>Regresar</button>
    </div>
  );
};

export default Felicitaciones;
