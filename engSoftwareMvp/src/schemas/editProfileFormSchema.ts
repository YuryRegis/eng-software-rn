import * as yup from "yup";
import { IEditProfileStrings } from "../language";

function editProfileForm(strings: IEditProfileStrings) {
  return yup.object({
    "user-name": yup.string().required(strings.form.userName.error.required),
    "last-name": yup.string().required(strings.form.lastName.error.required),
    birthday: yup
      .date()
      .min("1900-01-01", strings.form.birthday.error.invalid)
      .max(new Date(), strings.form.birthday.error.invalid)
      .required(strings.form.birthday.error.required),
    "profile-type": yup
      .string()
      .required(strings.form.profileType.error.required),
    university: yup.string().required(strings.form.university.error.required),
    course: yup.string().required(strings.form.course.error.required),
    period: yup.string().required(strings.form.period.error.required),
  });
}

export default editProfileForm;
20;
