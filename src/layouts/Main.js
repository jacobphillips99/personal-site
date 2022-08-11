import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// import Analytics from '../components/Analytics';
import NavigationHeader from '../components/NavigationHeader';
import SideBar from '../components/SideBar';
// import ScrollToTop from '../components/ScrollToTop';

const Main = (props) => (
  <HelmetProvider>
    {/* <Analytics /> */}
    {/* <ScrollToTop /> */}

    {/* helemet adjusts HTML header */}
    <Helmet titleTemplate="%s | Jacob Phillips" defaultTitle="Jacob Phillips" defer={false}>
      {props.title && <title>{props.title}</title>}
      <meta name="description" content={props.description} />
    </Helmet>

    {/* navigation header and side bar */}
    <div id="wrapper">
      <NavigationHeader />
      <div id="main">
        {props.children}
      </div>
      {props.fullPage ? null : <SideBar />}
    </div>
  </HelmetProvider>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "Jacob Phillips's personal website.",
};

export default Main;
