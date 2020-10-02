import PropTypes from "prop-types";
import React from "react";
import { Form, InputGroup} from "react-bootstrap";

export const inputsProps={
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
}

const InputUiElement = ({
  style,
  controlId,
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
  hint,
  styleInput,
  classFormGroup,
  ...props
}) => {
  return (
    <>
      <Form.Group style={style} controlId={controlId} className={classFormGroup}>
        {label && <Form.Label>{label}</Form.Label>}
        <Form.Control
          type={type}
          placeholder={placeholder}
          name={name}
          className={className}
          size={size}
          onChange={onChange}
          onBlur={onBlur}
          autoComplete={autoComplete}
          defaultValue={value}
          {...props}
        />
      </Form.Group>
      {touched && errors ? (
        <div className="w-100 error-message">{errors}</div>
      ) : null}
      {hint && <Form.Text muted>{hint}</Form.Text>}
    </>
  );
};

InputUiElement.defaultProps = {
  type: "text",
  className: "",
  autoComplete: "off",
};

InputUiElement.propTypes = {
  ...inputsProps,
  autoComplete: PropTypes.string,
  controlId: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["text", "password", "email", "number"]).isRequired,
  value: PropTypes.string,
};

export const InputIconUiElement = ({
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
  hint,
  styleInput,
  classIconGroup,
  ...props
}) => {
  return (
    <>
      <InputGroup style={style}>
        <InputGroup.Prepend className="w-100">
          {label && <Form.Label>{label}</Form.Label>}
          <Form.Control
            type={type}
            placeholder={placeholder}
            name={name}
            className={className}
            size={size}
            onChange={onChange}
            onBlur={onBlur}
            autoComplete={autoComplete}
            defaultValue={value}
            {...props}
          />
          <InputGroup.Text className={classIconGroup}>{icon}</InputGroup.Text>
        </InputGroup.Prepend>
      </InputGroup>
      {touched && errors ? (
        <div className="w-100 error-message">{errors}</div>
      ) : null}
      {hint && <Form.Text muted>{hint}</Form.Text>}
    </>
  );
};

InputIconUiElement.defaultProps = {
  type: "text",
  className: "",
  autoComplete: "off",
};

InputIconUiElement.propTypes = {
  ...inputsProps,
  autoComplete: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["text", "password", "email", "number"]).isRequired,
  value: PropTypes.string,
  icon:PropTypes.element
};