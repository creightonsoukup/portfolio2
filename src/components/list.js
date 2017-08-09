import React from 'react';
import ListItem from './list_item';

const List = (props) => {

  const renderList = (listItem) => {
    return <ListItem key={props.nav.indexOf(listItem)}listItem={listItem}/>
  }

  return (
    <ul className='list'>
      {props.nav.map(renderList)}
    </ul>

  )
}

export default List;
