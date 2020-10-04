import PropTypes from "prop-types";
import { FormControl, InputGroup } from "react-bootstrap";
import { HintUiElement } from "./Hint_Ui-Element";

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
  limit,
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
      {touched && errors ? <div className="error-message">{errors}</div> : null}
      <HintUiElement hint={hint} limit={limit} value={value} />
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
  limit:PropTypes.number,
  errors: PropTypes.string,
  className: PropTypes.string,
  touched: PropTypes.bool,
  placeholder: PropTypes.string,
  rows: PropTypes.string,
  icon: PropTypes.element,
  defaultFirstOption: PropTypes.string,
};
