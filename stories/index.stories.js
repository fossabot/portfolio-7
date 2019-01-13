import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Loading from '../src/components/Loading.jsx';
import Welcome from '../src/components/Welcome.jsx';
import Skills from '../src/components/Skills.jsx';
import Contact from '../src/components/Contact.jsx';
import Footer from '../src/components/Footer.jsx';

storiesOf('Contact', module)
    .add('default', () => <Contact/>);

storiesOf('Loading', module)
    .add('default', () => <Loading/>);

storiesOf('Welcome', module)
    .add('default', () => <Welcome/>);

storiesOf('Skills', module)
    .add('default', () => <Skills/>);

storiesOf('Footer', module)
    .add('default', () => <Footer/>);