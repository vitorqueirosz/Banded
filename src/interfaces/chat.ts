export type UserChat = {
  id: string;
  name: string;
  avatar?: string;
  chatId: string;
}

export type JoinnedChannelData = {
  user: UserChat;
}

export type LatestMessagesList = {
  latestMessages: LatestMessages[];
}

export type LatestMessages = {
  chatId: string;
  user: string;
  id: string;
  text: string;
  createdAt: Date;
}
