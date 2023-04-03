import React, { useContext } from 'react';
import { Image} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link} from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Button from 'react-bootstrap/Button';


const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then(() => {})
    .catch(error => console.error(error))

  }
    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand><Link to='/'>Dragon News</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
    
          </Nav>

          <Nav>
            <Nav href="#">
             {
              user?.uid ?
              <>
              <span> {user?.displayName} </span>
              <Button variant="light" onClick={handleLogOut}>Log out</Button>
              </> 
              :
              <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
              </>
             } 
             </Nav>
            <Link to="/profile">
              { 
                user?.photoURL?
                <Image
                style={{height:"40px"}}
                roundedCircle src={user?.photoURL}
                 ></Image>: 
                 <FaUser></FaUser>
              }
            </Link>
          </Nav>
          <div className='d-lg-none'>
          <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;