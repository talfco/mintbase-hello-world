import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// java script function (TypeScript compatible)
function formatName(user: { firstName: string; lastName: string; }) {
    return user.firstName + ' ' + user.lastName;
}

// this is a valid React component it access a props attribute as input
// and returns a React Element. Literally called `function component`
function Welcome(props: { firstName: string; lastName: string; } ) {
    return <h1>Hello, {props.lastName}</h1>;
}

const user = {
    firstName: 'Felix',
    lastName: 'Talfco'
};

// An element describes what you want to see on the screen using JSX
// React elements are immutable
const comp1 = (<h1>Hello1, {formatName(user)}!</h1>);

// When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single
// object. We call this object “props”.
const element1 = <Welcome firstName="Felix" lastName="Talfco" />;

ReactDOM.render(
  <React.StrictMode>
     <App />,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
