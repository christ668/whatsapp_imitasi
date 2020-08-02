import React from 'react';
import { chats } from '../../db';
import moment from 'moment';

/* list error 
 - jika ada kemungkinan undefined , typescript akan munculkan error -> solusi harus dilakukan check dan menampilkan yang pasti ada nilainya
 - JSX tidak bisa return value lebih dari 1 root dalam 1 file tsx -> solusi pake <React.Fragment>
 - error karena format createAT tidak dikenali, mungkin karena data tidak sesuai dengan format db, coba konfirm -> solusi sementara menggunakan lib
   moment untuk extract time saja.
*/
const ChatsList: React.FC = () => (
  <div>
    <ul>
      {chats.map((chat) => (
        <li key={chat.id}>
          <img src={chat.picture} alt="Profile" />
          <div>{chat.name}</div>
          {chat.lastMessage && (
            <React.Fragment>
              <div>{chat.lastMessage.content}</div>
              <div>{moment(chat.lastMessage.createdAt).format('HH:mm:ss')}</div>
            </React.Fragment>
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default ChatsList;
