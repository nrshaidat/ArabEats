import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import List from "./List";
import * as _ from "lodash";
import './FilteredList.css';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    //TODO (FilteredList): Add an additional state variable within this.state called "meat" and set it to a default value
    this.state = {
      meatSearch: "",
      grainSearch:"",
      meat: "All Meats",
      grain:"All Grains",
      sort:"No Order",
    };
  }


    /*
     * This function should determine whether the item being passed in matches the grain
     * that we are filtering on. Remember that the selected grain we are filtering on is stored
     * in this.state!
     * Input: An element from your List component
     * Output: true or false
     */
    matchesFiltergrain = item => {
        if ("All Grains" === this.state.grain) {
            return true;
        } else if(item.grain === this.state.grain) {
            return true;
        }
        return false;

      // TODO: add conditions to check if item grain is equal to selected grain
    }
  /*
   * This function gets called every time a new filter meat is selected in the dropdown. Your job is to handle the state
   * changes that should occur when a new filter meat is selected.
   */
  onSelectFiltermeat = event => {
      this.setState({
            meat: event
          });
  }
  /*
   * This function gets called every time a new filter meat is selected in the dropdown. Your job is to handle the state
   * changes that should occur when a new filter meat is selected.
   */
  onSelectFiltergrain = event => {
      this.setState({
            grain: event
          });
  }
  onSelectSort=(event)=> {
      this.setState({
          sort: event
      });
  }
  sortPop = (item1, item2) => {
    if (this.state.sort === "No Order") {
      return 0;
    } else if (this.state.sort === "Popularity"){
      return item1.popularity - item2.popularity;
    }
  }

  /*
   * This function should determine whether the item being passed in matches the meat
   * that we are filtering on. Remember that the selected meat we are filtering on is stored
   * in this.state!
   * Input: An element from your List component
   * Output: true or false
   */
  matchesFiltermeat = item => {
      if ("All Meats" === this.state.meat) {
          return true;
      } else if(item.meat === this.state.meat) {
          return true;
      }
      return false;

    // TODO: add conditions to check if item meat is equal to selected meat
  }



      /*
       * The function is passed into a builtin filter() function. filter() calls this function on every element
       * in the list. If this fucntion returns true for a given element, filter() will add that element to its
       * return list.
       */
      filterAndSearch = item => {
          // Checks if the current search term is contained in this item
  if ((this.state.meat === "All Meats") && (this.state.grain === "All Grains")) {
    return (item.meat.toLowerCase().search(this.state.meatSearch) !== -1) &&
    (item.grain.toLowerCase().search(this.state.grainSearch) !== -1);
} else if ((item.meat === this.state.meat) && (this.state.grain === "All Grains")) {
    return item.meat.toLowerCase().search(this.state.meatSearch) !== -1;
} else if ((this.state.meat === "All Meats") && (item.grain === this.state.grain)) {
    return item.grain.toLowerCase().search(this.state.grainSearch) !== -1;
} else if ((item.meat === this.state.meat) && (item.grain === this.state.grain)) {
    return (item.meat.toLowerCase().search(this.state.meatSearch) !== -1) &&
    (item.grain.toLowerCase().search(this.state.grainSearch) !== -1);
  }
  return 0;
}

  render() {
    return (
      <div className="filter-list">
        <h1>-</h1>
        <div className = "filterButton" style ={{justify: "center", float: "center", display: "flex"}}>
        <DropdownButton title={this.state.meat} id="typeDropdown">
          <Dropdown.Item eventKey="All Meats" onSelect={this.onSelectFiltermeat}>
            All
          </Dropdown.Item>
          <Dropdown.Item eventKey="Lamb" onSelect={this.onSelectFiltermeat}>
            Lamb
          </Dropdown.Item>
          <Dropdown.Item eventKey="Chicken" onSelect={this.onSelectFiltermeat}>
            Chicken
          </Dropdown.Item>
          <Dropdown.Item eventKey="Cow" onSelect={this.onSelectFiltermeat}>
            Cow
          </Dropdown.Item>
      </DropdownButton>

         <DropdownButton title={this.state.sort} id="typeDropdown" >
          <Dropdown.Item eventKey="No Order" onSelect={this.onSelectSort}>None
          </Dropdown.Item>
          <Dropdown.Item eventKey="Popularity" onSelect={this.onSelectSort}>Popularity</Dropdown.Item>
        </DropdownButton>
        <DropdownButton title={this.state.grain} id="typeDropdown">
            <Dropdown.Item eventKey="All Grains" onSelect={this.onSelectFiltergrain}>
            All
          </Dropdown.Item>
          <Dropdown.Item eventKey="Rice" onSelect={this.onSelectFiltergrain}>
            Rice
          </Dropdown.Item>
          <Dropdown.Item eventKey="Pasta" onSelect={this.onSelectFiltergrain}>
            Pasta
          </Dropdown.Item>
          <Dropdown.Item eventKey="Bread" onSelect={this.onSelectFiltergrain}>
            Bread
          </Dropdown.Item>
          </DropdownButton>
          </div>
        <List items={this.props.items.filter(this.filterAndSearch)} />
      </div>
    );
  }
}

export default FilteredList;
