import { useContext } from "react";
import AuthContext from "./authcontext";

const Ingreso = () => {
  let { setStep } = useContext(AuthContext);

  return (
    <main>
      <h1>INGRESO</h1>
      <div className="card">
        <form autoComplete="off">
          <fieldset>
            <label htmlFor="i">email</label>
            <input
              type="email"
              name="i"
              id="i"
              placeholder="email"
              required
              autoFocus
            />
            <p>debe digitar un email valido</p>
          </fieldset>
          <fieldset>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              required
            />
            <p>debe digitar una contraseña valida</p>
          </fieldset>
          <button onClick={() => setStep("Encuesta")}>Ingresar</button>
        </form>
      </div>
    </main>
  );
};

export default Ingreso;
