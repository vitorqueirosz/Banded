export type UserChat = {
  id: string;
  name: string;
  avatar?: string;
  chatId: string;
};

export type UserChatMessage = {
  id: string;
  name: string;
  avatar?: string;
  lastMessage: LatestMessages;
};

export type JoinnedChannelData = {
  user: UserChat;
};

export type LatestMessagesList = {
  latestMessages: LatestMessages[];
};

export type LatestMessages = {
  chatId: string;
  user: string;
  messageId: string;
  text: string;
  createdAt: Date;
  isReceived?: boolean;
};

export type Message = Omit<LatestMessages, 'chatId'>;
