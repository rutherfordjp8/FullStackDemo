import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import AddToList from './components/AddToList.jsx';

// Only use a class when you need to make a stateful component.
// Typically your most parent component(this file) will always be stateful.
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: window.fakeData,  // If database throws error. The app will still display the fake data.
    }

    // Always bind your function so that they get access to this.state and the other functions that
    // you bind.
    this.addItem = this.addItem.bind(this);
    this.sendItemToDB = this.sendItemToDB.bind(this);
    this.getItemsFromDB = this.getItemsFromDB.bind(this);
  }

  // Runs this when the component is first mounted. (when the webpage is initially loaded).
  // You do not need to bind this function as it is a react built in function and is already bound.
  componentDidMount() {
   this.getItemsFromDB();
  }

  /*
    Gets all items that were stored in the database
    and sets them to this.state.items(our list array)
  */
  getItemsFromDB () {
    $.ajax({
      type: 'GET',
      url: '/items',
      success: (data) => {
        console.log('succesful get', data);
        this.setState({
          items: data
        });
      },
      error: function(err) {
        console.log(err);
      }
    });
  }

  /*
    Adds new todoItem to this.state.items(our list array)
    Then calls sendItemToDB to store it in the database.
  */
  addItem (newItem) {
    let items = this.state.items;

    let newItemObj = {todoText: newItem};

    items.push(newItemObj);

    this.setState({
      items:items
    });

    this.sendItemToDB(newItemObj);
  }

  /*
    Send a new item to the database.
    Success function will call getItemsFromDB because
    The object added to state does not have the id of
    where it was stored in the database until it gets
    the objects back after adding them.
  */
  sendItemToDB (newItem) {
    $.ajax({
      type: 'POST',
      url: '/items',
      data: newItem,
      success: (data) => {
        this.getItemsFromDB();
      },
      error: (err) => {
        console.log('Error', err);
      }
    })
  }

  render() {
    return (
      <div>
        <h1>To-Do List</h1>
        <AddToList addItem={this.addItem}/>
        <List list={this.state.items}/>
      </div>
    )
  }
}

/*
  If you look in the dist folder there is a index.html.
  The index.html has a <div id="root"> </div>
  ReactDOM.renders will then render the <App /> Component
  To that div tag.
*/
ReactDOM.render(
  <App />,
  document.getElementById('root')
);