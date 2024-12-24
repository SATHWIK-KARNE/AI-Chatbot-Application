import { Link } from "react-router-dom";
import "./homepage.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");
  return (
    <div className="homepage">
      <img src="/orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1>AI Chatbot</h1>
        <h2>Your 24/7 Smart Conversation Partner</h2>
        <h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat sint
          dolorem doloribus, architecto dolor.
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>

      {/* right container=> bg, image and text. 3 animated */}
      <div className="right">
        <div className="imgContainer">
          {/* imgCOntainer=> bg+image */}
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />

          {/* small text slider below bot image */}
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? "/human1.jpeg"
                  : typingStatus === "human2"
                  ? "/human2.jpeg"
                  : "bot.png"
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                "Mike:Hey, any tips for planning a weekend trip?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Chatbot:Sure! Start by picking a destination, setting a budget, and making a list of must-see spots.",
                2000,
                () => {
                  setTypingStatus("human2");
                },
                "Anna:How do I reverse a string in JavaScript?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Chatbot:Easy! Use `str.split('').reverse().join('')`. This will split the string into an array, reverse it, and join it back together.",
                2000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      {/* ======FOOTER========== */}
      <div className="terms">
        <img src="/logo.png" alt="" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
