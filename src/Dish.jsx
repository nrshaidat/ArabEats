import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import './Dish.css';
import Link from '@material-ui/core/Link';
class Dish extends Component {
    constructor(props) {
    super(props);
    // State initialization
    this.state = {
    name: "",
    ref:""
    };
    }

  render() {
    return (
    <div className="card">
        <img src={this.props.photo} width="400" height="300" />
        <Link href={this.props.ref}>
        {this.props.name}
      </Link>
     </div>
    );
  }
}

export default Dish;
