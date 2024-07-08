import React from 'react';
import styled from 'styled-components';
import { Container, Typography, Button } from '@mui/material';
import Map from './Map';

const LandingPageContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #ffffff;
`;

const Header = styled.header`
  padding: 20px;
  background-color: #3f51b5;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const MainContent = styled.div`
  margin: 20px 0;
`;

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <Header>
        <Typography variant="h3" component="h1">
          Welcome to Google Maps Integration
        </Typography>
      </Header>
      <MainContent>
        <Typography variant="h5" component="h2" gutterBottom>
          Explore the world with Google Maps
        </Typography>
        <Button variant="contained" color="primary" href="#map">
          View Map
        </Button>
      </MainContent>
      <Map />
    </LandingPageContainer>
  );
};

export default LandingPage;