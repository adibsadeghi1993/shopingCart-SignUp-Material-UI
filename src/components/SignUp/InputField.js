import { Field, ErrorMessage } from "formik";

const InputField = ({ name, label, type = "text" }) => {
  return (
    <div className="label">
      <div className="error">
        <label className="block"> {label} </label>
        <ErrorMessage name={name}>
          {(error) => <div className="message">{error}</div>}
        </ErrorMessage>
      </div>
      <Field type={type} id={name} name={name} className="input" />
    </div>
  );
};

export default InputField;
