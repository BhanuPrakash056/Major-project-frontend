import React from "react";
import { useState } from "react";
import "./css/Feed.css";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

function Community() {
  const [data, setData] = useState(null);
  const [question,setQuestion] = useState("");
  const viewQuestion = async (e) => {
    try {
      e.preventDefault();
      <h1>The question are </h1>;
      const response = await axios.get(
        "http://127.0.0.1:5000/api/viewQuestion"
      );
      setData(response.data.data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const addQuestion = (e) => {
    e.preventDefault();
    if(question){
    axios.post("http://127.0.0.1:5000/api/addQuestion",  {questionName:question} )
    .then((response) => {
      console.log(response.data);
      setQuestion('');
      viewQuestion();
    })
    .catch((error) => {
      console.error(error);
    });
  }
  }
  const handleChange = (e) =>{
    setQuestion(e.target.value);
  }
  return (
    <>
      <Form onSubmit={addQuestion}>
        <h1>Community</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Ask your Questions here</Form.Label>
          <Form.Control type="text" placeholder="Enter The Question" value={question} onChange ={handleChange} />
          <Form.Text className="text" ></Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" className="addQuestion">
          Add Question
        </Button>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => viewQuestion(e)}
        >
          View Questions
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
                  onClick={(e) => viewQuestion(e)}
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