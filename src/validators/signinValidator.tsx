/* eslint-disable no-useless-escape */
import * as yup from "yup";

const signinSchema = yup.object().shape({
  email: yup.string().email("Provide a valid email address"),
  password: yup
    .string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});

export default signinSchema;
