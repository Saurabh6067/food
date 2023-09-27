import React from 'react'
import { Col, Container,Row,Button } from 'react-bootstrap'
import './Pizzaday.css'

export default function Burgerking() {
  return (
    <>
    <Container   style={{marginTop:"150px"}}>
        {/* About hotel  */}
        <Row className='burgerrow'>
        <Row style={{ textAlign: "center" }}>
          <Col>
            <h1 style={{ fontSize: "3vw" }}>Burgerking</h1>
            <p>Burger Fast Food Beveages</p>
            <p> <Button variant="success">4.5{ ' ' }<i className="fa-regular fa-star"></i></Button>&nbsp;30.6k ratings</p>
            <p><span style={{fontSize:"1.5vw", backgroundColor:"rgb(221, 216, 216)"}}>25-30 min 10 Km Lucknow</span></p>
          </Col>
        </Row>
        </Row>
        {/* About item  */}
        
        <Row className="row g-0 pizzadaycard">
          <Col>
            <img src="img/gallery/burger2.jpg" className="img-fluid rounded-start" style={{height:"400px",}} alt="..." />
          </Col>
          <Col>
            <p><Button style={{ marginLeft: "40px", marginTop: '20px' }} variant="warning">Bestseller</Button>
            <Button style={{ marginLeft: "400px", marginTop: '20px' }} variant="light">+Add item</Button>
            </p>
            <h1 className='pizza1'>Cheese Burger</h1>
            <h3 className='star'>
              <i className="fa-solid fa-star starcolor" ></i>
              <i className="fa-solid fa-star starcolor" ></i>
              <i className="fa-solid fa-star starcolor" ></i>
              <i className="fa-solid fa-star starcolor" ></i>
              <i className="fa-regular fa-star"></i>{ ' ' }<span style={{fontSize:"15px"}}>500+ rating</span>
            </h3>
            <h3 style={{textAlign:"center", color:"green"}}><del className='text-danger'>200</del>  ₹115</h3>
            <h4 style={{marginLeft:"40px"}}>Quantity</h4>
            <p style={{paddingTop:"30px",textAlign:"center"}}>
            <Button variant="outline-success" style={{height:"70px",width:"150px"}}>Crispy Veg</Button>{' '}
            <Button variant="outline-success" style={{height:"70px " ,width:"150px"}}>Allu Tikki</Button>{' '}
            <Button variant="outline-success" style={{height:"70px",width:"150px"}}>Extra Cheese</Button>
            <i style={{fontSize:"3vw",color:"red", float:"right", marginRight:"20px" ,marginTop:"20px"}} className="fa-regular fa-heart"></i>
            </p>
          </Col>
        </Row>
        <Row className="row g-0 pizzadaycard mt-3">
          <Col>
            <img src="img/gallery/burger2.jpg" className="img-fluid rounded-start" style={{height:"400px",}} alt="..." />
          </Col>
          <Col>
            <p><Button style={{ marginLeft: "40px", marginTop: '20px' }} variant="warning">Bestseller</Button>
            <Button style={{ marginLeft: "400px", marginTop: '20px' }} variant="light">+Add item</Button>
            </p>
            <h1 className='pizza1'>Cheese Burger</h1>
            <h3 className='star'>
              <i className="fa-solid fa-star starcolor" ></i>
              <i className="fa-solid fa-star starcolor" ></i>
              <i className="fa-solid fa-star starcolor" ></i>
              <i className="fa-solid fa-star starcolor" ></i>
              <i className="fa-regular fa-star"></i>{ ' ' }<span style={{fontSize:"15px"}}>500+ rating</span>
            </h3>
            <h3 style={{textAlign:"center", color:"green"}}><del className='text-danger'>200</del>  ₹115</h3>
            <h4 style={{marginLeft:"40px"}}>Quantity</h4>
            <p style={{paddingTop:"30px",textAlign:"center"}}>
            <Button variant="outline-success" style={{height:"70px",width:"150px"}}>Crispy Veg</Button>{' '}
            <Button variant="outline-success" style={{height:"70px " ,width:"150px"}}>Allu Tikki</Button>{' '}
            <Button variant="outline-success" style={{height:"70px",width:"150px"}}>Extra Cheese</Button>
            <i style={{fontSize:"3vw",color:"red", float:"right", marginRight:"20px" ,marginTop:"20px"}} className="fa-regular fa-heart"></i>
            </p>
          </Col>
        </Row>
        <Row className="row g-0 pizzadaycard mt-3">
          <Col>
            <img src="img/gallery/burger2.jpg" className="img-fluid rounded-start" style={{height:"400px",}} alt="..." />
          </Col>
          <Col>
            <p><Button style={{ marginLeft: "40px", marginTop: '20px' }} variant="warning">Bestseller</Button>
            <Button style={{ marginLeft: "400px", }} variant="light">+Add item</Button>
            </p>
            <h1 className='pizza1'>Cheese Burger</h1>
            <h3 className='star'>
              <i className="fa-solid fa-star starcolor" ></i>
              <i className="fa-solid fa-star starcolor" ></i>
              <i className="fa-solid fa-star starcolor" ></i>
              <i className="fa-solid fa-star starcolor" ></i>
              <i className="fa-regular fa-star"></i>{ ' ' }<span style={{fontSize:"15px"}}>500+ rating</span>
            </h3>
            <h3 style={{textAlign:"center", color:"green"}}><del className='text-danger'>200</del>  ₹115</h3>
            <h4 style={{marginLeft:"40px"}}>Quantity</h4>
            <p style={{paddingTop:"30px",textAlign:"center"}}>
            <Button variant="outline-success" style={{height:"70px",width:"150px"}}>Crispy Veg</Button>{' '}
            <Button variant="outline-success" style={{height:"70px " ,width:"150px"}}>Allu Tikki</Button>{' '}
            <Button variant="outline-success" style={{height:"70px",width:"150px"}}>Extra Cheese</Button>
            <i style={{fontSize:"3vw",color:"red", float:"right", marginRight:"20px" ,marginTop:"20px"}} className="fa-regular fa-heart"></i>
            </p>
          </Col>
        </Row>
        
    </Container>
    </>
  )
}
