import React from 'react';
import { BrowserRouter, Redirect, Route, RouteComponentProps } from 'react-router-dom';
import './App.css';
import AnimatedSwitch from './components/AnimatedSwitch';
import ChatsListScreen from './components/ChatListScreen';
import ChatRoomScreen from './components/ChatRoomScreen';

function App() {
  return (
    // <div>
    //   <ChatListScreen />
    // </div>
    <BrowserRouter>
      <AnimatedSwitch>
        <Route exact path="/chats" component={ChatsListScreen} />
        <Route
          exact
          path="/chats/:chatId"
          component={({ match, history }: RouteComponentProps<{ chatId: string }>) => (
            <ChatRoomScreen chatId={match.params.chatId} history={history} />
          )}
        />
      </AnimatedSwitch>
      <Redirect from="/" to="chats" />
      {/* <Route exact path="/" render={redirectToChats} /> */}
    </BrowserRouter>
  );
}

export default App;
