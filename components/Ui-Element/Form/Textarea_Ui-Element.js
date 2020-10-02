import PropTypes from "prop-types";
import { FormControl, InputGroup, Form } from "react-bootstrap";

export const TextareaIuElement = ({
  rows,
  placeholder,
  size,
  icon,
  style,
  className,
  onChange,
  onBlur,
  touched,
  errors,
  hint,
  value,
  autoComplete,
  ...props
}) => (
  <>
    <InputGroup>
      <FormControl
        className={className}
        placeholder={placeholder}
        as="textarea"
        rows={rows}
        placeholder={placeholder}
        size={size}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete={autoComplete}
        defaultValue={value}
        {...props}
      />
      <InputGroup.Prepend>
        <InputGroup.Text>{icon}</InputGroup.Text>
      </InputGroup.Prepend>
    </InputGroup>
    <div className="d-flex flex-wrap flex-row justify-content-between">
      {touched && errors ? (
        <div className="error-message">{errors}</div>
      ) : null}
      {/* FIXME: Corregir la posicion del hint y los errores que aparecen en el campo
      Estos deben aparecer uno al lado del otro */}
      {hint && <Form.Text muted>{hint}</Form.Text>}
    </div>
  </>
);

TextareaIuElement.propTypes = {
  label: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  hint: PropTypes.string,
  errors: PropTypes.string,
  className: PropTypes.string,
  touched: PropTypes.bool,
  placeholder: PropTypes.string,
  rows: PropTypes.string,
  icon: PropTypes.element,
  defaultFirstOption: PropTypes.string,
};