// ryleys
import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    jobs: []
  };

  componentDidMount() {
    this.loadJobs();
  }

  loadJobs = () => {
    API.getJobs()
      .then(res => this.setState({ jobs: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          {/* <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron> */}
            <form>
              <Input name="Company" placeholder="Company (required)" />
              <Input name="Title" placeholder="Title (required)" /> 
              <Input name="Location" placeholder="Location (required)" />
              <Input name="Salary" placeholder="Salary (required)" />
              <TextArea name="Job listing" placeholder=" (Optional)" />
              <FormBtn>Submit job posting</FormBtn>
            </form>
          </Col >
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Jobs On My List</h1>
            </Jumbotron>
            {this.state.jobs.length ? (
              <List>
                {this.state.jobs.map(jobs => (
                  <ListItem key={jobs._id}>
                    <a href={"/jobsView/" + jobs._id}>
                      <strong>
                        {jobs.Company} by {jobs.Title}
                      </strong>
                    </a>
                    <DeleteBtn />
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

export default Jobs;