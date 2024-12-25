import { useEffect, useRef } from "react";
import "./newPrompt.css";

const NewPrompt = () => {
  const endRef = useRef(null);

  // automatically scrolls to the bottom of the chat slowly
  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="endChat" ref={endRef}></div>
      <form className="newForm">
        {/* =========== 1 FILE ATTACHMENT =============*/}
        {/* label is bound to file input using id="file. so attachment dialog appears if clicked label(img)/input both" */}
        <label htmlFor="file">
          <img src="/attachment.png" alt="attachment" />
        </label>
        <input type="file" id="file" multiple={false} hidden />

        {/* =========== 2.USER INPUT =============*/}
        <input type="text" placeholder="Message AI Chatbot" />

        {/* =========== 3.SUBMIT BUTTON =============*/}
        <button>
          <img src="/arrow.png" alt="submit" />
        </button>
      </form>
    </>
  );
};

export default NewPrompt;
