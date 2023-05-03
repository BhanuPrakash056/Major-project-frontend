import React from 'react'
import { useState } from "react";
import QuoraBox from './QuoraBox'
import "./css/Feed.css"
import Post from './Post'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function Community() {
  const [data, setData] = useState(null);
  const sendQuestion = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:3000/api/viewQuestion');
      setData(response.data);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };
  return (
      <>
      <Form>
      <h1>Community</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Enter the Question</Form.Label>
      <Form.Control type="text" placeholder="Enter The Question" />
      <Form.Text className="text-muted">
      </Form.Text>
      </Form.Group>
      
    <Button variant="primary" type="submit" onClick={sendQuestion}>
      Add
    </Button>
  </Form>
  {data && (
    <ul>
      {data.map((question) => (
        <li key={question._id}>{question.questionName}</li>
      ))}
    </ul>
  )}
      
      </>
  )
}

export default Community