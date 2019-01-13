import * as React from 'react';
import { Helmet } from 'react-helmet';

class MyHelmet extends React.Component {
    render() {
        return (
           <Helmet>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Portfolio | Gero Gerke</title>
                <link rel="canonical" href="https://gerogerke.de" />
                <meta name="description" content="Personal portfolio website and resume of Gero Gerke, a Aachen, Germany based Full-Stack- and Android Developer. Currently not looking for new opportunities." />
                <meta name="keywords" content="resume, android, web, react, kubernetes, devops, webpack, rust, golang, docker, scala, java, dart" />

                <meta property="og:title" content="Portfolio | Gero Gerke" />
                <meta property="og:site_name" content="Gero Gerke" />
                <meta property="og:url" content="https://gerogerke.de" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content="Personal portfolio website and resume of Gero Gerke, a Aachen, Germany based Full-Stack- and Android Developer." />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="Personal portfolio website and resume of Gero Gerke, a Aachen, Germany based Full-Stack- and Android Developer." />
                <meta name="twitter:creator" content="@Empty2k12" />
                <meta name="twitter:title" content="Portfolio | Gero Gerke" />
                <meta name="twitter:description" content="Personal portfolio website and resume of Gero Gerke, a Aachen, Germany based Full-Stack- and Android Developer." />
            </Helmet> 
        );
    }
}

export default MyHelmet;