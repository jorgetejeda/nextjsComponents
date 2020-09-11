import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const InputUiElement = ({
  controlId,
  type,
  placeholder,
  name,
  value,
  onChange,
  customClassName,
  size,
  error,
  label,
  helpText,
  autoComplete,
  style
}) => {
  return (
    <React.Fragment>
      <Form.Group controlId={controlId} style={style}>
        {label && <Form.Label>{label}</Form.Label>}
        <Form.Control
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          className={customClassName}
          size={size}
          onChange={onChange}
          autoComplete={autoComplete}
        />
        {helpText && <Form.Text muted>{helpText}</Form.Text>}
        <Form.Control.Feedback type={error && "invalid"}>
          {error}
        </Form.Control.Feedback>
      </Form.Group>
    </React.Fragment>
  );
};

InputUiElement.defaultProps ={
  type:"text",
  customClassName:"",
  autoComplete:"off"
}

InputUiElement.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email", "password", "number"]).isRequired,
  customClassName: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  controlId: PropTypes.string.isRequired,
  size: PropTypes.string,
  style: PropTypes.object,
  helpText: PropTypes.string,
  autoComplete:PropTypes.string
};

export default InputUiElement;