export type MessageType = 'response' | 'message' | 'typing';

export interface MessageAuthor {
  name: string;
}

export interface Message {
  id: string;
  from: MessageAuthor;
  type: MessageType;
  time: string;
  text?: string;          // необязательное — для typing может отсутствовать
}