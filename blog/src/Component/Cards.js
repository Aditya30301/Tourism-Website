import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./Components.css";
class Cards extends Component {
  state = {};
  render() {
    return (
      <div className="Cards">
        <Card>
          <Card.Img
            variant="top"
            src="https://www.nativeplanet.com/img/2018/08/andamannicobar-1535112781.jpg"
          />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Cards;
