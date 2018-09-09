import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import { connect } from "react-redux";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import { fetchingData } from "./action";
import CurrentMonth from "./CurrentMonth";
import { Iresurses } from "./types";
interface Iprops {
  fetchingData: () => void;
  resourcesName: string[];
  resourcesPrice: number[];
  prevMonth: number[];
  currentMonth: any;
}

class App extends React.Component<Iprops> {
  public componentDidMount() {
    this.props.fetchingData();
  }

  public render() {
    return (
      <Container>
        <Row>
          <Col md="3">
            <h4>Ресурсы</h4>
            <ListGroup>
              {this.props.resourcesName.map(resource => (
                <ListGroupItem key={resource}>{resource}</ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col md="3">
            <h4>Цена за ед.</h4>
            <ListGroup>
              {this.props.resourcesPrice.map(resource => (
                <ListGroupItem key={resource}>{resource}</ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col md="3">
            <h4>Предыдущий месяц</h4>
            <ListGroup>
              {this.props.prevMonth.map(resource => (
                <ListGroupItem key={resource}>{resource}</ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col md="3">
            <CurrentMonth currentMonth={this.props.currentMonth} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(
  (state: Iresurses) => ({
    resourcesName: state.resources.map(resource => resource.name),
    resourcesPrice: state.resources.map(resource => resource.price),
    prevMonth: state.resources.map(resource => resource.prevMonth),
    currentMonth: state.resources.map(resource => resource.currentMonth)
  }),
  { fetchingData }
)(App);
