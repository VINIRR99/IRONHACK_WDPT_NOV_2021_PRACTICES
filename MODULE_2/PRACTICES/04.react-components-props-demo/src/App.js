import React from 'react';
import './App.css';
// import ReactPlayer from the npm package
import ReactPlayer from 'react-player';
 
function GreetingMessage() {
  const message = 'Hello Ana!';
  return (
    <div>
      <u>{message}</u>
    </div>
  );
}
 
function WelcomeBlock() {
  return (
    <div>
      <GreetingMessage />
      <em>Welcome to our cool page. It is pleasure to have you here!</em>
    </div>
  );
}

const Student = props => {
  return <li>Name: {props.name}, age: {props.age};</li>
}

const Classroom = props => {
  return (
  <ul>
    Students:
    <Student name="Vinícius Leite Batista" age="22"/>
    <Student name="Erick" age="31" />
    <Student name="Erico" age="25" />
  </ul>
    );
}

function User(props) {
  return <div>User is: {props.firstName}</div>;
}

function UsersList(props) {
  return <div> {props.children} </div>;
}

class Color extends React.Component {
  render() {
    return <div>{this.props.favColor}</div>;
  }
}
 
function App() {
  return (
    <div className="App">
      <GreetingMessage />
      <hr />
      <WelcomeBlock />
      <hr />
      <Classroom />
      <hr />
      <UsersList>
        <User firstName="Harper" />
        <User firstName="Mike" />
        <User firstName="Alvaro" />
        <User firstName="Andrea" />
      </UsersList>
      <hr />
      <Color favColor="blue" />
      <hr />
      <ReactPlayer url="https://vimeo.com/channels/top/22439234" playing />
      <hr />
      <ReactPlayer
          url="https://www.youtube.com/watch?v=kJQP7kiw5Fk"
          playing
          controls
          volume="0.5"
        />
    </div>
  );
}
 
export default App;