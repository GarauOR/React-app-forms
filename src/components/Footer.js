import React from "react";
import Nav from "react-bootstrap/Nav";

function Footer(props) {
  return (
    <div style={{marginTop:"100px"}}>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="https://github.com/GarauOR">Github</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://www.bbc.co.uk/news">News</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://www.bbc.co.uk/weather">Weather</Nav.Link>
        </Nav.Item>
      </Nav>
      <p style={{color:"lightGrey", textAlign:"center"}}>©Luca Garau</p>
    </div>
  );
}

export default Footer;
