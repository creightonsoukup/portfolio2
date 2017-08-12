import React from 'react';
import ListItem from './list_item';

const List = (props) => {

  const renderList = (listItem) => {
    return <ListItem key={props.nav.indexOf(listItem)}listItem={listItem}/>
  }

  if(props.content == 'twitter') {
    return (
      <div className='twitter'>
        <p>{'coming soon...'}</p>
      </div>
    )
  } else {
    return (
      this.props.nav.renderList(listItem)
    )
  }
}

export default List;
