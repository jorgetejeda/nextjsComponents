import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

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
  ...props
}) => (
  <React.Fragment>
    <Form.Group controlId={controlId} style={style}>
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
        {...props}/>
      {helpText && <Form.Text muted>{helpText}</Form.Text>}
      <Form.Control.Feedback type="invalid">
        {error}
      </Form.Control.Feedback>
    </Form.Group>
  </React.Fragment>
);

InputUiElement.defaultProps = {
  type: "text",
  className: "",
  autoComplete: "off",
  readOnly:false
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
  readOnly:PropTypes.bool
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

export { InputUiElement, SelectUiElement };
