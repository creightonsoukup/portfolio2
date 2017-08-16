import React, { Component } from 'react';
import Header from '../components/header'
import Projects from '../components/projects'
import Contact from '../components/contact'
import TweetBox from '../components/tweet_box'
import PageFooter from '../components/page_footer';
import IntroText from '../components/intro_text';
import CLoader from '../components/c_loader';
import _ from 'lodash';
import Navbar from '../components/navbar'
import BlogPreview from '../components/blog_preview'
import { connect } from 'react-redux'
import {getTwitterPosts} from '../actions/index'
import projects from '../assets/projects'

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
     this.submitTicket = this.submitTicket.bind(this)
   }

   componentWillMount() {
     this.props.getTwitterPosts()
   }


   toggleNav() {
     this.setState({openNav: !this.state.openNav})
   }

   submitTicket(ticket) {
     console.log(ticket)
   }


   render() {
     const tweets = this.props.tweets[0]
     const loader = _.debounce(() => {this.setState({showLoader: false})}, 3000)
     loader()
     return (
       <div className='homepage'>
        <Navbar toggleNav={this.toggleNav} openNav={this.state.openNav}/>
        <div className='full-screen'>
          { this.state.showLoader &&
            <CLoader/>
          }
          <Header/>
          <IntroText/>
        </div>
        <Projects projects={projects}/>
        { tweets && <TweetBox tweets={tweets}/>}
        <BlogPreview />
        <Contact submitTicket={this.submitTicket}/>
        <PageFooter />
       </div>
     )
   }
 }

 function mapStateToProps({tweets}) {
   return { tweets }
 }

 export default connect(mapStateToProps, {getTwitterPosts})(Homepage)
