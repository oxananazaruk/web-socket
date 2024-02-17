const Chat = ({ items }) => {
  const elements = items.map(({ id, type, message }) => {
    return <p key={id}>{message}</p>;
  });

  return (
    <div>
      <b>Chat</b>
      {elements}
    </div>
  );
};

export default Chat;
