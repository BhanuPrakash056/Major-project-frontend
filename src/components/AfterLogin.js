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
    <Card.Img variant="top" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.syngenta-us.com%2Fthrive%2Fresearch%2Ffuture-of-farming.html&psig=AOvVaw0QaPUIKc5jN-Tqpr7kwFWg&ust=1681380232712000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNC9ys2LpP4CFQAAAAAdAAAAABAE" />
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
    <Card.Img variant="top" src="holder.js/100px160" />
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
    <Card.Img variant="top" src="holder.js/100px160" />
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
    <Card.Img variant="top" src="holder.js/100px160" />
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