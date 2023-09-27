import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import './Pizzaday.css'
// import Home from './Home'

export default function Pizzaday() {
  return (
    <>
      <Container className='pizzaday-con' >
        {/* About hotel  */}
        <Row style={{ textAlign: "center" }}>
          <Col>
            <h1 style={{ fontSize: "3vw" }}>Pizza Cafe Day</h1>
            <p>Pizza Fast Food</p>
            <p> <Button variant="success">3.5{ ' ' }<i className="fa-regular fa-star"></i></Button>&nbsp;30.6k ratings</p>
            <p><span style={{fontSize:"1.5vw", backgroundColor:"rgb(221, 216, 216)"}}>25-30 min 1 Km Nirla Nagar</span></p>
          </Col>
        </Row>
        {/* item  */}
        <Row className="row g-0 pizzadaycard">
          <Col>
            <img src="img/gallery/onion.jpeg" className="img-fluid rounded-start" style={{height:"400px",}} alt="..." />
          </Col>
          <Col>
            <p><Button style={{ marginLeft: "40px", marginTop: '20px' }} variant="warning">Bestseller</Button>
            <Button style={{ marginLeft: "400px", marginTop: '20px' }} variant="light">+Add item</Button>
            </p>
            <h1 className='pizza1'>Double Cheese Onion Pizza</h1>
            <h3 className='star'>
              <i className="fa-solid fa-star starcolor" ></i>
              <i className="fa-solid fa-star starcolor" ></i>
              <i className="fa-solid fa-star starcolor" ></i>
              <i className="fa-solid fa-star starcolor" ></i>
              <i className="fa-regular fa-star"></i>{ ' ' }<span style={{fontSize:"15px"}}>500+ rating</span>
            </h3>
            <h3 style={{textAlign:"center", color:"green"}}>₹115</h3>
            <h4 style={{marginLeft:"40px"}}>Quantity</h4>
            <p style={{paddingTop:"30px",textAlign:"center"}}>
            <Button variant="outline-success" style={{height:"70px"}}>Regular [7 inc]</Button>{' '}
            <Button variant="outline-success" style={{height:"70px"}}>Medium [9 inc]</Button>{' '}
            <Button variant="outline-success" style={{height:"70px"}}>Large [13 inc]</Button>
            </p>
          </Col>
        </Row>
        {/* item2  */}
        <Row className="row g-0 pizzadaycard mt-5">
          <Col>
            <p>
            <Button style={{ marginLeft: "40px", marginTop: '20px' }} variant="light">+Add item</Button>
            <Button style={{ marginLeft: "400px", marginTop: '20px' }} variant="warning">Bestseller</Button>
            
            </p>
            <h1 className='pizza1'>Double Cheese Onion Pizza</h1>
            <h3 className='star'>
              <i className="fa-solid fa-star starcolor" ></i>
              <i className="fa-solid fa-star starcolor" ></i>
              <i className="fa-solid fa-star starcolor" ></i>
              <i className="fa-solid fa-star starcolor" ></i>
              <i className="fa-regular fa-star"></i>{ ' ' }<span style={{fontSize:"15px"}}>500+ rating</span>
            </h3>
            <h3 style={{textAlign:"center", color:"green"}}>₹115</h3>
            <h4 style={{marginLeft:"40px"}}>Quantity</h4>
            <p style={{paddingTop:"30px",textAlign:"center"}}>
            <Button variant="outline-success" style={{height:"70px"}}>Regular [7 inc]</Button>{' '}
            <Button variant="outline-success" style={{height:"70px"}}>Medium [9 inc]</Button>{' '}
            <Button variant="outline-success" style={{height:"70px"}}>Large [13 inc]</Button>
            </p>
          </Col>
          <Col>
            <img src="img/gallery/onion.jpeg" className="img-fluid rounded-start" style={{height:"400px",}} alt="..." />
          </Col>
        </Row>
        {/* item3 */}
        <Row className="row g-0 pizzadaycard mt-5">
          <Col>
            <img src="img/gallery/onion.jpeg" className="img-fluid rounded-start" style={{height:"400px",}} alt="..." />
          </Col>
          <Col>
            <p><Button style={{ marginLeft: "40px", marginTop: '20px' }} variant="warning">Bestseller</Button>
            <Button style={{ marginLeft: "400px", marginTop: '20px' }} variant="light">+Add item</Button>
            </p>
            <h1 className='pizza1'>Double Cheese Onion Pizza</h1>
            <h3 className='star'>
              <i className="fa-solid fa-star starcolor" ></i>
              <i className="fa-solid fa-star starcolor" ></i>
              <i className="fa-solid fa-star starcolor" ></i>
              <i className="fa-solid fa-star starcolor" ></i>
              <i className="fa-regular fa-star"></i>{ ' ' }<span style={{fontSize:"15px"}}>500+ rating</span>
            </h3>
            <h3 style={{textAlign:"center", color:"green"}}>₹115</h3>
            <h4 style={{marginLeft:"40px"}}>Quantity</h4>
            <p style={{paddingTop:"30px",textAlign:"center"}}>
            <Button variant="outline-success" style={{height:"70px"}}>Regular [7 inc]</Button>{' '}
            <Button variant="outline-success" style={{height:"70px"}}>Medium [9 inc]</Button>{' '}
            <Button variant="outline-success" style={{height:"70px"}}>Large [13 inc]</Button>
            </p>
          </Col>
        </Row>
      </Container>

    </>
  )
}
