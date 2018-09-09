import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import { connect } from "react-redux";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import { fetchingData } from "./action";

// interface Iresurse {
//   name: string;
//   price: number;
// }
// interface Iresurses extends Array<Iresurse> {}

interface Iprops {
  fetchingData: () => void;
  resourcesName: any;
  resourcesPrice: any;
}

class App extends React.Component<Iprops> {
  public componentDidMount() {
    this.props.fetchingData();
  }

  public render() {
    return (
      <Container>
        <Row>
          <Col md="4">
            <ListGroup>
              {this.props.resourcesName.map((resource: any) => (
                <ListGroupItem key={resource}>{resource}</ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col md="4">
            <ListGroup>
              {this.props.resourcesPrice.map((resource: any) => (
                <ListGroupItem key={resource}>{resource}</ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(
  (state: any) => ({
    resourcesName: state.resources.map((resource: any) => resource.name),
    resourcesPrice: state.resources.map((resource: any) => resource.price)
  }),
  { fetchingData }
)(App);
