import React from "react";
import { Button, Card, Row } from "react-bootstrap";

export default function Notes() {
  //to include handle on click function
  return (
    <>
      <Card>
        <Card.Body className="w-100">
          <h2 className="text-center">Please select type of notes:</h2>
          <Row className="justify-content-center">
            <Button className="w-50 text-center">Pages</Button>

            <Button className="w-50 text-center">Flashcards</Button>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}
