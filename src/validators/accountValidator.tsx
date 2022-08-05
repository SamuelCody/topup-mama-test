/* eslint-disable no-useless-escape */
import * as yup from "yup";

const accountSchema = yup.object().shape({
  name: yup.string().required("Provide a name"),
  job: yup.string().required("Provide a job"),
});

export default accountSchema;
