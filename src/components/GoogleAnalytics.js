import React from 'react';
import ReactGA from 'react-ga';

export const initializeReactGA = () => {
    ReactGA.initialize('G-TLJDB3Q177');
    ReactGA.pageview(window.location.pathname + window.location.search);
};


