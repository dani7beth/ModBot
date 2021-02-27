export const MessageLog = ({ messages }) => {
  const renderMessages = () => {
    // console.log(messages);
    if (messages) {
      return messages.map((item) => <p key={item}>{item}</p>);
    }
  };
  return <>{renderMessages()}</>;
};
