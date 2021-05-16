import { Wallet, Chain, Network } from 'mintbase'
import React from 'react';
import HelloWorld from "./HelloWorld";

class MintbaseConnect extends React.Component<{}, { date: Date, accountId: String }> {

    constructor(props: any) {
        super(props);
        this.state = {date: new Date(), accountId: ''};
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <h3>Wallet: {this.state.accountId}</h3>
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
            this.setState({accountId: details.accountId })
            this.render()

            /*
              accountId: "qwerty.testnet"
              allowance: "0.25"
              balance: "365.77"
              contractName: "mintbase13.testnet"
            */
        } else {
            console.log("Error"+error)
        }

    }
}
export default MintbaseConnect


