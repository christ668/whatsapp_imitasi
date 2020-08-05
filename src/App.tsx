import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Route,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";
import ChatRoomScreen from "./components/ChatRoomScreen";
import ChatsListScreen from "./components/ChatListScreen";
import AnimatedSwitch from "./components/AnimatedSwitch";

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
          component={({
            match,
            history,
          }: RouteComponentProps<{ chatId: string }>) => (
            <ChatRoomScreen chatId={match.params.chatId} history={history} />
          )}
        />
      </AnimatedSwitch>
      {/* <Route exact path="/" render={redirectToChats} /> */}
    </BrowserRouter>
  );
}

export default App;
