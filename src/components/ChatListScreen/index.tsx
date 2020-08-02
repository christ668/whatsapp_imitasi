import React from 'react';
import NavBar from './NavBar';
import ChatsList from './ChatList';

const ChatsListScreen: React.FC = () => (
  <div>
    <NavBar />
    <ChatsList />
  </div>
);

export default ChatsListScreen;
