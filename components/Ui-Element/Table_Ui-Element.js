import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Pagination } from "react-bootstrap";

class TableUiElement extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    headers: this.props.headers,
    data: this.props.data,
    cellClassConditions: this.props.cellClassConditions,
    countRowView: this.props.countRowView,
    pagination: <></>,
  };

  renderHeader = () =>
    this.state.headers.map((header, index) => <th key={index}>{header}</th>);

  renderData = () => {
    return this.state.data.map((obj, index) => (
      <tr key={index}>
        {Object.values(obj).map((value, index) => (
          <td className={this.addClassCondition(index, value)} key={index}>
            {value}
          </td>
        ))}
      </tr>
    ));
  };

  addClassCondition = (index, val) => {
    const { headers, cellClassConditions } = this.state;
    return headers[index].toLowerCase() ===
      cellClassConditions.columnName.toLowerCase()
      ? cellClassConditions.onLoad(val)
      : "";
  };

  addPagination = () => {
    let count = this.state.data.length / this.state.countRowView;
    if (count <= 1) return;
    let page = [];
    for (let index = 0; index < count; index++) {
      page.push(
        <Pagination.Item key={index} className="mx-1">
          {index + 1}
        </Pagination.Item>
      );
    }
    return (
      <Pagination className="justify-content-center">
        <Pagination.First />
        {page}
        <Pagination.Last disabled />
      </Pagination>
    );
  };

  componentDidMount() {
    if (this.state.countRowView)
      this.setState({ pagination: this.addPagination() });
    else null;
  }

  render() {
    return (
      <React.Fragment>
        <Table responsive hover>
          <thead>
            <tr>{this.renderHeader()}</tr>
          </thead>
          <tbody>{this.renderData()}</tbody>
        </Table>
        {this.state.pagination}
      </React.Fragment>
    );
  }
}

export default TableUiElement;
