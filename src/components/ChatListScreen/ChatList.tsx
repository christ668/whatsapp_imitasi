import { List, ListItem } from "@material-ui/core";
import moment from "moment";
import React from "react";
import styled from "styled-components";
//import { useCallback, useState, useMemo } from "react";
import { useCallback } from "react";
import { History } from "history";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

//container awal
const Container = styled.div`
  height: 100%;
  overflow-y: overlay;
`;

//bwt list
const StyledList = styled(List)`
  padding: 1;
`;

//bwt list item
const StyledListItem = styled(ListItem)`
  height: 76px;
  padding: 0 15px;
  display: flex;
`;

//gambar profile
const ChatPicture = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

//buat div biar content di dalemnya ke bwh
const ChatInfo = styled.div`
  width: 100%;
  height: 46px;
  padding: 15px 0;
  margin-left: 10px;
  border-bottom: 0.5px solid silver;
  position: relative;
`;

//atur margin nama dan component berikutnya
const ChatName = styled.div`
  margin-top: 2px;
  color: var(--primary-text);
`;

const MessageContent = styled.div`
  color: gray;
  font-size: 15px;
  margin-top: 5px;
`;

const MessageDate = styled.div`
  position: absolute;
  color: gray;
  top: 20px;
  right: 0;
  font-size: 13px;
`;

/* list error
 - jika ada kemungkinan undefined , typescript akan munculkan error -> solusi harus dilakukan check dan menampilkan yang pasti ada nilainya
 - JSX tidak bisa return value lebih dari 1 root dalam 1 file tsx -> solusi pake <React.Fragment>
 - error karena format createAT tidak dikenali, mungkin karena data tidak sesuai dengan format db, coba konfirm -> solusi sementara menggunakan lib
   moment untuk extract time saja.
*/

//const getChatsQuery = `
const getChatsQuery = gql`
  query GetChats {
    chats {
      id
      name
      picture
      lastMessage {
        id
        content
        createdAt
      }
    }
  }
`;

interface ChatsListProps {
  history: History;
}

const ChatsList: React.FC<ChatsListProps> = ({ history }) => {
  // const [chats, setChats] = useState<any[]>([]);

  //  useMemo(async () => {
  //   //const body = await fetch(`${process.env.SERVER_DUMMY}/chats`);
  //   //ChatList.tsxconst body = await fetch(`http://localhost:4000/chats`);
  //   //const chats = await body.json();

  //   const body = await fetch(`http://localhost:4000/graphql`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ query: getChatsQuery }),
  //   });
  //   const {
  //     data: { chats },
  //   } = await body.json();
  //   setChats(chats);
  // }, []);

  const { data } = useQuery<any>(getChatsQuery);

  const navToChat = useCallback(
    (chat) => {
      history.push(`chats/${chat.id}`);
    },
    [history]
  );

  if (data === undefined || data.chats === undefined) {
    return null;
  }
  let chats = data.chats;

  return (
    <Container>
      <StyledList>
        {chats.map((chat: any) => (
          <StyledListItem
            key={chat.id}
            data-testid="chat"
            button
            onClick={navToChat.bind(null, chat)}
          >
            <ChatPicture src={chat.picture} alt="Profile" />
            <ChatInfo>
              <ChatName>{chat.name}</ChatName>
              <MessageContent>{chat?.lastMessage?.content}</MessageContent>
              <MessageDate>
                {moment(chat?.lastMessage?.createdAt).format("HH:mm:ss")}
              </MessageDate>
            </ChatInfo>
          </StyledListItem>
        ))}
      </StyledList>
    </Container>
  );
};

export default ChatsList;
