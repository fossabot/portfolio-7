import * as React from 'react';

import 'typeface-catamaran';
import './Contact.css';

class Contact extends React.Component {
    render() {
        return (
            <section className="Contact">
                <h3>Contact</h3>
                <p>Although I am not currently looking for new opportunities feel free to contact me about anything you’re working on.</p>
                <a className="contact-source" href="mailto:hello@gerogerke.de">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeLinecap="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <p>hello@gerogerke.de</p>
                </a>
                <a className="contact-source" href="https://www.linkedin.com/in/gero-gerke-36a0a3142/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1" strokeLinecap="round" strokeLinecap="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    <p>Gero Gerke</p>
                </a>
            </section>
        );
    }
}

export default Contact;
