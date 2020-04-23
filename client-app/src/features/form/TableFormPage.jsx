import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-final-form";
import { Table } from "semantic-ui-react";

export default class TableFormPage extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  static Page = ({ children }) => children;

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      values: props.initialValues || {},
    };
  }
  next = (values) =>
    this.setState((state) => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values,
    }));

  previous = () =>
    this.setState((state) => ({
      page: Math.max(state.page - 1, 0),
    }));

  /**
   * NOTE: Both validate and handleSubmit switching are implemented
   * here because 🏁 Redux Final Form does not accept changes to those
   * functions once the form has been defined.
   */

  validate = (values) => {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
    ];
    return activePage.props.validate ? activePage.props.validate(values) : {};
  };

  handleSubmit = (values) => {
    const { children, onSubmit } = this.props;
    const { page } = this.state;
    const isLastPage = page === React.Children.count(children) - 1;
    if (isLastPage) {
      return onSubmit(values);
    } else {
      this.next(values);
    }
  };

  renderTableHeader() {
    let header = Object.keys(this.state.values[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  renderTableData() {
    return this.state.values.map((value, index) => {
      const { id, name, age, email } = value; //destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{age}</td>
          <td>{email}</td>
        </tr>
      );
    });
  }

  render() {
    const { children } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;
    return (
      <Table initialValues={values} onSubmit={this.handleSubmit}>
        <div>
          <h1 id="title">React Dynamic Table</h1>
          <table id="values">
            <tbody>
              <tr>{this.renderTableHeader()}</tr>
              {this.renderTableData()}
            </tbody>
          </table>
        </div>
      </Table>
    )}
}

// <Table>
//         <Table.Header>
//           <Table.Row>
//             <Table.HeaderCell>Header</Table.HeaderCell>
//             <Table.HeaderCell>Header</Table.HeaderCell>
//             <Table.HeaderCell>Header</Table.HeaderCell>
//           </Table.Row>
//         </Table.Header>

//         <Table.Body validate={(values) => {
//             const errors = {};
//             if (!values.notes) {
//               errors.notes = "Required";
//             }
//             return errors;
//           }}>
//           <Table.Row>
//             <Table.Cell>
//         <Label ribbon>Email</Label>
//             </Table.Cell>
//             <Table.Cell>{values.email}</Table.Cell>
//             <Table.Cell>Cell</Table.Cell>
//           </Table.Row>
//           <Table.Row>
//             <Table.Cell>Cell</Table.Cell>
//             <Table.Cell>Cell</Table.Cell>
//             <Table.Cell>Cell</Table.Cell>
//           </Table.Row>
//           <Table.Row>
//             <Table.Cell>Cell</Table.Cell>
//             <Table.Cell>Cell</Table.Cell>
//             <Table.Cell>Cell</Table.Cell>
//           </Table.Row>
//         </Table.Body>

//         <Table.Footer>
//           <Table.Row>
//             <Table.HeaderCell colSpan="3">
//               <Menu floated="right" pagination>
//                 <Menu.Item as="a" icon>
//                   <Icon name="chevron left" />
//                 </Menu.Item>
//                 <Menu.Item as="a">1</Menu.Item>
//                 <Menu.Item as="a">2</Menu.Item>
//                 <Menu.Item as="a">3</Menu.Item>
//                 <Menu.Item as="a">4</Menu.Item>
//                 <Menu.Item as="a" icon>
//                   <Icon name="chevron right" />
//                 </Menu.Item>
//               </Menu>
//             </Table.HeaderCell>
//           </Table.Row>
//         </Table.Footer>
//       </Table>
