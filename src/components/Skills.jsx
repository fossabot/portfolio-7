import * as React from 'react';
import PropTypes from 'prop-types';

import 'typeface-catamaran';
import './Skills.css';

class AreaOfExpertise extends React.Component {
    render() {
        return (
            <div className="AreaOfExpertise">
                <svg width="22" height="23" xmlns="http://www.w3.org/2000/svg"><g stroke="#5DA656" strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10.91v.9a9.88 9.88 0 0 1-7.16 9.46A10.07 10.07 0 0 1 2.6 17.18 9.76 9.76 0 0 1 3.4 5.4a10.1 10.1 0 0 1 11.67-2.6"/><path d="M21 3.93L11 13.8l-3-2.96"/></g></svg>
                <div>
                    <div>
                        <p>{this.props.title}</p>
                        <span>{this.props.children}</span>
                    </div>
                </div>
            </div>
        );
    }
}

AreaOfExpertise.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired,
};

class Section extends React.Component {
    render() {
        return (
            <article className={`Section ${this.props.className}`}>
                <p className="title">{this.props.title}</p>
                <div className='header'>
                    {this.props.icon}
                    <p className="description">{this.props.text}</p>
                </div>
                {this.props.children}
            </article>
        );
    }
}

Section.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    techHeader: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired,

    className: PropTypes.string,
};

class Skills extends React.Component {
    render() {
        const androidIcon = (<svg width="100" height="88" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M21.4 23.9h22.8a1 1 0 0 1 1 1v16.4a3 3 0 0 1-3 3H23.4a3 3 0 0 1-3-3V24.8a1 1 0 0 1 1-1z" fill="#FFF"/><path d="M80 40.1C80 24 70 9.5 54.9 3.5a40.4 40.4 0 0 0-43.8 9.3 39 39 0 0 0-7.5 43.6h72.8A38.9 38.9 0 0 0 80 40z" fill="#DDF887"/><path d="M43.8 21.1c.3 0 .6-.1.9-.4.2-.3.3-.6.2-1a12.3 12.3 0 0 0-12.1-9.5 12.3 12.3 0 0 0-12 9.5c-.2.4 0 .7.2 1 .2.3.6.5.9.4h21.9z" fill="#FFF"/><path d="M21.4 23.9h22.8a1 1 0 0 1 1 1v16.4a3 3 0 0 1-3 3H23.4a3 3 0 0 1-3-3V24.8a1 1 0 0 1 1-1zM43.8 21c.3 0 .6-.1.9-.4.2-.3.3-.6.2-1a12.3 12.3 0 0 0-12.1-9.5 12.3 12.3 0 0 0-12 9.5c-.2.4 0 .7.2 1 .2.3.6.5.9.4h21.9z" stroke="#8DB600"/><path d="M23.1 44.3H30v6.2c0 1-.9 2-2 2h-2.9a2 2 0 0 1-2-2v-6.2zm17.4 8.1h-3a2 2 0 0 1-2-2v-6.1h7v6.2c0 1-1 2-2 2zM50.7 28c1 0 2-.6 2.5-1.5l4.8-8.9a2.7 2.7 0 0 0-1.2-3.6 2.8 2.8 0 0 0-3.7 1l-4.8 9a2.7 2.7 0 0 0 2.4 4zM12.1 36c0 1.5 1.2 2.7 2.8 2.7a2.7 2.7 0 0 0 2.7-2.7v-9.5c0-1.5-1.2-2.8-2.7-2.8a2.7 2.7 0 0 0-2.8 2.8V36z" stroke="#8DB600" fill="#FFF"/><path d="M37 11l4.4-4.5m-12.7 4.4l-4.5-4.4" stroke="#8DB600"/><ellipse stroke="#8DB600" fill="#DDF887" cx="28.7" cy="17" rx="1.4" ry="1.4"/><ellipse stroke="#8DB600" fill="#DDF887" cx="36.9" cy="17" rx="1.4" ry="1.4"/><ellipse fill="#A4C639" cx="51" cy="65.4" rx="9.2" ry="1.7"/><rect stroke="#8DB600" fill="#FFF" x="39.7" y="23.2" width="22.1" height="36.9" rx="3.4"/><path fill="#A4C639" d="M39.7 29.9h22V55h-22z"/><path fill="#FFF" d="M39.7 48.5l18.8-18.6H39.7z"/><path stroke="#8DB600" d="M39.7 29.9h22V55h-22zm6.3-3.4h4.2m3.4 0h.9"/><path d="M50.7 56.7a.8.8 0 0 0-.8.8c0 .5.4.9.8.9s.9-.4.9-.9a.8.8 0 0 0-.9-.8z" fill="#8DB600"/></g></svg>);
        const webIcon = (<svg width="103" height="91" xmlns="http://www.w3.org/2000/svg"><g transform="translate(1)" fill="none"><path d="M78.2 37A37 37 0 0 0 54.8 2.8a37.6 37.6 0 0 0-41 8.7 36.8 36.8 0 0 0-7 41h68A36.7 36.7 0 0 0 78.3 37z" fill="#FF8787"/><path d="M4.2 52.3h73.3M0 52.3h2.1m76.8 0H81" stroke="#CB3737"/><path stroke="#CB3737" fill="#FFF" d="M54.5 18h16v31.6h-16zm0-2.2h16V18h-16z"/><path d="M53 52.3h2.2V16.1c0-.5-.5-1-1-1-.7 0-1.1.5-1.1 1v36.2zm18.2 0h2.1V16.1c0-.5-.4-1-1-1s-1 .5-1 1v36.2zM35 18h16v31.7H35z" stroke="#CB3737" fill="#FFF"/><path d="M37.2 20H48c.6 0 1 .4 1 .9v1.8H36.3V21c0-.5.4-1 1-1z" stroke="#CB3737" fill="#FFF"/><path d="M43.3 20l-2.8 2.7h8.4V21a1 1 0 0 0-1-1h-4.6z" stroke="#CB3737" fill="#F66161"/><path d="M37.2 34.4H48c.6 0 1 .4 1 1v1.8H36.3v-1.8c0-.6.4-1 1-1z" stroke="#CB3737" fill="#FFF"/><path d="M43.3 34.4l-2.8 2.8h8.4v-1.8a1 1 0 0 0-1-1h-4.6z" stroke="#CB3737" fill="#F66161"/><path d="M36.3 22.7H49v1.9a1 1 0 0 1-1 .9H37.2a1 1 0 0 1-.9-1v-1.8z" stroke="#CB3737" fill="#FFF"/><path d="M43.3 22.7l-2.8 2.8h7.4a1 1 0 0 0 1-1v-1.8h-5.6z" stroke="#CB3737" fill="#F66161"/><path d="M57.5 20h10.7c.5 0 1 .4 1 .9v1.8H56.5V21c0-.5.4-1 .9-1z" stroke="#CB3737" fill="#FFF"/><path d="M63.5 20l-2.8 2.7h8.4V21a1 1 0 0 0-.9-1h-4.7z" stroke="#CB3737" fill="#F66161"/><path d="M56.6 22.7H69v1.9a1 1 0 0 1-.9.9H57.5a1 1 0 0 1-1-1v-1.8z" stroke="#CB3737" fill="#FFF"/><path d="M63.5 22.7l-2.8 2.8h7.5a1 1 0 0 0 1-1v-1.8h-5.7z" stroke="#CB3737" fill="#F66161"/><path d="M57.5 27.6h10.7c.5 0 1 .4 1 .9v1.8H56.5v-1.8c0-.5.4-1 .9-1z" stroke="#CB3737" fill="#FFF"/><path d="M63.5 27.6l-2.8 2.7h8.4v-1.8a1 1 0 0 0-.9-1h-4.7z" stroke="#CB3737" fill="#F66161"/><path d="M56.6 30.3H69v1.8a1 1 0 0 1-.9 1H57.5a1 1 0 0 1-1-1v-1.8z" stroke="#CB3737" fill="#FFF"/><path d="M63.5 30.3l-2.8 2.8h7.5a1 1 0 0 0 1-1v-1.8h-5.7z" stroke="#CB3737" fill="#F66161"/><path d="M37.2 42H48c.6 0 1 .4 1 1v1.8H36.3v-1.9c0-.5.4-.9 1-.9z" stroke="#CB3737" fill="#FFF"/><path d="M43.3 42l-2.8 2.8h8.4v-1.9a1 1 0 0 0-1-.9h-4.6z" stroke="#CB3737" fill="#F66161"/><path d="M36.3 44.8H49v1.8a1 1 0 0 1-1 1H37.2a1 1 0 0 1-.9-1v-1.8z" stroke="#CB3737" fill="#FFF"/><path d="M43.3 44.8l-2.8 2.7h7.4a1 1 0 0 0 1-.9v-1.8h-5.6z" stroke="#CB3737" fill="#F66161"/><path d="M37.2 27.6H48c.6 0 1 .4 1 .9v1.8H36.3v-1.8c0-.5.4-1 1-1z" stroke="#CB3737" fill="#FFF"/><path d="M43.3 27.6l-2.8 2.7h8.4v-1.8a1 1 0 0 0-1-1h-4.6z" stroke="#CB3737" fill="#F66161"/><path d="M36.3 30.3H49v1.8a1 1 0 0 1-1 1H37.2a1 1 0 0 1-.9-1v-1.8z" stroke="#CB3737" fill="#FFF"/><path d="M43.3 30.3l-2.8 2.8h7.4a1 1 0 0 0 1-1v-1.8h-5.6z" stroke="#CB3737" fill="#F66161"/><path d="M57.5 34.4h10.7c.5 0 1 .4 1 1v1.8H56.5v-1.8c0-.6.4-1 .9-1z" stroke="#CB3737" fill="#FFF"/><path d="M63.5 34.4l-2.8 2.8h8.4v-1.8a1 1 0 0 0-.9-1h-4.7z" stroke="#CB3737" fill="#F66161"/><path d="M56.6 37.2H69V39a1 1 0 0 1-.9 1H57.5a1 1 0 0 1-1-1v-1.8z" stroke="#CB3737" fill="#FFF"/><path d="M63.5 37.2l-2.8 2.7h7.5a1 1 0 0 0 1-.9v-1.8h-5.7z" stroke="#CB3737" fill="#F66161"/><path d="M57.5 42h10.7c.5 0 1 .4 1 1v1.8H56.5v-1.9c0-.5.4-.9.9-.9z" stroke="#CB3737" fill="#FFF"/><path d="M63.5 42l-2.8 2.8h8.4v-1.9a1 1 0 0 0-.9-.9h-4.7z" stroke="#CB3737" fill="#F66161"/><path d="M56.6 44.8H69v1.8a1 1 0 0 1-.9 1H57.5a1 1 0 0 1-1-1v-1.8z" stroke="#CB3737" fill="#FFF"/><path d="M63.5 44.8l-2.8 2.7h7.5a1 1 0 0 0 1-.9v-1.8h-5.7z" stroke="#CB3737" fill="#F66161"/><path d="M36.3 37.2H49V39a1 1 0 0 1-1 1H37.2a1 1 0 0 1-.9-1v-1.8z" stroke="#CB3737" fill="#FFF"/><path d="M43.3 37.2l-2.8 2.7h7.4a1 1 0 0 0 1-.9v-1.8h-5.6z" stroke="#CB3737" fill="#F66161"/><path stroke="#CB3737" fill="#FFF" d="M35 15.8h16V18H35zm-2.2 36.5H35V16.1c0-.5-.5-1-1-1-.6 0-1 .5-1 1v36.2zM51 52.3h2V16.1c0-.5-.4-1-1-1s-1 .5-1 1v36.2z"/><path d="M37 41.3a2.8 2.8 0 0 1 2 .8 2.6 2.6 0 0 1 .8 1.9v19a4 4 0 0 0 4 3.8h3.7" stroke="#CB3737"/><path d="M47.8 67.5h2.5v-2h-2.5a1 1 0 0 0-.7.2 1 1 0 0 0-.3.8c0 .6.4 1 1 1z" stroke="#CB3737" fill="#F0F2FF"/><path d="M48.2 49.6v6.1a2.5 2.5 0 0 0 2.5 2.5H53c1.1 0 2.2.5 3 1.3a4.3 4.3 0 0 1 1.3 3c0 2.4-2 4.3-4.3 4.3h-2.2" stroke="#CB3737"/><path d="M44.7 49.6v5.8c0 1.3 1.2 2.5 2.7 2.5H53" stroke="#CB3737"/><ellipse fill="#F0F2FF" cx="22.7" cy="68.5" rx="10.8" ry="1.7"/><path d="M21.5 11a6.4 6.4 0 0 0-4.6 2 6.5 6.5 0 0 0-1.9 4.5v.9a1.3 1.3 0 0 0-1 1.3c0 .7.5 1.3 1.2 1.3a6.5 6.5 0 0 0 7 5.1 6.5 6.5 0 0 0 5.7-6.4v-2.2c0-1.7-.6-3.4-1.9-4.6a6.4 6.4 0 0 0-4.5-1.9zm-11 27.6a10.1 10.1 0 0 1 5-9 10.1 10.1 0 0 1 10.3 0 10.1 10.1 0 0 1 5 9v1.6H28v8H14v-8h-3.6v-1.6z" stroke="#CB3737" fill="#FFF"/><ellipse fill="#CB3737" cx="20.3" cy="18.6" rx="1" ry="1"/><ellipse fill="#CB3737" cx="24.4" cy="18.6" rx="1" ry="1"/><ellipse fill="#FF8787" cx="18.2" cy="20.7" rx="1" ry="1"/><path d="M21 22.7c1 .5 2.4.5 3.4 0" stroke="#CB3737"/><path d="M28 15.8A7 7 0 0 0 21 9a7 7 0 0 0-7 6.8V18a5.5 5.5 0 0 0 3.7-3.1c3 2 7 1.5 10.2 1z" fill="#FFF"/><path d="M28 15.8A7 7 0 0 0 21 9a7 7 0 0 0-7 6.8V18a5.5 5.5 0 0 0 3.7-3.1c3 2 7 1.5 10.2 1zm-11.2-2c.3.5.8 1 1.4 1.4" stroke="#CB3737"/><path d="M10.5 50.5c0 1 .8 1.8 1.7 1.8s1.8-.8 1.8-1.8V40h-3.5v10.6z" stroke="#CB3737" fill="#FFF"/><path d="M14 40v-3.5" stroke="#CB3737"/><path d="M28 40v-3.5" stroke="#4550E5"/><path d="M18.9 28.4l2.4 3.3 2.4-3a9.9 9.9 0 0 0-2.9-.5l-2 .2z" stroke="#CB3737" fill="#FFF"/><path d="M21 32l1.8.4a.9.9 0 0 0 .7-.3 1 1 0 0 0 .2-.7l-.4-2.5-2.4 3.2zm-2.5-3.8l-.3 3c0 .4 0 .7.2.9.2.2.4.3.7.3L21 32l-2.4-3.8z" stroke="#CB3737" fill="#F66161"/><path d="M21 31.7v15.8" stroke="#CB3737"/><rect fill="#FFF" x="24.4" y="35.8" width="12.6" height="8.3" rx="1"/><rect stroke="#CB3737" x="24.4" y="35.8" width="12.6" height="8.3" rx="1"/><ellipse stroke="#CB3737" fill="#F66161" cx="30.4" cy="40.3" rx="1" ry="1"/><path d="M30.7 38.3l.4-.4" stroke="#CB3737"/><path d="M28.6 43.4h2.8c.4 0 .7.3.7.8v.8c0 .6-.5 1.1-1 1.1h-2a1 1 0 0 1-.8-.3 1.2 1.2 0 0 1-.4-.8v-.8c0-.5.4-.8.8-.8z" stroke="#CB3737" fill="#FFF"/><path d="M27.4 64.7h.5V48.2H14v16.5h5l.4-10.1c0-.9.8-1.5 1.6-1.5.9 0 1.6.6 1.7 1.5l.5 10h4.3z" fill="#F66161"/><path d="M27.4 64.7h.5V48.2H14v16.5h5l.4-10.1c0-.9.8-1.5 1.6-1.5.9 0 1.6.6 1.7 1.5l.5 10h4.3z" stroke="#CB3737"/><path d="M30.7 68.2a3.5 3.5 0 0 0-1-2.5 3.2 3.2 0 0 0-2.3-1H23v2.4c0 .6.5 1 1.1 1h6.6zm-9 0c0-2-1.5-3.5-3.3-3.5H14v2.4c0 .3 0 .5.3.8.2.2.5.3.8.3h6.5z" stroke="#CB3737" fill="#FFF"/></g></svg>);
        const designIcon = (<svg width="108" height="78" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="M84.5 40.2c0-16.1-10-30.6-25.1-36.6a40.4 40.4 0 0 0-43.8 9.3 39 39 0 0 0-7.5 43.5h72.8a38.9 38.9 0 0 0 3.6-16.2z" fill="#F0F2FF"/><path d="M5 56.5h78m-82.5 0H3m82 0h2.5" stroke="#8DD6F9"/><path d="M68 26.9c0-9.9-9.3-15-18-15-12.2 0-18.6 9.3-18.6 19.8 0 5.9 1.4 10 6.7 13.4v11.3h20v-6.6H63c2.8 0 5.3-1.7 5.3-4.5V40h3c4.2-.2-3.2-11.3-3.2-13z" fill="#FFF"/><path d="M68 26.9c0-9.9-9.3-15-18-15-12.2 0-18.6 9.3-18.6 19.8 0 5.9 1.4 10 6.7 13.4v11.3h20v-6.6H63c2.8 0 5.3-1.7 5.3-4.5V40h3c4.2-.2-3.2-11.3-3.2-13z" stroke="#8DD6F9"/><path d="M26.8 9a18.6 18.6 0 0 1 25.6-.5 18 18 0 0 1 1.1 25.3A18.6 18.6 0 0 1 28 35.7l-3 3-2.4-2.4 3-3A18 18 0 0 1 26.8 9z" stroke="#8DD6F9" fill="#FFF"/><ellipse fill="#CAEDFE" transform="rotate(-45 39.8 21.8)" cx="39.8" cy="21.8" rx="14.4" ry="14.2"/><path d="M20.6 36a1.2 1.2 0 0 1 1.7 0l3 3c.5.5.5 1.2 0 1.7l-9.2 9a3.4 3.4 0 0 1-5.6-1.4 3.3 3.3 0 0 1 .8-3.2l9.3-9z" fill="#CAEDFE"/><path d="M20.6 36a1.2 1.2 0 0 1 1.7 0l3 3c.5.5.5 1.2 0 1.7l-9.2 9a3.4 3.4 0 0 1-5.6-1.4 3.3 3.3 0 0 1 .8-3.2l9.3-9z" stroke="#8DD6F9"/><ellipse stroke="#8DD6F9" transform="rotate(-45 39.8 21.8)" cx="39.8" cy="21.8" rx="14.4" ry="14.2"/><rect fill="#FFF" x="34.8" y="16.8" width="10" height="9.9" rx=".8"/><rect stroke="#8DD6F9" x="34.8" y="16.8" width="10" height="9.9" rx=".8"/><path d="M44 16.8v-2.5m-4.2 2.5v-2.5m-4.2 2.5v-2.5M44 29.3v-2.5m-4.2 2.5v-2.5m-4.2 2.5v-2.5m11.7-9h-2.5m2.5 4h-2.5m2.5 4.2h-2.5m-10-8.3h-2.5m2.5 4.2h-2.5m2.5 4.1h-2.5m8.4-2.5H38m24 8.3a.6.6 0 0 1-.6.6.6.6 0 0 1-.6-.6c0-.4.3-.6.6-.6a.6.6 0 0 1 .5.1l.1.5z" stroke="#8DD6F9"/></g></svg>);
        return (
            <section className="Skills">
                <Section
                    className='leftSection'
                    title={'Android Development'}
                    text={'I enjoy building high-quality Android Applications, designing and layouting screens in Material Design.'}
                    icon={androidIcon}>
                    <AreaOfExpertise title='Android'>
                        Java, Scala, Kotlin, Flutter, Functional Programming
                    </AreaOfExpertise>
                    <AreaOfExpertise title='Advanced Android'>
                        RXJava, Custom Views, Model View Controller
                    </AreaOfExpertise>
                </Section>

                <Section
                    className='mainSection'
                    title={'Full-Stack Development / Design'}
                    text={'I like creating web pages from scratch, designing, coding mockups and turning them into functional React applications.'}
                    icon={webIcon}>
                    <AreaOfExpertise title='Frontend'>
                        HTML, CSS, JavaScript, ReactJS, GatsbyJS, WebGL, Webpack
                    </AreaOfExpertise>
                    <AreaOfExpertise title='Backend'>
                        Rust, Golang, NodeJS
                    </AreaOfExpertise>
                    <AreaOfExpertise title='Design'>
                        Sketch
                    </AreaOfExpertise>
                </Section>

                <Section
                    className='rightSection'
                    title={'devOps'}
                    text={'My Apps and Web-Services are deployed onto my Kubernetes cluster or automatically pushed to the Google Play Store.'}
                    icon={designIcon}>
                    <AreaOfExpertise title='DevOps'>
                        Kubernetes, CI/CD, Docker, Serverless
                    </AreaOfExpertise>
                    <AreaOfExpertise title='Infrastructure'>
                        Bare-Metal Server Administration, Amazon Web Services
                    </AreaOfExpertise>
                </Section>
            </section>
        );
    }
}

export default Skills;
