import './App.css';
import { useEffect, useRef, useState } from 'react';

import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'
import sendBtn from './assets/send.svg'
import userIcon from './assets/user-icon.png'
import gptImgLogo from './assets/chatgptLogo.svg'
import { sendMsgToOpenAI } from './OpenAI';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{
    text: "Hi I am ChatGPT!",
    isBot: true,
  }]);

  const msgEnd = useRef(null);
  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [messages])

  const handleSend = async () => {
    const text = input;
    setInput('');
    setMessages([
      ...messages,
      {text, isBot: false}
    ])
    const res = await sendMsgToOpenAI(text);
    setMessages([
      ...messages,
      { text, isBot: false },
      { text: res, isBot: true }
    ]);
  }

  const handleEnter = async (e) => {
    if(e.key==='Enter') await handleSend();
  }

  const handleQuery = async (e) => {
    const text = e.target.value;
    setMessages([
      ...messages,
      {text, isBot: false}
    ])
    const res = await sendMsgToOpenAI(text);
    setMessages([
      ...messages,
      { text, isBot: false },
      { text: res, isBot: true }
    ]);
  }

  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideLogo"><img src={gptLogo} alt="Logo" className="logo" /><span className="brandName">ChatGPT</span></div>
          <button className="btn" onClick={()=>{window.location.reload()}}><img className="addBtn" src={addBtn} alt="New Chat" />New Chat</button>
          <div className="upperSideQueries">
            <button className="query" onClick={handleQuery} value={"What is programming?"}><img src={msgIcon} alt="Query" />What is programming?</button>
            <button className="query" onClick={handleQuery} value={"How to use the API?"}><img src={msgIcon} alt="Query" />How to use the API?</button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems"><img src={home} alt="Home" className="listItemsImg" />Home</div>
          <div className="listItems"><img src={saved} alt="Saved" className="listItemsImg" />Saved</div>
          <div className="listItems"><img src={rocket} alt="Upgrade" className="listItemsImg" />Upgrade to pro</div>
        </div>
      </div>
      <div className="main">
        <div className="chatbox">
          {messages.map((message, i) => 
            <div key={i} className={message.isBot?"chat bot":"chat"}>
              <img src={message.isBot?gptImgLogo:userIcon} alt="" className="chatImg" /><p className="text">{ message.text }</p>
            </div>
          )}
          <div ref={msgEnd}/>
        </div>
        <div className="chatboxFooter">
          <div className="input">
            <input type="text" placeholder="Enter your input..." value={input} onKeyDown={handleEnter} onChange={(e) => { setInput(e.target.value) }} /><button className="send" onClick={handleSend}><img src={sendBtn} alt="Send" className="sendBtn" /></button>
          </div>
          <p>ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT October 04 version.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
