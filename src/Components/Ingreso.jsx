import { useContext } from "react";
import AuthContext from "./authcontext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Schema } from "./Schemas";

const initialValues = {
  i: "",
  password: "",
};

const Ingreso = () => {
  let { setStep } = useContext(AuthContext);

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <main>
      <h1>INGRESO</h1>
      <div className="card">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={Schema}
        >
          <Form autoComplete="off">
            <fieldset>
              <label htmlFor="email">email</label>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder="email"
                required
                autoFocus
              />
              <ErrorMessage
                name="email"
                component="p"
                className="error-message"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                name="password"
                id="password"
                placeholder="password"
                required
              />
              <ErrorMessage
                name="password"
                component="p"
                className="error-message"
              />
            </fieldset>
            <button type="submit">Ingresar</button>
            <p className="enlace">
              Digite la encuesta{" "}
              <span onClick={() => setStep("Encuesta")}>aqui</span>
            </p>
          </Form>
        </Formik>
      </div>
    </main>
  );
};

export default Ingreso;
