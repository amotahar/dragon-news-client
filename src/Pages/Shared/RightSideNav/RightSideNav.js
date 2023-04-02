import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaTwitch } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';



const RightSideNav = () => {

    const {providerLogin} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
       providerLogin(googleProvider)
       .then( result=>{
          const user = result.user;
          console.log(user);
       })
        .catch((error) => {
            console.error(error);
        })
    }
    return (
        <div>
                <ButtonGroup vertical>
                        <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle/> Login with Google </Button>
                        <Button  variant="outline-dark"><FaGithub/> Login with GitHub</Button>
                </ButtonGroup>
                <div>
                    <h4>Find us on</h4>
                    <ListGroup>
                        <ListGroup.Item className='mb-2'><FaFacebook/>  Facebook</ListGroup.Item>
                        <ListGroup.Item className='mb-2'><FaWhatsapp/>  Whatsapp</ListGroup.Item>
                        <ListGroup.Item className='mb-2'><FaTwitter/>  Twitter</ListGroup.Item>
                        <ListGroup.Item className='mb-2'><FaTwitch/>  Twitch</ListGroup.Item>
                        <ListGroup.Item className='mb-2'>   Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </div>

                <div>
                      <BrandCarousel></BrandCarousel>
                </div>

                
        </div>
    );
};

export default RightSideNav;