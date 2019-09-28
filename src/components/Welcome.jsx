import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import 'typeface-catamaran';
import 'typeface-source-code-pro';
import './Welcome.css';

export default function Welcome() {
    function onChevronClick() {
        window.scrollTo({
            top: 0.93 * window.innerHeight,
            left: 0,
            behavior: 'smooth'
        });
    }

    const data = useStaticQuery(graphql`
        query IndexQuery {
            allContentfulIndexContent(limit: 1) {
                edges {
                    node {
                        title
                        subtitle1
                        subtitle2
                    }
                }
            }
        }
    `).allContentfulIndexContent.edges[0].node;

    return (
        <header className='Welcome'>
            <div className='Welcome-text'>
                <h1>
                    <span
                        dangerouslySetInnerHTML={{
                            __html: data.title
                        }}
                    />
                </h1>
                <h2 className='aboutme'>
                    <span
                        dangerouslySetInnerHTML={{
                            __html: data.subtitle1
                        }}
                    />
                    <br />
                    <span
                        dangerouslySetInnerHTML={{
                            __html: data.subtitle2
                        }}
                    />
                </h2>
                <nav className='chevron'>
                    <svg
                        tabIndex='0'
                        onClick={onChevronClick}
                        aria-label='Scroll to Skills Section'
                        xmlns='http://www.w3.org/2000/svg'
                        width='50'
                        height='50'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='#fff'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        className='feather feather-chevron-down'
                    >
                        <polyline points='6 9 12 15 18 9'></polyline>
                    </svg>
                </nav>
            </div>
        </header>
    );
}
