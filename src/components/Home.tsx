import React from 'react';

/*
const handleConnect = async (shouldRequest: boolean) => {
    return;
};*/
const handleConnect =  (shouldRequest: boolean) => { return; }

const handleDisconnect = () => {
       window.location.reload();
};

class Home extends React.Component {

    constructor(props: any) {
        super(props);
    }

    isLoggedIn() {
        return false;
    }

    render() {
        return(
            <div className="template-home">
                <div className="page-header">
                    pg_HomeHeaderMD
                </div>
                <img src="/images/cloudburo/homePagePic1.png" alt="Home Page Picture" className="img-responsive pull-left img-thumbnail"/>
                <p>
                    {!this.isLoggedIn() &&
                        (<button onClick={() => handleConnect(true)}>Connect</button>)
                    }
                    {this.isLoggedIn() &&
                        (<button onClick={() => handleDisconnect()}>Disconnect</button>)
                    }
                </p>
            </div>
        );
    }
}
export default Home