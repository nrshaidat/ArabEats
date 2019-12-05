import React, {Component} from 'react';
import Dish from "./Dish";
import Grid from '@material-ui/core/Grid';
import './List.css'

class List extends Component {
  renderList() {
    const items = this.props.items.map(item => {
        return <Dish photo={item.photo} name={item.name} />
      return <li photo = {item.photo} key={item.name}>{item.name}</li>
    });
    if (items.length == 0) {
      return (<div style={{ marginTop: "100px"}}><h2>No Meals that Match The Filters!</h2></div>);
    } else {
      return items;
    }
  }

  render() {
    return (
    <div className= "container" >
          {this.renderList()}
    </div>
    );
  }
}

export default List;
