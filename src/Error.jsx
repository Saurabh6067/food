import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

export default function Error() {
  return (
    <>
    <Container fluid>
        <Row className='error-row'>
            <Col className='text-center' style={{marginTop:"200px"}}>
            <h1>Page Not Found</h1>
            </Col>
        </Row>
    </Container>
    
    </>
  )
}
