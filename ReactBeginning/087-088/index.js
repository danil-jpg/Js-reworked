import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

  const Header = function(){
    return <h2>Hey,Its react test</h2>
  }
  const Input = () =>{
    return <input type="text" 
    placeholder="Type here"
    autoComplete=""
    className="first" />
  }

// В отличии от js в jsx клас = классНейм

  const Btn = () =>{

    const res = () =>{
      return "Log in,please"
    }

    const logged = false;
    const text = "Log in";
    return <button>{logged ? null : "Sing up"}</button>
  }

const App = () =>{
  return (
    <div>
      <Header/>
      <Input/>
      <Btn/>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);


// Просто базовый пример Jsx