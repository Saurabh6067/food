import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Footer() {
  return (
    <>
    <Container fluid className='footer-con'>
        {/* <Row className='footer-row'>
            <Col className='footer-col'>
               <h2>COMPANY</h2> 
               <h5>About</h5>
               <h5>Team</h5>
               <h5>Careers</h5>
               <h5>Blog</h5>
            </Col>
            <Col className='footer-col'>
               <h2>CONTACT</h2> 
               <h5>Help & Support</h5>
               <h5>Partner With us</h5>
               <h5>Ride with us</h5>
               <h5>Blog</h5>
            </Col>
            <Col className='footer-col'>
               <h2>COMPANY</h2> 
               <h5>About</h5>
               <h5>Team</h5>
               <h5>Careers</h5>
               <h5>Blog</h5>
            </Col>
            <Col className='footer-col'>
               <h2>COMPANY</h2> 
               <h5>About</h5>
               <h5>Team</h5>
               <h5>Careers</h5>
               <h5>Blog</h5>
            </Col>
            <Col className='footer-col'>
               <h2>Follow Us</h2> 
               <h5><i className="fa-brands fa-facebook fa" ></i>{ ' ' }facebook</h5>
               <h5><i className="fa-brands fa-instagram fa" ></i>{ ' ' }Insta</h5>
               <h5><i className="fa-brands fa-youtube fa" ></i>{ ' ' }Youtube</h5>
               <h5><i className="fa-brands fa-whatsapp fa" ></i>{ ' ' }Whatsapp</h5>
               
            </Col>
        </Row> */}
        <Row>
         <Col className='copy-col'>
         <p className='copyright'><i className="fa-solid fa-heart-pulse" style={{color:'red',fontSize:'2vw'}}></i> { ' ' }  &copy;Copyright act 2023-24 Desingn and develop by Digicoder{ ' ' }<i className="fa-solid fa-heart-pulse" style={{color:'red',fontSize:'2vw'}}></i></p>
         </Col>
        </Row>

    </Container>
    </>
  )
}
