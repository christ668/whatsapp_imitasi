import React from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  RouteComponentProps,
} from "react-router-dom";
import "./App.css";
import AnimatedSwitch from "./components/AnimatedSwitch";
import ChatsListScreen from "./components/ChatListScreen";
import ChatRoomScreen from "./components/ChatRoomScreen";
import { useCacheService } from "./services/cache.service";

// function App() {
//   return (
//     // <div>
//     //   <ChatListScreen />
//     // </div>
//     <BrowserRouter>
//       <AnimatedSwitch>
//         <Route exact path="/chats" component={ChatsListScreen} />
//         <Route
//           exact
//           path="/chats/:chatId"
//           component={({
//             match,
//             history,
//           }: RouteComponentProps<{ chatId: string }>) => (
//             <ChatRoomScreen chatId={match.params.chatId} history={history} />
//           )}
//         />
//       </AnimatedSwitch>
//       <Redirect from="/" to="chats" />
//       {/* <Route exact path="/" render={redirectToChats} /> */}
//     </BrowserRouter>
//   );
// }

const App: React.FC = () => {
  useCacheService();

  return (
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
      <Route exact path="/" render={redirectToChats} />
    </BrowserRouter>
  );
};

const redirectToChats = () => <Redirect to="/chats" />;

export default App;
