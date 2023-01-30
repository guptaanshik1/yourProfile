import * as Yup from "yup";

export const basicDetailSchema = {
  firstName: Yup.string().min(2).max(25).required("First Name cannot be empty"),
  lastName: Yup.string().min(2).max(25),
  email: Yup.string().email().required("Email cannot be empty"),
  address: Yup.string().min(6),
  state: Yup.string().required("State cannot be empty"),
  hobbies: Yup.string(),
  bioHighlight: Yup.string(),
};
