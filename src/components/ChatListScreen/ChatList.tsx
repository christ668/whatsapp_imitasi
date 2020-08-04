import { List, ListItem } from '@material-ui/core';
import moment from 'moment';
import React from 'react';
import styled from 'styled-components';
import { chats } from '../../db';

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
const ChatsList: React.FC = () => (
  <Container>
    <StyledList>
      {chats.map((chat) => (
        <StyledListItem key={chat.id} button>
          <ChatPicture src={chat.picture} alt="Profile" />
          <ChatInfo>
            <ChatName>{chat.name}</ChatName>
            <MessageContent>{chat?.lastMessage?.content}</MessageContent>
            <MessageDate>{moment(chat?.lastMessage?.createdAt).format('HH:mm:ss')}</MessageDate>
          </ChatInfo>
        </StyledListItem>
      ))}
    </StyledList>
  </Container>
);

export default ChatsList;
