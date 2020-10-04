export const DebugForm = ({ formik }) => (
  <pre>{JSON.stringify(formik, null, 2)}</pre>
);
