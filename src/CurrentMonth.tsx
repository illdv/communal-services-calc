import * as React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
interface IProps {
  currentMonth: null[];
}

class CurrentMonth extends React.Component<IProps> {
  public state = {
    value: ""
  };

  public render() {
    console.log(this.state.value);

    return (
      <>
        <h4>Текущий месяц </h4>
        <ListGroup>
          {this.props.currentMonth.map((resource, index) => (
            <ListGroupItem key={index}>
              <input onChange={this.inputValue()} value={this.state.value} />
            </ListGroupItem>
          ))}
        </ListGroup>
      </>
    );
  }

  public inputValue = () => (e: any) => {
    return this.setState(({ value }: any) => {
      return {
        value: value ? e.target.value : this.state.value
      };
    });
  };
}

export default CurrentMonth;
