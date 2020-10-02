import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
//Custom select
import Select from "react-select";
import makeAnimated from "react-select/animated";

export const SelectUiElement = ({
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
  controlId: PropTypes.string,
  option: PropTypes.array.isRequired,
  defaultFirstOption: PropTypes.string,
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
};

export const DynamicSelect = ({
  name,
  classNames,
  closeMenuOnSelect,
  id,
  instanceId,
  placeholder,
  options,
  loading,
  isMulti
}) => {
  const animatedComponents = makeAnimated();
  return (
    <Select
      name={name}
      className={classNames}
      closeMenuOnSelect={closeMenuOnSelect}
      components={animatedComponents}
      id={id}
      isMulti={isMulti}
      instanceId={instanceId}
      placeholder={placeholder}
      isLoading={loading} 
      options={options}/>
  );
};
