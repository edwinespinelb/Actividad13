const Ingreso = () => {
  return (
    <main>
      <h1>Ingreso</h1>
      <div>
        <form autoComplete="off">
          <fieldset>
            <label htmlFor="i">email</label>
            <input type="email" name="i" id="i" placeholder="email" />
            <p>debe digitar un email valido</p>
          </fieldset>
          <fieldset>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
            <p>debe digitar una contraseña valida</p>
          </fieldset>
          <button>Ingresar</button>
        </form>
      </div>
    </main>
  );
};

export default Ingreso;
