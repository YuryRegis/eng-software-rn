import * as yup from "yup";
import { ILoginStrings } from "../language";

function loginForm(strings: ILoginStrings) {
  return yup.object({
    email: yup
      .string()
      .email(strings.form.email.error.invalid)
      .required(strings.form.email.error.required),
    password: yup.string().required(strings.form.password.error.required),
  });
}

export default loginForm;
