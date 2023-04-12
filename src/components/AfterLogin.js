import React from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function AfterLogin() {
  return (
  <>
  <h1>Welcome Abhilash</h1>
  <br/>
  <CardGroup>
  <Card >
    <Card.Img variant="top" src="https://img.freepik.com/free-vector/open-automation-architecture-abstract-concept-illustration_335657-3802.jpg?size=626&ext=jpg" />
    <Card.Body>
      <Card.Title>Prediction </Card.Title>
      <Card.Text>
        Crop Prediction and Fertilizers Prediction are present here
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <a href="#" class="btn btn-primary active" role="button" aria-pressed="true">Click here</a>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://img.freepik.com/free-vector/course-app-concept-illustration_114360-6219.jpg?w=1800&t=st=1681309230~exp=1681309830~hmac=6e6c7c76a34b440b20a8d5734120ebe0b777977398906caaed5dde8092476ed1s" />
    <Card.Body>
      <Card.Title>E-learning</Card.Title>
      <Card.Text>
       All the latest techniques and methods are present here{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <a href="/learning" class="btn btn-primary active" role="button" aria-pressed="true">click here</a>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://img.freepik.com/premium-vector/organic-farm-products-flat-concept-icon-markers-market-stall-sticker-clipart-summer-outdoor-store-with-eco-vegetables-agriculture-farming-isolated-cartoon-illustration-white_151150-1050.jpg?w=1800" />
    <Card.Body>
      <Card.Title>Market Place</Card.Title>
      <Card.Text>
        All the tools required are present here{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <a href="#" class="btn btn-primary active" role="button" aria-pressed="true">click here </a>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/f/f8/01_Icon-Community%402x.png" />
    <Card.Body>
      <Card.Title>Community</Card.Title>
      <Card.Text>
        Share your thoughts, ask Question and give your feedback
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <a href="#" class="btn btn-primary  active" role="button" aria-pressed="true">click here</a>
    </Card.Footer>
  </Card>
</CardGroup>
    </>
  )
}

export default AfterLogin;