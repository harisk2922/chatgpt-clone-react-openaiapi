import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'
import sendBtn from './assets/send.svg'
import userIcon from './assets/user-icon.png'
import gptImgLogo from './assets/chatgptLogo.svg'

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideLogo"><img src={gptLogo} alt="Logo" className="logo" /><span className="brandName">ChatGPT</span></div>
          <button className="btn"><img className="addBtn" src={addBtn} alt="New Chat" />New Chat</button>
          <div className="upperSideQueries">
            <button className="query"><img src={msgIcon} alt="Query" />What is programming?</button>
            <button className="query"><img src={msgIcon} alt="Query" />How to use the API?</button>
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
          <div className="chat">
            <img src={userIcon} alt="" className="chatImg" /><p className="text">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
          </div>
          <div className="chat bot">
            <img src={gptImgLogo} alt="" className="chatImg" /><p className="text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
          </div>
        </div>
        <div className="chatboxFooter">
          <div className="input">
            <input type="text" placeholder="Enter your input..." /><button className="send"  ><img src={sendBtn} alt="Send" className="sendBtn" /></button>
          </div>
          <p>ChatGPT may produce inaccurate information about people, places, or facts. ChatGPT October 04 version.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
