import React from 'react';

const Tweet = (props) => {
  const text = props.tweet.text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
  const url = props.tweet.entities.urls[0].expanded_url
  const miniUrl = props.tweet.entities.urls[0].url
  const dateString = Date.parse(props.tweet.created_at)
  const date = new Date(dateString)
  let day = date.getDate()
  let month = date.getMonth()
  let year = date.getFullYear()
  switch(month){
    case 1: month= "January";
      break;
    case 2: month= "February";
        break;
    case 3: month= "March";
        break;
    case 4: month= "April";
        break;
    case 5: month= "May";
        break;
    case 6: month= "June";
        break;
    case 7: month= "July";
        break;
    case 8: month= "August";
        break;
    case 9: month= "September";
        break;
    case 10: month= "October";
        break;
    case 11: month= "November";
        break;
    case 12: month= "December";
        break;
  }

  return (
    <li className='tweet'>
        <span>{`${month} ${day}, ${year}` }</span>
        <p>{text}</p>
        <a href={url}>{miniUrl}</a>
    </li>
  )
}

export default Tweet
