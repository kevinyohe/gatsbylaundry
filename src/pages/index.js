import * as React from "react"
import Nav from "../components/Nav"
import logo from "../images/logo.jpg";
import {useState} from 'react';
import * as ipaddress from "ip-address";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
  listStyleType: "none",
}
const listItemStyles = {
  marginBottom: 12,
  fontWeight: "300",
  letterSpacing: 1,
}
const linkStyles = {
  color: "#8954A8",
}


// markup
const doit = (address) =>{
  console.log(address.bigInteger())
}

const IndexPage = () => {
  const  [number, setnumber] = useState(111);
  const address = new ipaddress.Address4('192.168.1.0/24');
  //address.big()
  return (
  <>
  <Nav></Nav>
  <img src={logo} alt="Logo" />
  <button onClick={()=> setnumber(number+1)}>Clicky</button>
  <h3>{number}</h3>
  <button onClick={() => doit(address)}>{address.address}</button>
  </>
  )
}

export default IndexPage
