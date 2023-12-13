import * as Yup from "yup";

export const Schema = Yup.object().shape({
  email: Yup.string()
    .email("Ingrese un correo valido")
    .required("Email requerido"),
  password: Yup.string()
    .min(8, "Ingrese password correcto")
    .matches(
      /(?=.*[\W])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/,
      "El password debe contener los caracteres correctos"
    )
    .required("Password requerido"),
  // confirm: Yup.string()
  //   .oneOf([Yup.ref("password"), null], "Passwords must match")
  //   .required("Confirmation is required"),
  // framework: Yup.string()
  //   .oneOf(["react", "vue", "angular"], "Must select a framework")
  //   .required("Framework is required"),
  // terms: Yup.bool().oneOf([true], "You must accept the terms"),
});
