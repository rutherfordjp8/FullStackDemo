import React from 'react';

var ListItem = (props) =>  (
  <div>
    <li className='list-item'>
      <div className='todo-text'>
        { props.item.todoText }
      </div>
      <img src='./delete_icon.png' />
    </li>
  </div>
)

// This line of code is an ES6 feature. It allows the component to be exported so that
// other files can import it.
export default ListItem;