import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';


const AboutPage = () => {
  return(
    <>
      <Layout>
        <h1>About Me</h1>
        <p>I currently copy and paste full-time on Udemy.</p>
        <p> <Link to='/contact'>Want to work with me ? React Out</Link> </p>
      </Layout>
    </>
  )
}

export default AboutPage;