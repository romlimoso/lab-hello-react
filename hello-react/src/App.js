// src/App.js
import './App.css';
import logo from './images/logo.png'
import menu from './images/menu.png'
import debug from './images/debug.png'
import gear from './images/gear.png'
import script from './images/script.png'
import website from './images/website.png'


function App() {
  return (

    <div className="App">

      <div id="header">

        <img id="logo" src={logo}></img>
        <img id="menu" src={menu}></img>

        <div>
          <h1>Say hello <br/> ReactJS</h1>
        </div>
            
        <div>
              <p>You will learn how to use <br/>
              the most popular frontend library, <br/>
              and become a super Ninja developer.</p>
        </div>

        <div class="button">
            Awesome!
        </div>

      </div>     
      
        <div id="content">

          <div id="topic">
              <img src={debug}></img>
              <h2>Declarative</h2>
              <p>React makes it<br/>
              painless to create<br/>
              interactive UIs.</p>
          </div>

          <div id="topic">
              <img src={website}></img>
              <h2>Components</h2>
              <p>Build encapsulated<br/>
              components that<br/>
              manage their state.</p>
          </div>
          
          <div id="topic">
              <img src={gear}></img>
              <h2>Single-Way</h2>
              <p>A set of immutable<br/>
              values are passed to<br/>
              the components</p>
          </div>

          <div id="topic">
              <img src={script}></img>
              <h2>JSX</h2>
              <p>Statically typed,<br/>
              designed to run on<br/>
              modern browsers.</p>
          </div>

        </div>

    </div>
  )
}
export default App;
