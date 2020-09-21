import PropTypes from "prop-types";
import { Form, InputGroup } from "react-bootstrap";
const InputUiElement = ({
  style,
  label,
  type,
  name,
  placeholder,
  className,
  size,
  onChange,
  onBlur,
  autoComplete,
  value,
  touched,
  errors,
  icon,
  helpText,
  ...props
}) => {
  return (
    <React.Fragment>
      <InputGroup style={style}>
        {label && <Form.Label>{label}</Form.Label>}
        <Form.Control
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          className={className}
          size={size}
          onChange={onChange}
          onBlur={onBlur}
          autoComplete={autoComplete}
          {...props}
        />
        <InputGroup.Prepend>
          <InputGroup.Text>{icon}</InputGroup.Text>
        </InputGroup.Prepend>
        {touched && errors ? (
          <div className="w-100 error-message">{errors}</div>
        ) : null}
      </InputGroup>
      {helpText && <Form.Text muted>{helpText}</Form.Text>}
    </React.Fragment>
  );
};

InputUiElement.defaultProps = {
  type: "text",
  className: "",
  autoComplete: "off",
};

InputUiElement.propTypes = {
  style: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.oneOf(["text", "password", "email", "number"]).isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  autoComplete: PropTypes.string,
  value: PropTypes.string,
  touched: PropTypes.bool,
  errors: PropTypes.string,
  icon: PropTypes.element,
  helpText: PropTypes.string,
};

const SelectUiElement = ({
  label,
  size,
  controlId,
  option,
  style,
  defaultFirstOption,
  className,
}) => (
  <Form.Group controlId={controlId} style={style} className={className}>
    {label && <Form.Label>{label}</Form.Label>}
    <Form.Control as="select" size={size}>
      {defaultFirstOption && <option>{defaultFirstOption}</option>}
      {option.map((item, index) => (
        <option key={index} value={item.value}>
          {item.text}
        </option>
      ))}
    </Form.Control>
  </Form.Group>
);

SelectUiElement.propTypes = {
  label: PropTypes.string,
  size: PropTypes.string,
  controlId: PropTypes.string,
  option: PropTypes.array.isRequired,
  style: PropTypes.object,
  defaultFirstOption: PropTypes.string,
};

const TextareaIuElement = ({
  rows,
  label,
  placeholder,
  controlId,
  size,
  style,
  className,
}) => (
  <Form.Group controlId={controlId} style={style}>
    {label && <Form.Label>{label}</Form.Label>}
    <Form.Control
      className={className}
      as="textarea"
      rows={rows}
      placeholder={placeholder}
      size={size}
    />
  </Form.Group>
);

TextareaIuElement.defaultProps = {
  rows: "3",
};

TextareaIuElement.protoTypes = {
  rows: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  controlId: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
};

export { InputUiElement, SelectUiElement, TextareaIuElement };
