import PropTypes from "prop-types";
import { Form, InputGroup } from "react-bootstrap";

const InputUiElement = ({
  controlId,
  type,
  placeholder,
  name,
  value,
  onChange,
  className,
  size,
  error,
  label,
  helpText,
  autoComplete,
  style,
  readOnly,
  maxLength,
  minLength,
  icon,
  ...props
}) => {
  const HelpValidText = () => (
    <>
      {helpText && <Form.Text muted>{helpText}</Form.Text>}
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </>
  );

  const InputGroupPrepend = ({ children }) => (
    <InputGroup>
      {children}
      <InputGroup.Prepend>
        <InputGroup.Text>{icon}</InputGroup.Text>
      </InputGroup.Prepend>
      <HelpValidText />
    </InputGroup>
  );

  const FormGroup = ({ children }) => (
    <Form.Group controlId={controlId} style={style}>
      {children}
      <HelpValidText />
    </Form.Group>
  );

  const WrapInput = ({ children }) => {
    if (icon) {
      return <InputGroupPrepend>{children}</InputGroupPrepend>;
    } else {
      return <FormGroup>{children}</FormGroup>;
    }
  };

  return (
    <React.Fragment>
      <WrapInput>
        {label && <Form.Label>{label}</Form.Label>}
        <Form.Control
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          className={className}
          size={size}
          onChange={onChange}
          autoComplete={autoComplete}
          readOnly={readOnly}
          maxLength={maxLength}
          minLength={minLength}
          {...props}
        />
      </WrapInput>
    </React.Fragment>
  );
};

InputUiElement.defaultProps = {
  type: "text",
  className: "",
  autoComplete: "off",
  readOnly: false,
};

InputUiElement.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email", "password", "number"]).isRequired,
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  controlId: PropTypes.string.isRequired,
  size: PropTypes.string,
  style: PropTypes.object,
  helpText: PropTypes.string,
  autoComplete: PropTypes.string,
  readOnly: PropTypes.bool,
  maxLength: PropTypes.string,
  minLenght: PropTypes.string,
  icon: PropTypes.element,
};

const SelectUiElement = ({
  label,
  size,
  controlId,
  option,
  style,
  defaultFirstOption
}) => (
  <Form.Group controlId={controlId} style={style}>
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
  defaultFirstOption:PropTypes.string
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

