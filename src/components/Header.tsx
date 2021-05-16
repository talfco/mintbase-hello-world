import React from 'react';

class Header extends React.Component<{},{}> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return(
            <> // JSX Fragment
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="shortcut icon" href="/images/favicons/favicon.ico?v=1"/>
                  <link rel="apple-touch-icon" sizes="57x57" href="/images/favicons/apple-touch-icon-57x57.png?v=1" />
                  <link rel="apple-touch-icon" sizes="114x114" href="/images/favicons/apple-touch-icon-114x114.png?v=1"/>
                  <link rel="apple-touch-icon" sizes="72x72" href="/images/favicons/apple-touch-icon-72x72.png?v=1"/>
                  <link rel="apple-touch-icon" sizes="144x144" href="/images/favicons/apple-touch-icon-144x144.png?v=1"/>
                  <link rel="apple-touch-icon" sizes="60x60" href="/images/favicons/apple-touch-icon-60x60.png?v=1"/>
                  <link rel="apple-touch-icon" sizes="120x120" href="/images/favicons/apple-touch-icon-120x120.png?v=1"/>
                  <link rel="apple-touch-icon" sizes="76x76" href="/images/favicons/apple-touch-icon-76x76.png?v=1"/>
                  <link rel="apple-touch-icon" sizes="152x152" href="/images/favicons/apple-touch-icon-152x152.png?v=1"/>
                  <link rel="icon" type="image/png" href="/images/favicons/favicon-192x192.png?v=1" sizes="192x192"/>
                  <link rel="icon" type="image/png" href="/images/favicons/favicon-160x160.png?v=1" sizes="160x160"/>
                  <link rel="icon" type="image/png" href="/images/favicons/favicon-96x96.png?v=1" sizes="96x96"/>
                  <link rel="icon" type="image/png" href="/images/favicons/favicon-16x16.png?v=1" sizes="16x16"/>
                  <link rel="icon" type="image/png" href="/images/favicons/favicon-32x32.png?v=1" sizes="32x32"/>
                  <meta name="msapplication-TileColor" content="#27374a"/>
                  <meta name="msapplication-TileImage" content="/images/favicons/mstile-144x144.png?v=1"/>
                  <meta name="msapplication-config" content="/images/favicons/browserconfig.xml"/>
            </>
        );
    }
}
export default Header