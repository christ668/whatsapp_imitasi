export const messages = [
  {
    id: '1',
    content: 'Test 1',
    createdAt: new Date(Date.now() - 60 * 1000 * 1000),
  },
  {
    id: '2',
    content: 'Test 2',
    createdAt: new Date(Date.now() - 2 * 60 * 1000 * 1000),
  },
  {
    id: '3',
    content: 'Test 3',
    createdAt: new Date(Date.now() - 24 * 60 * 1000 * 1000),
  },
  {
    id: '4',
    content: 'Test 4',
    createdAt: new Date(Date.now() - 14 * 24 * 60 * 1000 * 1000),
  },
];

export const chats = [
  {
    id: '1',
    name: 'roby mis',
    picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
    lastMessage: messages.find((m) => m.id === '1'),
  },
  {
    id: '2',
    name: 'david mis',
    picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
    lastMessage: messages.find((m) => m.id === '2'),
  },
  {
    id: '3',
    name: 'fani mis',
    picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
    lastMessage: messages.find((m) => m.id === '3'),
  },
  {
    id: '4',
    name: 'hendry mis',
    picture: 'https://randomuser.me/api/portraits/thumb/men/3.jpg',
    lastMessage: messages.find((m) => m.id === '4'),
  },
];
