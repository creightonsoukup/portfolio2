import React, { Component } from 'react';
import Header from '../components/header'
import Projects from '../components/project'
import HomepageSection from '../components/homepage_section';
import Contact from '../components/contact'
import PageFooter from '../components/page_footer';
import IntroText from '../components/intro_text'

 class Homepage extends Component {
   render() {
     return (
       <div className='homepage'>
        <Header/>
        <IntroText/>
        <Projects/>
        <HomepageSection />
        <HomepageSection />
        <Contact/>
        <PageFooter />
       </div>
     )
   }
 }

 export default Homepage
