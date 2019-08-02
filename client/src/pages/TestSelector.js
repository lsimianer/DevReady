import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class TestSelector extends Component {
  state = {
    tests: [],
    subject: "",
    // author: "",
    // synopsis: ""
  };

  componentDidMount() {
    this.load();
  }

  loadTests = () => {
    API.getTests()
      .then(res =>
        this.setState({ tests: res.data, subject: ""})
      )
      .catch(err => console.log(err));
  };

  deleteTest = id => {
    API.deleteTest(id)
      .then(res => this.loadTests())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveTest({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadTests())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Available Tests</h1>
            </Jumbotron>
            
          </Col>
          <Col size="col-md">
            <Jumbotron>
              <h1>Tests to take</h1>
            </Jumbotron>
            {this.state.tests.length ? (
              <List>
                {this.state.tests.map(test => (
                  <ListItem key={test._id}>
                    <Link to={"/tests/" + test._id}>
                      <strong>
                        {test.subject}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TestSelector;
