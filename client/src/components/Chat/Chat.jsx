import { useContext, useState } from "react";
import "./chat.scss";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import {format} from "timeago.js"

function Chat({ chats }) {
  const [chat, setChat] = useState(null);
  const { currentUser } = useContext(AuthContext);

  const handleOpenChat = async (chatId, receiver) => {
    try {
      const res = await apiRequest("/chats/"+chatId)
      setChat({...res.data, receiver})
    } catch (error) {
      console.log(error)
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const text = formData.get("text");

    if (!text) return;
    try {
      const res = await apiRequest.post("/messages/" + chat.id, { text });
      setChat((prev) => ({ ...prev, messages: [...prev.messages, res.data] }));
      e.target.reset();
      socket.emit("sendMessage", {
        receiverId: chat.receiver.id,
        data: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        {chats?.map((chat) => (
          <div
            className="message"
            key={chat.id}
            style={{
              backgroundColor: chat.seenBy.includes(currentUser.id)
                ? "white"
                : "#fecd514e",
            }}
            onClick={() => handleOpenChat(chat.id, chat.receiver)}
          >
            <img
              src={
                chat.receiver.avatar ||
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.C8MLNS-O_kwtnrf_GDdfaAHaGm%26pid%3DApi&f=1&ipt=55ae4db309cc68986d8924cf28f7376983fa7a40c858b77d8cf2e436e4de37e2&ipo=images"
              }
              alt=""
            />
            <span>{chat.receiver.username}</span>
            <p>{chat.lastMessage}</p>
          </div>
        ))}
      </div>

      {chat && (
        <div className="chatbox">
          <div className="top">
            <div className="user">
              <img
                src={
                  chat.receiver.avatar ||
                  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.C8MLNS-O_kwtnrf_GDdfaAHaGm%26pid%3DApi&f=1&ipt=55ae4db309cc68986d8924cf28f7376983fa7a40c858b77d8cf2e436e4de37e2&ipo=images"
                }
                alt=""
              />
              {chat.receiver.username}
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            {chat.messages.map((message) => (
              <div className={`chatmessage`} key={message.id}
              style={{
                alignSelf: message.userId === currentUser.id ? "flex-end" : "flex-start",
                textAlign: message.userId === currentUser.id ? "right" : "left"
              }}
              >
                <p>{message.text}</p>
                <span>{format(message.createdAt)}</span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="bottom">
            <textarea name="text"></textarea>
            <button>Send</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Chat;
