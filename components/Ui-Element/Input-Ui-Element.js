import PropTypes from "prop-types";
import React, { useMemo } from "react";
    
import { Form, InputGroup, FormControl } from "react-bootstrap";
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
  icon,
  hint,
  styleInput,
  classFormGroup,
  classIconGroup,
  ...props
}) => {
  
  const FormGroup = ({ children }) => (
    <Form.Group style={style} controlId={controlId} className={classFormGroup}>{children}</Form.Group>
  );

  const InputIconGroup = ({ children }) => (
    <InputGroup style={style}>
      <InputGroup.Prepend className="w-100">
        {children}
        <InputGroup.Text className={classIconGroup}>{icon}</InputGroup.Text>
      </InputGroup.Prepend>
    </InputGroup>
  );

  //FIXME: Input only work if they dont have an icon
  const Wraper = useMemo( ()=> ({ children }) => {
    return (icon) ? <InputIconGroup children={children} /> : <FormGroup children={children} />;
  },[icon]);

  return (
    <>
      <Wraper>
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
      </Wraper>
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
  style: PropTypes.object,
  controlId: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf(["text", "password", "email", "number"]).isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  autoComplete: PropTypes.string,
  value: PropTypes.string,
  touched: PropTypes.bool,
  errors: PropTypes.string,
  icon: PropTypes.element,
  hint: PropTypes.string,
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
  placeholder,
  size,
  icon,
  style,
  className,
}) => (
  <InputGroup>
    <FormControl className={className}
      placeholder={placeholder}
      as="textarea"
      rows={rows}
      placeholder={placeholder}
      size={size} />
      <InputGroup.Prepend>
        <InputGroup.Text>{icon}</InputGroup.Text>
      </InputGroup.Prepend>
  </InputGroup>
);


export { InputUiElement, SelectUiElement, TextareaIuElement };
