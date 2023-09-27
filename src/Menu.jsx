import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './App.css';

export default function Menu() {
  return (
    <div>
      <Navbar expand="lg" className=" mainnav possition=" fixed='top'>
        <Container>
          <img style={{ height: "60px" }} src="img/gallery/tree.png" alt="" />
          <h1 className='food'>FoODdy</h1>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ height: "6vw" }}>
              <Link className='link' to="/home" >Home</Link>
              <Link className='link' to="/about" >Order</Link>
              <Link className='link' to="/contact" >Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="dropdown">
          <img src="img/gallery/my.jpeg" alt="" style={{borderRadius:"50%"}} width="60" height="50"/>
            <div className="dropdown-content">
              <Link to="/login" className='admintxt' ><div className="desc">Login</div></Link>
              <Link to="/forget" className='admintxt' ><div className="desc">Forget</div></Link>
              <Link to="/Reset" className='admintxt' ><div className="desc">Reset</div></Link>
              <Link to="/Notification" className='admintxt' ><div className="desc">Notifiction</div></Link>
            </div>
        </div>
      </Navbar>
    </div>
  )
}
