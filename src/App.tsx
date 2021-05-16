import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/HelloWorld';
import HelloWorld from "./components/HelloWorld";
import MintbaseConnect from "./components/MintbaseConnect";
import List from "./components/List";
import Header from "./components/Header";
import  Home from "./components/Home";
import { Wallet, Chain, Network } from "mintbase";

const avengers = [
  'Captain America',
  'Iron Man',
  'Black Widow',
  'Thor',
  'Hawkeye'
]

function App() {
    // Stateful component variablses
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [details, setDetails] =
      useState<{
        accountId: string;
        balance: string;
        allowance: string;
        contractName: string;
      }>();
    const [wallet, setWallet] = useState<Wallet | null>(null);

    // The  Tabs of the application
    function HomeTab() {
        return <Home/>;
    }

    function AboutTab() {
        return <h2>About</h2>;
    }

    function UsersTab() {
        return <h2>Users</h2>;
    }

  return (
    /* <div className="App">
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          <HelloWorld />
          <MintbaseConnect />
          <List data={avengers} />
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
      </header>
    </div> */

    <Router>
        <Helmet>
            <Header/>
        </Helmet>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/about">
                    <AboutTab/>
                </Route>
                <Route path="/users">
                    <UsersTab/>
                </Route>
                <Route path="/">
                    <HomeTab/>
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
