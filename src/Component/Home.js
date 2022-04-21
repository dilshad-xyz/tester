import React from 'react'
import {CardGroup, Card} from 'react-bootstrap';
import hero_image from './Images/hero_image.svg';
import home6_icon1 from './Images/home6_icon1.png';

export default function Home() {
  return (
    <>
    <div className='home'>
     <img src={hero_image} width="100%" height='100%'></img>
     <div className='content-center'>
       <h1>Software Development Consulting for  </h1>
       <p>InvoZone offers software development consulting services for businesses, startups, and
          enterprises. Partner with a reliable software development company to scale up your
           engineering capacity.</p>
           <button className='btn btn-primary'>More Details</button>
     </div>
    </div>
       <div className='Container'>
        <CardGroup>
      <Card>
        <Card.Img variant="top" src={home6_icon1}  height="200px"  />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card className='card-center'>
        <Card.Img variant="top" src={home6_icon1} height="200px" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to additional
            content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={home6_icon1} height="200px" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This card has even longer content than the first to
            show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
 </>
  )
}
