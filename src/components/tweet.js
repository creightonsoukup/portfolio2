import React from 'react';

const Tweet = (props) => {
  const text = props.tweet.text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
  const url = props.tweet.entities.urls[0].expanded_url
  const miniUrl = props.tweet.entities.urls[0].url

  return (
    <li>
      <p>{text}</p>
      <a href={url}>{miniUrl}</a>
    </li>
  )
}

export default Tweet
