//FIXME: Corregir la posicion del hint y los errores que aparecen en el campo
//Estos deben aparecer uno al lado del otro
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

export const HintUiElement = ({ hint, value, limit }) => {
  
  const [count, setCount] = useState(150);
//   useEffect(() => {
//     setCount(value.length);
//   }, [value]);

  return (
    <Form.Text muted>
      {hint} {count == 0 ? "" : `: ${count}`}
    </Form.Text>
  );
};
