import * as yup from "yup";
import { ILoginStrings } from "../language";

function createAccountForm(strings: ILoginStrings) {
  return yup.object({
    email: yup
      .string()
      .email(strings.form.email.error.invalid)
      .required(strings.form.email.error.required),
    password: yup
      .string()
      .required(strings.form.passwordConfirm.error.required),
    passwordConfirm: yup
      .string()
      .oneOf(
        [yup.ref("password"), null],
        strings.form.passwordConfirm.error.notMatch
      )
      .required(strings.form.passwordConfirm.error.required),
  });
}

export default createAccountForm;
