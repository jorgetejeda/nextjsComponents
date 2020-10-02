import * as Yup from "yup";
import MESSAGES from "../core/enum/message";

export function getInputFields(arrInputs) {
  let fields = {};
  arrInputs.map((field) => {
    Object.assign(fields, addRules(field));
  });
  return Yup.object().shape(fields);
}

export function addRules(field) {
  switch (field) {
    case "email":
      return {
        email: Yup.string()
          .required(MESSAGES.REQUIRED)
          .email("* Debe ser un correo valido"),
      };
    case "password":
      return {
        password: Yup.string()
          .required(MESSAGES.REQUIRED)
          .min(4, "* Este campo debe contener mas de 4 caracteres"),
      };
    case "confirmPassword":
      return {
        confirmPassword: Yup.string()
          .required(MESSAGES.REQUIRED)
          .oneOf([Yup.ref("password"), null], "* Las contraseñas no coinciden"),
      };
    case "name":
      return {
        name: Yup.string()
          .required(MESSAGES.REQUIRED)
          .min(1, "* Este campo debe contener mas de 1 caracter"),
      };
    case "identification":
      return {
        identification: Yup.string()
          .required(MESSAGES.REQUIRED)
          .min(10, "* Aun estan faltando numeros")
          .min(11, "* Estas agregando numeros de mas"),
      };
      case "checkbox":
        return{
          checkbox: Yup.boolean()
          .oneOf([true],MESSAGES.REQUIRED)
        }
    default:
      console.log(`El campo ${field} no existe en la lista de configuracion`);
      break;
  }
}
