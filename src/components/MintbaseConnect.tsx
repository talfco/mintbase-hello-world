import { Wallet, Chain, Network } from 'mintbase'
import React from 'react';

class MintbaseConnect extends React.Component {

    constructor(props : { date: Date}) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }


    // Connect and fetch details
    async componentDidMount() {
        const {data: walletData, error} = await new Wallet().init({
            networkName: Network.testnet,
            chain: Chain.near,
            apiKey: "94f3ce88-3aa5-4503-8dc5-4d696a8580b6",
        })

        const {wallet, isConnected} = walletData

        if (isConnected) {
            const {data: details} = await wallet.details()

            /*
              accountId: "qwerty.testnet"
              allowance: "0.25"
              balance: "365.77"
              contractName: "mintbase13.testnet"
            */
        }

    }
}



