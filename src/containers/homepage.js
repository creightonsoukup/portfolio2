import React, { Component } from 'react';
import Header from '../components/header'
import Projects from '../components/project'
import HomepageSection from '../components/homepage_section';
import Contact from '../components/contact'
import PageFooter from '../components/page_footer';
import IntroText from '../components/intro_text';
import CLoader from '../components/c_loader';
import _ from 'lodash';

 class Homepage extends Component {
   constructor(props) {
     super(props);

     this.state = {
       activeNav: 'top',
       contactName: '',
       contactSubject: '',
       contactEmail: '',
       contactBody: '',
       toggleVideo: false,
       showLoader: true
     }
   }
   render() {
     const loader = _.debounce(() => {this.setState({showLoader: false})}, 3000)
     loader()
     return (
       <div className='homepage'>
        <div className='full-screen'>
          { this.state.showLoader &&
            <CLoader/>
          }
          <Header/>
          <IntroText/>
        </div>
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
