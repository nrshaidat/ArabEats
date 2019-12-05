import React, { Component } from 'react';
import Popup from './Popup';
import './Welcomepopup.css';


class Welcomepopup extends Component {

  constructor(props){
super(props);
this.state = { showPopup: true };
}

  togglePopup() {
this.setState({
     showPopup: !this.state.showPopup
});
 }

  render() {
return (
<div>
<button onClick={this.togglePopup.bind(this)}> Help</button>

{this.state.showPopup ?
<Popup
          text='Welcome to Arab Eats, your new favorite guide to decadent and deluctable meals eaten in the Middle East. You can filter your meat and grain preferences to discover a meal that best fits your dietary preferences! Click "Close Button" to start your search!'
          closePopup={this.togglePopup.bind(this)}
/>
: null
}
</div>

);
}
}

export default Welcomepopup;
