import { getInputFields } from "../../utils/form-validation";
import { Formik } from "formik";

const ValidateForm = ({
  children,
  initialValues,
  onSubmit,
  validationSchema,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={getInputFields(validationSchema)}
      onSubmit={onSubmit}>
      {children}
    </Formik>
  );
};

export default ValidateForm;
