const encuesta = () => {
  return (
    <main>
      <h1>Encuesta de satisfacción</h1>
      <div className="card">
        <form autoComplete="off">
          <fieldset>
            <h3>Como calificarías la elección del lugar de la fiesta?</h3>
            <label htmlFor="excelente1">Excelente</label>
            <input
              className="check"
              type="checkbox"
              name="excelente1"
              id="excelente1"
            />
            <label htmlFor="bueno1">Bueno</label>
            <input
              className="check"
              type="checkbox"
              name="bueno1"
              id="bueno1"
            />
            <label htmlFor="regular1">Regular</label>
            <input
              className="check"
              type="checkbox"
              name="regular1"
              id="regular1"
            />
            <label htmlFor="mejora1">Necesita mejora</label>
            <input
              className="check"
              type="checkbox"
              name="mejora1"
              id="mejora1"
            />
          </fieldset>
          <fieldset>
            <h3>
              Como calificarías la atención y servicio del personal durante la
              fiesta?
            </h3>
            <label htmlFor="excelente2">Excelente</label>
            <input
              className="check"
              type="checkbox"
              name="excelente2"
              id="excelente2"
            />
            <label htmlFor="bueno2">Bueno</label>
            <input
              className="check"
              type="checkbox"
              name="bueno2"
              id="bueno2"
            />
            <label htmlFor="regular2">Regular</label>
            <input
              className="check"
              type="checkbox"
              name="regular2"
              id="regular2"
            />
            <label htmlFor="mejora2">Necesita mejora</label>
            <input
              className="check"
              type="checkbox"
              name="mejora2"
              id="mejora2"
            />
          </fieldset>
          <fieldset>
            <h3>
              Los servicios ofrecidos durante la fiesta (Baños, Personal, etc)
              fueron satisfactorios?
            </h3>
            <label htmlFor="sisatisfactorio">si, muy satisfactorios</label>
            <input
              className="check"
              type="checkbox"
              name="sisatisfactorio"
              id="sisatisfactorio"
            />
            <label htmlFor="aceptable">aceptable</label>
            <input
              className="check"
              type="checkbox"
              name="aceptable"
              id="aceptable"
            />
            <label htmlFor="nosatisfactorio">no, satisfactorios</label>
            <input
              className="check"
              type="checkbox"
              name="nosatisfactorio"
              id="nosatisfactorio"
            />
          </fieldset>
          <fieldset>
            <h3>La duración de la fiesta fue adecuada para ti?</h3>
            <label htmlFor="siperfecta">si, perfecta</label>
            <input
              className="check"
              type="checkbox"
              name="siperfecta"
              id="siperfecta"
            />
            <label htmlFor="unpococorta">un poco corta</label>
            <input
              className="check"
              type="checkbox"
              name="unpococorta"
              id="unpococorta"
            />
            <label htmlFor="unpocolarga">un poco larga</label>
            <input
              className="check"
              type="checkbox"
              name="unpocolarga"
              id="unpocolarga"
            />
            <label htmlFor="larga">Demasiada larga</label>
            <input className="check" type="checkbox" name="larga" id="larga" />
          </fieldset>
        </form>
      </div>
    </main>
  );
};

export default encuesta;
