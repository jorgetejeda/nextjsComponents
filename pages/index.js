import {Container} from 'react-bootstrap';
import TableUiElement from "../components/Ui-Element/Table_Ui-Element";
const STATUS = {
  ACTIVE:"active",
  PENDING:"pending"
}
const Index = () => (
  <Container>
    <h1>Thank you, next</h1>
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
