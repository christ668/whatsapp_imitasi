import React from "react";
import { Button, Toolbar } from "@material-ui/core";
import styled from "styled-components";
import SignOutIcon from "@material-ui/icons/PowerSettingsNew";
import { useCallback } from "react";
import { History } from "history";

const Container = styled(Toolbar)`
  display: flex;
  background-color: var(--primary-bg);
  color: var(--primary-text);
  font-size: 20px;
  line-height: 40px;
`;

const Title = styled.div`
  flex: 1;
`;

const LogoutButton = styled(Button)`
  color: var(--primary-text) !important;
`;

interface ChildComponentProps {
  history: History;
}

const Navbar: React.FC<ChildComponentProps> = ({ history }) => {
  const handleSignOut = useCallback(() => {
    history.replace("/sign-in");
  }, [history]);

  return (
    <Container>
      <Title>Whatsapp Clone</Title>
      <LogoutButton data-testid="sign-out-button" onClick={handleSignOut}>
        <SignOutIcon />
      </LogoutButton>
    </Container>
  );
};

export default Navbar;
