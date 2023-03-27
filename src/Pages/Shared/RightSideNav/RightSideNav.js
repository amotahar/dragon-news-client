import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const RightSideNav = () => {
    return (
        <div>
        <ButtonGroup vertical>
            <Button  variant="outline-primary mb-2"><FaGoogle/> Sign in with Google</Button>
            <Button  variant="outline-dark"><FaGithub/> Sign in with GitHub</Button>
      </ButtonGroup>
        </div>
    );
};

export default RightSideNav;