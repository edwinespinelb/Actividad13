import { useContext } from "react";
import AuthContext from "./authcontext";

const encuesta = () => {
  let { setStep } = useContext(AuthContext);

  return (
    <main>
      <h1>Encuesta de satisfacción</h1>
      <div className="card">
        <form autoComplete="off">
          <fieldset>
            <h3>Como calificarías la elección del lugar de la fiesta?</h3>
            <table>
              <input
                className="check"
                type="radio"
                name="eleccion"
                id="excelente1"
              />
              <label htmlFor="excelente1">Excelente</label>
            </table>
            <table>
              <input
                className="check"
                type="radio"
                name="eleccion"
                id="bueno1"
              />
              <label htmlFor="bueno1">Bueno</label>
            </table>
            <table>
              <input
                className="check"
                type="radio"
                name="eleccion"
                id="regular1"
              />
              <label htmlFor="regular1">Regular</label>
            </table>
            <table>
              <input
                className="check"
                type="radio"
                name="eleccion"
                id="mejora1"
              />
              <label htmlFor="mejora1">Necesita mejora</label>
            </table>
          </fieldset>
          <fieldset>
            <h3>
              Como calificarías la atención y servicio del personal durante la
              fiesta?
            </h3>
            <table>
              <input
                className="check"
                type="radio"
                name="atencion"
                id="excelente2"
              />
              <label htmlFor="excelente2">Excelente</label>
            </table>
            <table>
              <input
                className="check"
                type="radio"
                name="atencion"
                id="bueno2"
              />
              <label htmlFor="bueno2">Bueno</label>
            </table>
            <table>
              <input
                className="check"
                type="radio"
                name="atencion"
                id="regular2"
              />
              <label htmlFor="regular2">Regular</label>
            </table>
            <table>
              <input
                className="check"
                type="radio"
                name="atencion"
                id="mejora2"
              />
              <label htmlFor="mejora2">Necesita mejora</label>
            </table>
          </fieldset>
          <fieldset>
            <h3>
              Los servicios ofrecidos durante la fiesta (Baños, Personal, etc)
              fueron satisfactorios?
            </h3>
            <table>
              <input
                className="check"
                type="radio"
                name="servicios"
                id="sisatisfactorio"
              />
              <label htmlFor="sisatisfactorio">si, muy satisfactorios</label>
            </table>
            <table>
              <input
                className="check"
                type="radio"
                name="servicios"
                id="aceptable"
              />
              <label htmlFor="aceptable">aceptable</label>
            </table>
            <table>
              <input
                className="check"
                type="radio"
                name="servicios"
                id="nosatisfactorio"
              />
              <label htmlFor="nosatisfactorio">no, satisfactorios</label>
            </table>
          </fieldset>
          <fieldset>
            <h3>La duración de la fiesta fue adecuada para ti?</h3>
            <table>
              <input
                className="check"
                type="radio"
                name="duracion"
                id="siperfecta"
              />
              <label htmlFor="siperfecta">si, perfecta</label>
            </table>
            <table>
              <input
                className="check"
                type="radio"
                name="duracion"
                id="unpococorta"
              />
              <label htmlFor="unpococorta">un poco corta</label>
            </table>
            <table>
              <input
                className="check"
                type="radio"
                name="duracion"
                id="unpocolarga"
              />
              <label htmlFor="unpocolarga">un poco larga</label>
            </table>
            <table>
              <input
                className="check"
                type="radio"
                name="duracion"
                id="larga"
              />
              <label htmlFor="larga">Demasiada larga</label>
            </table>
          </fieldset>
          <button>Enviar</button>
        </form>
      </div>
    </main>
  );
};

export default encuesta;
