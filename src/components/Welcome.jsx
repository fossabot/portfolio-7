import * as React from 'react';

import 'typeface-catamaran';
import 'typeface-source-code-pro';
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
            <header className="Welcome">
                <div className="Welcome-text">
                    <h1>
                        Mobile first
                        <mark span className="android"> Android </mark>
                        and
                        <mark className="fullstack"> Full-Stack </mark>
                        Developer
                    </h1>
                    <h2 className="aboutme">
                        <span>Hello, I am </span>
                        <mark><span className="name">Gero</span></mark>
                        <span>.</span><br/>
                        <span>Student by day and Developer by night.</span>
                    </h2>
                    <nav className="chevron">
                        <svg tabIndex="0" onClick={this.onChevronClick} aria-label="Scroll down" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Welcome;
