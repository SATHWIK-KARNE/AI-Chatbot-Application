import "./dashboardPage.css";

//dashboard page is the text shown & input field when we "first" open chat
// like logo/suggestions box/some cards shown in chatbots + input form to chat with bot
// after we type in and enter=> it will take it to chatPage

const DashboardPage = () => {
  return (
    <div className="dashboardPage">
      {/* ==============1.SUGGESTIONS ABOVE INPUT FIELD ===========*/}
      <div className="texts">
        {/* ========LOGO at top=============== */}
        <div className="logo">
          <img src="/logo.png" alt="" />
          <span>AI Chatbot</span>
        </div>

        {/* below logo we have 3 cards side by side as suggestions/quick actions */}
        <div className="options">
          <div className="option">
            <img src="/chat.png" alt="" />
            <span>Create A New Chat</span>
          </div>
          <div className="option">
            <img src="/image.png" alt="" />
            <span>Analyze Image</span>
          </div>
          <div className="option">
            <img src="/code.png" alt="" />
            <span>Help me with my code</span>
          </div>
        </div>
      </div>

      {/* ==============2.INPUT FIELD to type  ==================*/}
      <div className="formContainer">
        <form>
          <input type="text" placeholder="Message AI Chatbot" />

          <button>
            <img src="/arrow.png" alt="Submit" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardPage;
