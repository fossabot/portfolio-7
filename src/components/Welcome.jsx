import * as React from 'react';

import './Welcome.css';

class Welcome extends React.Component {
    onChevronClick() {
        window.scrollTo({
            top: 0.93 * window.innerHeight,
            left: 0,
            behavior: 'smooth'
        });
    }

    render() {
        return (
            <div className="Welcome">
                <div className="Welcome-text">
                    <div>
                        <span>Mobile first </span>
                        <span className="android">Android</span>
                        <span> and </span>
                        <span className="fullstack">Full-Stack</span>
                        <span> Developer</span>
                    </div>
                    <div className="aboutme">
                        <span>Hello, I am </span>
                        <span className="name">Gero</span>
                        <span>.</span><br/>
                        <span>Student by day and Developer by night.</span>
                    </div>
                    <div className="chevron">
                        <svg onClick={this.onChevronClick} xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                </div>
            </div>
        );
    }
}

export default Welcome;
