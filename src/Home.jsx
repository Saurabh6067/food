import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <>
            <Container fluid className='homecon'>
                <Row>
                    <Col>
                        <h1 className='starving'>Are you starving?</h1>
                        <h2 className='findtext'>Within a few clicks, find meals <br /> thatare accessible near you</h2>

                    </Col>
                    <Col>
                        <img className='hero' src="img/gallery/hero-header.png" alt="" />
                    </Col>
                </Row>
            </Container>
            {/* card  */}

            <Container className='mycard'>
                <div className="isCard" style={{ color: "#009688" }}>
                    <div className="ingBx">
                        <img className='burgerphoto' src="img/gallery/burger.jpg" alt="" />
                    </div>
                    <div className="content">
                        <h2>Burger</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, facere.</p>
                        <a href="/">Read More</a>
                    </div>
                </div>
                <div className="isCard" style={{ color: "crimson" }}>
                    <div className="ingBx">
                        <img className='burgerphoto' src="img/gallery/burger.jpg" alt="" />

                    </div>
                    <div className="content">
                        <h2>Burger</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, facere.</p>
                        <a href="/">Read More</a>
                    </div>
                </div>
                <div className="isCard" style={{ color: "green" }}>
                    <div className="ingBx">
                        <img className='burgerphoto' src="img/gallery/burger.jpg" alt="" />

                    </div>
                    <div className="content">
                        <h2>Burger</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, facere.</p>
                        <a href="/">Read More</a>
                    </div>
                </div>
            </Container>

            <Container className='mycard'>
                <div className="isCard" style={{ color: "#009688" }}>
                    <div className="ingBx">
                        <img className='burgerphoto' src="img/gallery/burger.jpg" alt="" />
                    </div>
                    <div className="content">
                        <h2>Burger</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, facere.</p>
                        <a href="/">Read More</a>
                    </div>
                </div>
                <div className="isCard" style={{ color: "crimson" }}>
                    <div className="ingBx">
                        <img className='burgerphoto' src="img/gallery/burger.jpg" alt="" />

                    </div>
                    <div className="content">
                        <h2>Burger</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, facere.</p>
                        <a href="/">Read More</a>
                    </div>
                </div>
                <div className="isCard" style={{ color: "green" }}>
                    <div className="ingBx">
                        <img className='burgerphoto' src="img/gallery/burger.jpg" alt="" />

                    </div>
                    <div className="content">
                        <h2>Burger</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, facere.</p>
                        <a href="/">Read More</a>
                    </div>
                </div>
            </Container>

            {/* working  */}
            <video width="100%" height="400px" autoPlay muted controls loop className='vdo' style={{backgroundImage:"url(img/gallery/vdobg.jpg)"}} >
                <source src="img/gallery/video.mp4" type="video/mp4" />
            </video>

            {/* Order  */}
            <Container fluid className=' mb-5'>
                <Row className='p-order-row'>
                    <Col className='col-sm-12 col-md-12 text-center'>
                        <h1 className='order-text-o'>Are you ready to order <br />
                            with the best deals?</h1>
                        <Button variant="warning" className='mt-5 px-5 py-3'><Link className='text-pizza-day text-dark fs-3' to="/about" >Order Now </Link></Button>
                    </Col>
                </Row>
            </Container>

        </>
    );
}
export default Home;
