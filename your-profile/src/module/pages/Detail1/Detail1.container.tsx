import { Detail1Context } from "./utils/context";
import React from "react";
import Detail1View from "./Detail1.view";
import { initialValues } from "./utils/initialValues";
import { useFormik } from "formik";

export default function Detail1Container() {
  const [inputs, setInputs] = React.useState(initialValues);
  // const { errors,  } = useFormik({

  // })

  return (
    <Detail1Context.Provider value={{ inputs, setInputs }}>
      <Detail1View />
    </Detail1Context.Provider>
  );
}
