import * as yup from "yup";
import { IChangePassowrdStrings } from "../language";

function changePasswordForm(strings: IChangePassowrdStrings) {
  return yup.object({
    password: yup.string().required(strings.form.password.error.required),
    ["new-password"]: yup
      .string()
      .required(strings.form.newPassword.error.required),
    ["confirm-password"]: yup
      .string()
      .required(strings.form.password.error.required)
      .equals(
        [yup.ref("new-password")],
        strings.form.confirmPassword.error.invalid
      ),
  });
}

export default changePasswordForm;
