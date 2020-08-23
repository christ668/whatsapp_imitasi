import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  URL: any;
};



export type Message = {
  __typename?: 'Message';
  id: Scalars['ID'];
  content: Scalars['String'];
  createdAt: Scalars['Date'];
  chat?: Maybe<Chat>;
};

export type Chat = {
  __typename?: 'Chat';
  id: Scalars['ID'];
  name: Scalars['String'];
  picture?: Maybe<Scalars['URL']>;
  lastMessage?: Maybe<Message>;
  messages: Array<Message>;
};

export type Query = {
  __typename?: 'Query';
  chats: Array<Chat>;
  chat?: Maybe<Chat>;
};


export type QueryChatArgs = {
  chatId: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addMessage?: Maybe<Message>;
};


export type MutationAddMessageArgs = {
  chatId: Scalars['ID'];
  content: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  messageAdded: Message;
};

export type GetChatQueryVariables = Exact<{
  chatId: Scalars['ID'];
}>;


export type GetChatQuery = (
  { __typename?: 'Query' }
  & { chat?: Maybe<(
    { __typename?: 'Chat' }
    & FullChatFragment
  )> }
);

export type AddMessageMutationVariables = Exact<{
  chatId: Scalars['ID'];
  content: Scalars['String'];
}>;


export type AddMessageMutation = (
  { __typename?: 'Mutation' }
  & { addMessage?: Maybe<(
    { __typename?: 'Message' }
    & MessageFragment
  )> }
);

export type ChatFragment = (
  { __typename?: 'Chat' }
  & Pick<Chat, 'id' | 'name' | 'picture'>
  & { lastMessage?: Maybe<(
    { __typename?: 'Message' }
    & MessageFragment
  )> }
);

export type FullChatFragment = (
  { __typename?: 'Chat' }
  & { messages: Array<(
    { __typename?: 'Message' }
    & MessageFragment
  )> }
  & ChatFragment
);

export type MessageFragment = (
  { __typename?: 'Message' }
  & Pick<Message, 'id' | 'createdAt' | 'content'>
  & { chat?: Maybe<(
    { __typename?: 'Chat' }
    & Pick<Chat, 'id'>
  )> }
);

export type ChatsQueryVariables = Exact<{ [key: string]: never; }>;


export type ChatsQuery = (
  { __typename?: 'Query' }
  & { chats: Array<(
    { __typename?: 'Chat' }
    & ChatFragment
  )> }
);

export type MessageAddedSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type MessageAddedSubscription = (
  { __typename?: 'Subscription' }
  & { messageAdded: (
    { __typename?: 'Message' }
    & MessageFragment
  ) }
);

export const MessageFragmentDoc = gql`
    fragment Message on Message {
  id
  createdAt
  content
  chat {
    id
  }
}
    `;
export const ChatFragmentDoc = gql`
    fragment Chat on Chat {
  id
  name
  picture
  lastMessage {
    ...Message
  }
}
    ${MessageFragmentDoc}`;
export const FullChatFragmentDoc = gql`
    fragment FullChat on Chat {
  ...Chat
  messages {
    ...Message
  }
}
    ${ChatFragmentDoc}
${MessageFragmentDoc}`;
export const GetChatDocument = gql`
    query GetChat($chatId: ID!) {
  chat(chatId: $chatId) {
    ...FullChat
  }
}
    ${FullChatFragmentDoc}`;

/**
 * __useGetChatQuery__
 *
 * To run a query within a React component, call `useGetChatQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChatQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChatQuery({
 *   variables: {
 *      chatId: // value for 'chatId'
 *   },
 * });
 */
export function useGetChatQuery(baseOptions?: Apollo.QueryHookOptions<GetChatQuery, GetChatQueryVariables>) {
        return Apollo.useQuery<GetChatQuery, GetChatQueryVariables>(GetChatDocument, baseOptions);
      }
export function useGetChatLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChatQuery, GetChatQueryVariables>) {
          return Apollo.useLazyQuery<GetChatQuery, GetChatQueryVariables>(GetChatDocument, baseOptions);
        }
export type GetChatQueryHookResult = ReturnType<typeof useGetChatQuery>;
export type GetChatLazyQueryHookResult = ReturnType<typeof useGetChatLazyQuery>;
export type GetChatQueryResult = Apollo.QueryResult<GetChatQuery, GetChatQueryVariables>;
export const AddMessageDocument = gql`
    mutation AddMessage($chatId: ID!, $content: String!) {
  addMessage(chatId: $chatId, content: $content) {
    ...Message
  }
}
    ${MessageFragmentDoc}`;
export type AddMessageMutationFn = Apollo.MutationFunction<AddMessageMutation, AddMessageMutationVariables>;

/**
 * __useAddMessageMutation__
 *
 * To run a mutation, you first call `useAddMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMessageMutation, { data, loading, error }] = useAddMessageMutation({
 *   variables: {
 *      chatId: // value for 'chatId'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useAddMessageMutation(baseOptions?: Apollo.MutationHookOptions<AddMessageMutation, AddMessageMutationVariables>) {
        return Apollo.useMutation<AddMessageMutation, AddMessageMutationVariables>(AddMessageDocument, baseOptions);
      }
export type AddMessageMutationHookResult = ReturnType<typeof useAddMessageMutation>;
export type AddMessageMutationResult = Apollo.MutationResult<AddMessageMutation>;
export type AddMessageMutationOptions = Apollo.BaseMutationOptions<AddMessageMutation, AddMessageMutationVariables>;
export const ChatsDocument = gql`
    query Chats {
  chats {
    ...Chat
  }
}
    ${ChatFragmentDoc}`;

/**
 * __useChatsQuery__
 *
 * To run a query within a React component, call `useChatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useChatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useChatsQuery(baseOptions?: Apollo.QueryHookOptions<ChatsQuery, ChatsQueryVariables>) {
        return Apollo.useQuery<ChatsQuery, ChatsQueryVariables>(ChatsDocument, baseOptions);
      }
export function useChatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChatsQuery, ChatsQueryVariables>) {
          return Apollo.useLazyQuery<ChatsQuery, ChatsQueryVariables>(ChatsDocument, baseOptions);
        }
export type ChatsQueryHookResult = ReturnType<typeof useChatsQuery>;
export type ChatsLazyQueryHookResult = ReturnType<typeof useChatsLazyQuery>;
export type ChatsQueryResult = Apollo.QueryResult<ChatsQuery, ChatsQueryVariables>;
export const MessageAddedDocument = gql`
    subscription MessageAdded {
  messageAdded {
    ...Message
  }
}
    ${MessageFragmentDoc}`;

/**
 * __useMessageAddedSubscription__
 *
 * To run a query within a React component, call `useMessageAddedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useMessageAddedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessageAddedSubscription({
 *   variables: {
 *   },
 * });
 */
export function useMessageAddedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<MessageAddedSubscription, MessageAddedSubscriptionVariables>) {
        return Apollo.useSubscription<MessageAddedSubscription, MessageAddedSubscriptionVariables>(MessageAddedDocument, baseOptions);
      }
export type MessageAddedSubscriptionHookResult = ReturnType<typeof useMessageAddedSubscription>;
export type MessageAddedSubscriptionResult = Apollo.SubscriptionResult<MessageAddedSubscription>;