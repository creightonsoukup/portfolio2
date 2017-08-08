import React, { Component } from 'react';
import Header from '../components/header'
import Projects from '../components/projects'
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
       showLoader: true,
       openNav: false
     }

     this.toggleNav = this.toggleNav.bind(this)
   }

   toggleNav() {
     this.setState({openNav: !this.state.openNav})
   }
   render() {
     const loader = _.debounce(() => {this.setState({showLoader: false})}, 3000)
     const projectDemo = {}
     projectDemo.links = ['https://www.google.com','https://github.com/creightonsoukup']
     projectDemo.id = 1
     projectDemo.screenUrl = 'https://s3.amazonaws.com/creightonsoukup/portfolio-site/screen.jpg'
     projectDemo.name = 'Madison Mckinley Designs'
     projectDemo.subheader = 'fullstack ecommerce solution including development, design, and content creation'
     projectDemo.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, ullamco laboris nisi ut aliquip ex ea commodo consequat.'
     projectDemo.links = ['https://www.google.com','https://github.com/creightonsoukup']
     const projects = []
     projects.push(projectDemo)
     loader()
     return (
       <div className='homepage'>
        <div className='full-screen'>
          { this.state.showLoader &&
            <CLoader/>
          }
          <Header toggleNav={this.toggleNav} openNav={this.state.openNav}/>
          <IntroText/>
        </div>
        <Projects projects={projects}/>
        <Contact/>
        <PageFooter />
       </div>
     )
   }
 }

 export default Homepage
