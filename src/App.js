import logo from './logo.svg';
import './App.css';
import Api from './Component/Api';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Component/Home';
import About from './Component/About';
import Services from './Component/Services';
import {Navbar, Nav, Container,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Routes, Route,
   Link,Switch
} from "react-router-dom";

function App() {
 
  
  return (
    <Router>
    <div className="App">
     
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='fixed-top'>
  <Container>
  <Navbar.Brand href="#">Dilshadawebify</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">

      <Nav.Link as={Link} to='/Home'>Home</Nav.Link>
      <Nav.Link as={Link} to='/Api'>All Users</Nav.Link>
      <Nav.Link as={Link} to='/About'>About</Nav.Link>
      <Nav.Link as={Link} to='/Services'>Services</Nav.Link>
    </Nav>
    <Nav>
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"/>
        <Button variant="outline-success">Search</Button>
      </Form>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

    </div>
    <div>

          <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route path="/Api" element={<Api/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services/>} />
          </Routes>
          
    </div>

    </Router>
      );
    }

    export default App;

