import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Pagination } from "react-bootstrap";
// TODO: Create pagination function
class TableUiElement extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    headers: this.props.headers,
    data: this.props.data,
    cellClassConditions: this.props.cellClassConditions,
    recordPerView: this.props.recordPerView,
    totalRecords: Math.ceil(this.props.data.length / this.props.recordPerView),
    currentPage:1,
    pagination: <></>,
    isEnd: false,
    isStart: true,
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
    let page = [];
    for (let index = 0; index < this.state.totalRecords; index++) {
      page.push(
        <Pagination.Item active={this.state.currentPage == (index+1)} key={index} className="mx-1">
          {index + 1}
        </Pagination.Item>
      );
    }

    return (
      <Pagination className="justify-content-center">
        {(this.state.totalRecords <= 1) ? "" : <Pagination.First disabled={this.state.isStart} />}
        {page}
        {(this.state.totalRecords <= 1) ? "" : <Pagination.Last disabled={this.state.isEnd} />}
      </Pagination>
    );
  };

  componentDidMount() {
    if (this.state.recordPerView)
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
