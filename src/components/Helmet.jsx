import * as React from 'react';
import { Helmet } from 'react-helmet';

class MyHelmet extends React.Component {
    render() {
        return (
            <Helmet>
                <meta charset='utf-8' />
                <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <title>Gero Gerke</title>
                <link rel='canonical' href='https://gero.dev' />
                <meta
                    name='description'
                    content='Personal portfolio website and resume of Gero Gerke, a Aachen, Germany based Full-Stack- and Android Developer.'
                />
                <meta
                    name='keywords'
                    content='resume, android, web, react, kubernetes, devops, webpack, rust, golang, docker, scala, java, dart, flutter'
                />

                <meta property='og:title' content='Gero Gerke' />
                <meta property='og:site_name' content='Gero Gerke' />
                <meta property='og:url' content='https://gero.dev' />
                <meta property='og:type' content='website' />
                <meta
                    property='og:description'
                    content='Personal portfolio website and resume of Gero Gerke, a Aachen, Germany based Full-Stack- and Android Developer.'
                />

                <meta name='twitter:card' content='summary_large_image' />
                <meta
                    name='twitter:site'
                    content='Personal portfolio website and resume of Gero Gerke, a Aachen, Germany based Full-Stack- and Android Developer.'
                />
                <meta name='twitter:creator' content='@Empty2k12' />
                <meta name='twitter:title' content='Gero Gerke' />
                <meta
                    name='twitter:description'
                    content='Personal portfolio website and resume of Gero Gerke, a Aachen, Germany based Full-Stack- and Android Developer.'
                />
            </Helmet>
        );
    }
}

export default MyHelmet;
