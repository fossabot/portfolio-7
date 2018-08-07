import * as React from 'react';
import PropTypes from 'prop-types';

import './Skills.css';

class Section extends React.Component {
    render() {
        return (
            <div className="Section">
                {this.props.icon}
                <p className="title">{this.props.title}</p>
                <p>{this.props.text}</p>

                <div className="domain-skills">
                    <p className="title">{this.props.techHeader}</p>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Section.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    techHeader: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired
};

class Loading extends React.Component {
    render() {
        const androidIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#A4C639" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-smartphone"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line></svg>);
        const webIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#CB3837" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chrome"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line></svg>);
        const designIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#8DD6F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-feather"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17" y1="15" x2="9" y2="15"></line></svg>);
        return (
            <div className="Skills">
                <Section
                    title={'Android Development'}
                    text={'I enjoy building high-quality Android Applications, building screens in Material Design and working to support the last device possible.'}
                    techHeader={'Android Tech'}
                    icon={androidIcon}>
                    <p>Java / Scala / XML</p>
                    <p>Functional Programming</p>
                    <p>RXJava</p>
                    <p>Custom Views</p>
                    <p>Model View Presenter</p>
                </Section>

                <Section
                    title={'Full-Stack Development'}
                    text={'I like creating web pages from scratch, designing, coding mockups and turning them into functional React applications.'}
                    techHeader={'Web Tech'}
                    icon={webIcon}>
                    <p>HTML / CSS / JS</p>
                    <p>ReactJS / GatsbyJS</p>
                    <p>Redux</p>
                    <p>Go</p>
                    <p>Ruby</p>
                    <p>PHP</p>
                    <p>Node.JS</p>
                    <p>Webpack</p>
                    <p>WebGL</p>
                </Section>

                <Section
                    title="Design"
                    text="From time to time I am designing parts of applications I am developing myself, adhering to strong visual standards."
                    techHeader="Design Tech"
                    icon={designIcon}>
                    <p>Sketch</p>
                    <p>Photoshop</p>
                </Section>
            </div>
        );
    }
}

export default Loading;
