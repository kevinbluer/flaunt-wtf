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
  return (
      <Navbar
        active={true}
        transparent={true}
        style={{background: "none"}}
      >
        <Navbar.Brand>
          <Navbar.Item renderAs="span">
            <Link to="/">
              <img src={troll} alt="Flaunt" />
            </Link>
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Container>
            <Navbar.Item renderAs="span">
              <StyledLink to="/">
                Home
              </StyledLink>
            </Navbar.Item>
            <Navbar.Item renderAs="span" position="end">
              <StyledLink to="/gallery">
                Gallery
              </StyledLink>
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
  );
};

export default Navigation;