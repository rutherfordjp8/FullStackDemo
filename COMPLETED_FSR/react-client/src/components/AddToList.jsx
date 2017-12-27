import React from 'react';

class AddToList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: '',
    }

    this.onChange = this.onChange.bind(this);
  }

  /*
    Updates the state of newItem to match what the user types in the input box.
    this.state.newItem is used below in the button's onClick function.
  */
  onChange(e) {
    let newItem = e.target.value;

    this.setState({
      newItem: newItem
    })
  }

  render() {
    return (
      <div>
        <input type='text' onChange={this.onChange}/>

        <button
          onClick={ () => {this.props.addItem(this.state.newItem)} }
        >
          Add to List
        </button>
      </div>
    )
  }
}

// This line of code is an ES6 feature. It allows the component to be exported so that
// other files can import it.
export default AddToList;