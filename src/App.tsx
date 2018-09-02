import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import { createAction } from "redux-act";

interface Iresurse {
  name: string;
  price: number;
}
interface Iresurses extends Array<Iresurse> {}

const resurses: Iresurses = [
  { name: "холодная вода", price: 1 },
  { name: "горячая вода", price: 2 },
  { name: "газ", price: 3 },
  { name: "электричество", price: 4 }
];

class App extends React.Component {
  public componentDidMount() {
    const add = () => createAction("add some stuff");
  }

  public render() {
    return (
      <Container>
        <Row>
          <Col md="4">
            <ListGroup>
              {resurses.map(resurse => (
                <ListGroupItem key={resurse.name}>{resurse.name}</ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
