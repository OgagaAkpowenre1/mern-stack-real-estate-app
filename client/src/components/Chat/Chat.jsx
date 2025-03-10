import { useState } from "react";
import "./chat.scss";

function Chat() {
    const [chat, setChat] = useState(false);

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        {Array.from({ length: 5 }).map((_, index) => (
          <div className="message" key={index} onClick={() => setChat(true)}>
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>John Doe</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        ))}
      </div>

      {chat && <div className="chatbox">
        <div className="top">
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            John Doe
          </div>
          <span className="close" onClick={() => setChat(false)}>X</span>
        </div>
        <div className="center">
          {Array.from({ length: 10 }).map((_, index) => (
            <div className={`chatmessage ${index % 2 === 0 ? 'own' : ''}`}>
              <p>Lorem ipsum dolor sit amet.</p>
              <span>1 hour ago</span>
            </div>
          ))}
        </div>
        <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
        </div>
      </div>}
    </div>
  );
}

export default Chat;
