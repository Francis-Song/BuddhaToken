import React, {Component} from "react";
import logo from './logo.png';
import './App.css';
import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';
import BuddhaToken from "./build/contracts/BuddhaToken.json";

class App extends Component {

async componentWillMount() {
  await this.loadProvider();
  await this.loadContracts();
}

async loadProvider() {
  const provider = await detectEthereumProvider();

  if (provider) {
    startApp(provider);
  } else {
    console.log('Please install MetaMask!');
  }

  function startApp(provider) {
    if (provider !== window.ethereum) {
      console.error('Do you have multiple wallets installed?');
    }
  }
}

async loadContracts() {
  const buddhaToken = new window.web3.eth.Contract(BuddhaToken.abi, BuddhaToken.networks["5777"].address);
  this.setState({ buddhaToken: buddhaToken});
}

constructor() {
  super()
  this.state = {
    buddhaToken: "",
    accounts: "",
  }
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>BuddhaToken</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <button className="App-button">BUY</button>
        </header>
      </div>
    );
  }
}

export default App;
