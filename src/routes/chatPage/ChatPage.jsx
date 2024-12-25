import { useRef } from "react";
import "./chatPage.css";
import { useEffect } from "react";
import NewPrompt from "../../components/newPrompt/NewPrompt";

const ChatPage = () => {
  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
            minima voluptatibus ut fugit eligendi ducimus consequatur sequi
            tenetur excepturi, reprehenderit adipisci numquam ipsam, temporibus
            dignissimos. Ea, velit! Voluptate, aliquam ad?
          </div>
          <div className="message user">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sed
            voluptatum, similique accusantium sunt, voluptates quam possimus
            cumque quis, sint aut dicta sequi amet rerum alias rem. Corrupti,
            vel architecto!
          </div>
          <div className="message">Message from AI</div>
          <div className="message user">Message from User</div>
          <div className="message">Message from AI</div>
          <div className="message user">Message from User</div>
          <div className="message">Message from AI</div>
          <div className="message user">Message from User</div>
          <div className="message">Message from AI</div>
          <div className="message user">Message from User</div>

          {/* input form put in separate component to avoid re-rendering total ChatPage when input is changed/ AI answers */}
          <NewPrompt />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
