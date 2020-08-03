import React from 'react';
import NavBar from './NavBar';
import ChatsList from './ChatList';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
`;

const ChatsListScreen: React.FC = () => (
  <Container>
    <NavBar />
    <ChatsList />
  </Container>
);

export default ChatsListScreen;
