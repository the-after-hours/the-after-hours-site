import React from 'react';
import Link from 'gatsby-link';

const Footer = () => (
  <div
    style={{
      background: 'grey',
      color: '#FFF',
      display: 'flex',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1rem',
      }}
    >
      <p>
        <span style={{fontWeight: 800}}>
          {'<>'}
        </span>
        {' with '}
        <span style={{color: '#F00'}}>
        {'❤'}
        </span>️
        {' by '}
        <a
          href="https://github.com/the-after-hours"
          style={{color: '#FFF'}}
        >
          {'@theafterhours'}
        </a>
      </p>
    </div>
  </div>
);

export default Footer;
