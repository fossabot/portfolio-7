import * as React from 'react';

import Loading from './Loading.jsx';
import Welcome from './Welcome.jsx';
import Skills from './Skills.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fakeLoading: true
        };
    }

    componentDidMount() {
        window.setTimeout(() => {
            this.setState({ fakeLoading: false });
        }, 1000);
    }

    render() {
        return (
            this.state.fakeLoading ? (
                <Loading/>
            ) : (
                <div>
                    <Welcome/>
                    <Skills/>
                    <Contact/>
                    <Footer/>
                </div>
            )
        );
    }
}

export default Portfolio;
