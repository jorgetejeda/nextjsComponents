import { Container, Form } from "react-bootstrap";
import { InputUiElement } from "../components/Ui-Element/Input-Ui-Element";
import TableUiElement from "../components/Ui-Element/Table_Ui-Element";
import ValidateForm from "../components/Widget/ValidateFrom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
const STATUS = {
  ACTIVE: "active",
  PENDING: "pending",
};


const onSubmit = (values, setSubmitting, resetForm) => {
  setSubmitting(true);
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    resetForm();
    setSubmitting(false);
  }, 500);
  setSubmitting(false);
};

const Index = () => (
  <Container>
    <h1>Thank you, next</h1>
    <ValidateForm
      initialValues={{ email: "" }}
      validationSchema={["email"]}
      onSubmit={(values, { setSubmitting, resetForm }) =>
        onSubmit(values, setSubmitting, resetForm)
      }
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <Form onSubmit={handleSubmit}>
          <InputUiElement  placeholder="Digite su correo"
              className="border-bottom mt-5"
              size="md"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              values={values.email}
              touched={touched.email}
              errors={errors.email}
              autoComplete="on"
              icon={<FontAwesomeIcon icon={faEnvelope} className="fontIcon" />}/>
        </Form>
      )}
    </ValidateForm>
    <TableUiElement
      headers={["NAME", "LASTNAME", "PHONE", "STATUS"]}
      data={[
        {
          name: "Jorge de Jesus",
          lastName: "Tejeda",
          phone: "888 888 8888",
          estatus: "Active",
        },
        {
          name: "Eve",
          lastName: "Adames",
          phone: "888 888 8888",
          estatus: "Pending",
        },
        {
          name: "Carlos",
          lastName: "Smith Damm",
          phone: "888 888 8888",
          estatus: "Pending",
        },
      ]}
      recordPerView={1}
      cellClassConditions={{
        columnName: "STATUS",
        onLoad: (value) =>
          STATUS.ACTIVE === value.toLowerCase()
            ? "active-status"
            : "pending-status",
      }}
    />
  </Container>
);

export default Index;
