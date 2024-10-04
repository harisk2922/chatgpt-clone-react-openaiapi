import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideLogo"><img src={gptLogo} alt="Logo" className="logo"/><span className="brandName">ChatGPT</span></div>
          <button className="btn"><img className="addBtn" src={addBtn} alt="New Chat"/>New Chat</button>
          <div className="upperSideQueries">
            <button className="query"><img src={msgIcon} alt="Query"/>What is programming?</button>
            <button className="query"><img src={msgIcon} alt="Query"/>How to use the API?</button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems"><img src={home} alt="Home" className="listItemsImg"/>Home</div>
          <div className="listItems"><img src={saved} alt="Saved" className="listItemsImg"/>Saved</div>
          <div className="listItems"><img src={rocket} alt="Upgrade" className="listItemsImg"/>Upgrade to pro</div>
        </div>
      </div>
      <div className="main">

      </div>
    </div>
  );
}

export default App;
