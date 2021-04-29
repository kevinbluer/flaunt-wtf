import { useState } from "react";

import { Navbar, Section } from 'react-bulma-components';
import styled from 'styled-components';

import troll from "../Assets/troll.png"

import {
  Link
} from "react-router-dom";

const StyledLink = styled(Link)`
  color: #4a4a4a;
`;

const Navigation = () => {
  const [navIsActive, setNavIsActive] = useState(false);

  return (
      <Navbar
        active={navIsActive}
        transparent={true}
        style={{background: "none"}}
      >
        <Navbar.Brand>
          <Navbar.Item renderAs="span">
            <Link to="/">
              <img src={troll} alt="Flaunt" />
            </Link>
          </Navbar.Item>
          <Navbar.Burger onClick={() => setNavIsActive(navIsActive ? false : true) }/>
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container>
            <Navbar.Item renderAs="span">
              <StyledLink to="/">
                home
              </StyledLink>
            </Navbar.Item>
            <Navbar.Item renderAs="span">
              <StyledLink to="/gallery">
                gallery
              </StyledLink>
            </Navbar.Item>
            <Navbar.Item renderAs="span">
              <StyledLink to="/about">
                about
              </StyledLink>
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
  );
};

export default Navigation;