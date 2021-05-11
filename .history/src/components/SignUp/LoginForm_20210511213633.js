import { React, useState } from "react";
import { Formik, Form } from "formik";
import "./validation.css";

import { validationSchema, initialValues } from "./FormConstsnt";
import InputField from "./InputField";

const FormValidation = ({ setIsSubmited,setPhone }) => {
  const onSubmit = (values) => {
    console.log(values);

    setIsSubmited(true);

    setPhone(values.mobile)
  };

  // console.log(formik.isValid)
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnMount
    >
      {(formik) => { 
        //  console.log(formik.values)
        return (
          // console.log(formik)
          <Form>
            <div className="form">
              <h3>please Fill out the Form</h3>

              <InputField name="firstname" label="firstname" />

              <InputField name="lastname" label="lastname" />

              <InputField name="nationalcode" label="nationalcode" />

              <InputField name="mobile" label="mobile" />

              <InputField name="homephone" label="homephone" />

              <InputField name="email" label="email" />

              <InputField name="password" label="password" type="password" />

              <InputField
                name="confirmPassword"
                label="confirmPassword"
                type="password"
              />

              <button
                type="submit"
                name="action"
                className="btn"
                disabled={!formik.isValid}
              >
                Next
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormValidation;
