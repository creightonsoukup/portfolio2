import React from 'react';
import ListItem from './list_item';
import Tweet from './tweet'

const List = (props) => {

  const renderList = (listItem) => {
    return <ListItem key={props.nav.indexOf(listItem)}listItem={listItem}/>
  }

  const renderTweets = (tweet) => {
    return <Tweet key={tweet.id} tweet={tweet} />
  }

  if(props.content == 'twitter') {
    return (
      <ul>
        {props.tweets.map(renderTweets)}
      </ul>
    )
  } else if (props.content == 'blog') {
    return (
      <div className='coming-soon'>
        <p>{'coming soon...'}</p>
      </div>
    )
  } else {
    return (
      props.nav.renderList(listItem)
    )
  }
}

export default List;
