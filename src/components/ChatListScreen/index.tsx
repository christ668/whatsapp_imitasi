import React from "react";
import NavBar from "./NavBar";
import ChatsList from "./ChatList";
import styled from "styled-components";
import { History } from "history";

const Container = styled.div`
  height: 100vh;
`;

interface ChatsListScreenProps {
  history: History;
}

const ChatsListScreen: React.FC<ChatsListScreenProps> = ({ history }) => (
  <Container>
    <NavBar history={history} />
    <ChatsList history={history} />
  </Container>
);

export default ChatsListScreen;
