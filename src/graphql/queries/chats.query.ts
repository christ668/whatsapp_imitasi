import gql from "graphql-tag";
import * as fragments from "../fragments";

export default gql`
  query Chats {
    chats {
      #   id
      #   name
      #   picture
      #   lastMessage {
      #     id
      #     content
      #     createdAt
      #   }
      ...Chat
    }
  }
  ${fragments.chat}
`;
