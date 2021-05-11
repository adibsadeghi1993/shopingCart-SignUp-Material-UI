
import * as Yup from "yup";

export const validationSchema = Yup.object({
  firstname: Yup.string()
    .min(4, "is short")
    .max(15, "is long")
    .required("required"),
  lastname: Yup.string().min(3, "not valid").required("required"),
  nationalcode: Yup.string()
    .min(2, "not valid")

    .required("required")
    .max(15, "is long"),
  mobile: Yup.string()
    .min(9, "not valid")

    .required("required")
    .max(15, "is long"),
  homephone: Yup.string()
    .min(9, "not valid")

    .required("required")
    .max(15, "is long"),

  email: Yup.string().email("not valid").required("required"),
  password: Yup.string()
    .required("required")
    .min(5, "is short")
    .max(15, "is long"),
  confirmPassword: Yup.string()
    .required("required")
    .oneOf([Yup.ref("password")], "not match"),
});


export const initialValues = {
    firstname: "",
    lastname: "",
    nationalcode: "",
    mobile: "",
    homephone: "",
    email: "",
    password: "",
    confirmPassword: "",
  };