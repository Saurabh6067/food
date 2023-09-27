import React from 'react'
import { Col, Container, Row,Card,Button } from 'react-bootstrap'
import './About.css'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <Container className='order-card-con'>
        <Row>
          <Col>
          <h1 style={{textAlign:'center' ,marginBottom:'40px'}}>Items</h1>
          </Col>
        </Row>
        {/* Crad first section  */}
        <Row>
          <Col>
            <Card className='card-shadow'>
            <img width="40" height="40" src="https://img.icons8.com/ios-glyphs/30/40C057/non-vegetarian-food-symbol.png" alt="non-vegetarian-food-symbol"/>
              <Card.Img className='zoom' variant="top" src="img/gallery/burger.jpg" />
              <Card.Body>
                <Card.Title className='text-center' style={{fontSize:"1.3vw",color:"crimson"}}>Burgerking</Card.Title>
                <Card.Text>
                  <p className='Star'>4.0⭐⭐⭐⭐(107)</p>
                </Card.Text>
                <Button variant="outline-success"><Link className='text-pizza-day' to="/burgerking" >Vist this </Link></Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='card-shadow' >
            <img width="40" height="40" src="https://img.icons8.com/ios-glyphs/30/40C057/non-vegetarian-food-symbol.png" alt="non-vegetarian-food-symbol"/>

              <Card.Img variant="top" className='zoom' src="img/gallery/pizza.webp" style={{height:"175px"}} />
              <Card.Body> 
                <Card.Title style={{fontSize:"1.3vw", textAlign:"center" ,color:"crimson"}}>Pizza Cafe Day</Card.Title>
                <Card.Text>
                  <p className='Star'>3.0⭐⭐⭐(97)</p>
                </Card.Text>
                <Button variant="outline-success"><Link className='text-pizza-day' to="/pizzaday" >Vist this </Link></Button>

              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='card-shadow'>
            <img width="40" height="40" src="https://img.icons8.com/ios-glyphs/30/40C057/non-vegetarian-food-symbol.png" alt="non-vegetarian-food-symbol"/>

              {/* <p className='pt-1'><i style={{fontSize:'2vw',marginLeft:'10px'}} className="fa-solid fa-leaf"></i></p> */}

              <Card.Img variant="top" className='zoom' src="img/gallery/dosa.jpg" style={{height:"175px"}} />
              <Card.Body>
                <Card.Title style={{fontSize:"1.3vw",color:"crimson"}}>Dosa</Card.Title>
                <Card.Text>
                  <p className='Star'>3.0⭐⭐⭐(1007+)</p>
                </Card.Text>
                <Button variant="outline-success">Vist This</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='card-shadow minimize'>
            <img width="40" height="40" src="https://img.icons8.com/ios-glyphs/30/40C057/non-vegetarian-food-symbol.png" alt="non-vegetarian-food-symbol"/>
              <Card.Img variant="top" className='zoom' src="img/gallery/noodle.png" style={{height:"175px"}} />
              <Card.Body>
                <Card.Title style={{fontSize:"1.3vw",color:"crimson"}}>Noodle</Card.Title>
                <Card.Text>
                  <p className='Star'>3.0⭐⭐⭐(97)</p>
                </Card.Text>
                <Button variant="outline-success">Vist This</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* card second section  */}
        <Row className='order-card-sec-2'>
          <Col>
            <Card className='card-shadow'>
            <img width="40" height="40"  src="https://img.icons8.com/ios-glyphs/30/40C057/non-vegetarian-food-symbol.png" alt="non-vegetarian-food-symbol"/>
              <Card.Img className='zoom' variant="top" style={{height:"175px"}} src="img/gallery/idli.jpg" />
              <Card.Body>
                <Card.Title style={{fontSize:"1.3vw",color:"crimson"}}>Idli</Card.Title>
                <Card.Text>
                  <p className='Star'>3.0⭐⭐⭐(97)</p>
                </Card.Text>
                <Button variant="outline-success">Vist This</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='card-shadow'>
            <img width="40" height="40" src="https://img.icons8.com/ios-glyphs/30/40C057/non-vegetarian-food-symbol.png" alt="non-vegetarian-food-symbol"/>
              <Card.Img style={{height:"175px"}} className='zoom' variant="top" src="img/gallery/momo.jpg" />
              <Card.Body>
                <Card.Title style={{fontSize:"1.3vw",color:"crimson",}}>Momo</Card.Title>
                <Card.Text>
                  <p className='Star'>4.0⭐⭐⭐⭐(97)</p>
                </Card.Text>
                <Button variant="outline-success">Vist This</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='card-shadow'>
            <img width="40" height="40" src="https://img.icons8.com/ios-glyphs/30/40C057/non-vegetarian-food-symbol.png" alt="non-vegetarian-food-symbol"/>
              <Card.Img variant="top" className='zoom' style={{height:"175px"}} src="img/gallery/french.jpg" />
              <Card.Body>
                <Card.Title style={{fontSize:"1.3vw",color:"crimson"}}>French Fries</Card.Title>
                <Card.Text>
                  <p className='Star'>3.0⭐⭐⭐(907)</p>
                </Card.Text>
                <Button variant="outline-success">Vist This</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='card-shadow'>
              <Card.Img  className='zoom' variant="top" src="img/gallery/samosa.png" />
              <Card.Body>
                <Card.Title style={{fontSize:"1.3vw",color:"black"}}>Samosa</Card.Title>
                <Card.Text>
                  <p className='Star'>3.0⭐⭐⭐(97)</p>
                </Card.Text>
                <Button variant="outline-success">Vist This</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}
