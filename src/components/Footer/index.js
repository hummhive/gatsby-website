import React from 'react';
import Copyright from './Copyright';
import Container from "../../components/container"
import PropTypes from 'prop-types';
import { FooterWrapper } from './styled';

const Footer = () => {
  return (
    <Container>
    <FooterWrapper>
    <Copyright />
    </FooterWrapper>
    </Container>
  );
};

Footer.propTypes = {
  config: PropTypes.object,
};

export default Footer;
