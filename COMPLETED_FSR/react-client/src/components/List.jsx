import React from 'react';
import ListItem from './ListItem.jsx';

// This is a stateless component. When a component does not need state then you do not need to make it a class.
// Note that this file does still import React though.
var List = (props) =>  (
  <div>
    <ul id='list'>
      {
        props.list.map((item, index) => {
          return <ListItem item={item} key={index}/> // Using index as key here is not proper practice. Every object should
        })                                           // have a key property that is unique.
      }
    </ul>
  </div>
)

// This line of code is an ES6 feature. It allows the component to be exported so that
// other files can import it.
export default List;