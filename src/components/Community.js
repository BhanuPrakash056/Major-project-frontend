import React from "react";
import { useState } from "react";
import "./css/Feed.css";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

function Community() {
  const [data, setData] = useState(null);
  const sendQuestion = async (e) => {
    try {
      e.preventDefault();
      <h1>The question are </h1>;
      const response = await axios.get(
        "http://127.0.0.1:3000/api/viewQuestion"
      );
      setData(response.data.data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  function addQuestion() {
    try {
      axios({
        method: "post",
        url: "http://127.0.0.1:3000/api/addQuestion",
        data: {
          questionName: "panda is beauty",
          questionUrl: "",
          allAnswers: [],
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Form>
        <h1>Community</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter the Question</Form.Label>
          <Form.Control type="text" placeholder="Enter The Question" />
          <Form.Text className="text"></Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e) => addQuestion()}>
          Add Question
        </Button>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => sendQuestion(e)}
        >
          View Question
        </Button>
      </Form>

      {data && (
        <ListGroup as="ul">
          {data.map((question) => (
            <div>
              <ListGroup.Item as="li" key={question._id}>
                {question.questionName}{" "}
                <Button
                  variant="outline-secondary"
                  type="submit"
                  onClick={(e) => sendQuestion(e)}
                >
                  View Answer
                </Button>
              </ListGroup.Item>
            </div>
          ))}
        </ListGroup>
      )}
    </>
  );
}

export default Community;
