import React from 'react';
import List from './list';
import SectionHeader from './section_header';

const TweetBox = (props) => {
  return (
    <section className='tweetbox'>
      <SectionHeader header={'tweets'}/>
      <List content={'twitter'} tweets={props.tweets}/>
    </section>
  )
}

export default TweetBox
