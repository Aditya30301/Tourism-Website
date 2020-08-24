import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./Components.css";
class ContactUs extends Component {
  state = {};
  render() {
    return (
      <>
        <div class="ContactUs">
          <div className="ContactUsHeading">
            <h1>Contact Us</h1>
            <hr />
            <br />
          </div>
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Name</Form.Label>
              <Form.Control as="textarea" rows="1" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control as="textarea" rows="1" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Package</Form.Label>
              <Form.Control as="select">
                <option>Honey Moon</option>
                <option>Family</option>
                <option>Full</option>
                <option>Spa n Relax</option>
                <option>Immersive</option>
                <option>Coustomized</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>Number of People </Form.Label>
              <Form.Control as="select" multiple>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>More than 10</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Queries</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Button variant="info" type="submit" size="lg" block>
              Submit
            </Button>
          </Form>
          <br />
          <hr />
        </div>
      </>
    );
  }
}

export default ContactUs;
