import type { Message } from '../types';

interface MessageHistoryProps {
  list?: Message[];
}

const typeClassMap: Record<Message['type'], string> = {
  message: 'message-own',
  response: 'message-response',
  typing: 'message-typing',
};

function MessageItem({ message }: { message: Message }) {
  const { from, type, time, text } = message;
  const itemClass = `message-item ${typeClassMap[type]}`;

  return (
    <div className={itemClass}>
      <div className="message-header">
        <span className="message-author">{from.name}</span>
        <span className="message-time">{time}</span>
      </div>
      {type === 'typing' ? (
        <div className="typing-indicator">
          <span>печатает...</span>
        </div>
      ) : (
        <div className="message-bubble">{text}</div>
      )}
    </div>
  );
}

function MessageHistory({ list = [] }: MessageHistoryProps) {
  if (list.length === 0) {
    return null;      // по заданию — пустой DOM, если список пуст
  }

  return (
    <div className="chat-history">
      {list.map(message => (
        <MessageItem key={message.id} message={message} />
      ))}
    </div>
  );
}

export default MessageHistory;