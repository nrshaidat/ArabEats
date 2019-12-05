import React, { Component } from "react";
import "./App.css";
import FilteredList from "./FilteredList";
import Counter from "./Counter";
import Welcomepopup from "./Welcomepopup";

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'
import List from "./List";


const produce = [
    { name: "Malfoof", meat: "Lamb" ,grain: "Rice", popularity: 8, photo:"https://bigoven-res.cloudinary.com/image/upload/d_recipe-no-image.jpg,t_recipe-480/syrian-cabbage-rolls-mihshee-malfoo-3.jpg", ref: "https://www.mamaslebanesekitchen.com/meats/stuffed-cabbage-rolls-recipe-malfouf/"},
    { name: "Warak Dawali", meat: "Lamb", grain: "Rice", popularity: 9,  photo: "https://feelgoodfoodie.net/wp-content/uploads/2017/06/Lebanese-Stuffed-Grape-Leaves-30.jpg", ref: "https://www.food.com/recipe/waraq-al-dawali-stuffed-grape-leaves-470879#activity-feed"},
    { name: "Molokhia", meat: "Chicken", grain: "Rice", popularity: 10,  photo: "https://www.saveur.com/sites/saveur.com/files/egyptian-molokhia-max-falkowitz_2000x1500.jpg", ref:"https://www.foodnetwork.ca/recipe/egyptian-molokhia/10444/"},
    { name: "Freekeh", meat: "Chicken", grain: "Freekeh", popularity: 5,  photo: "https://www.munatycooking.com/wp-content/uploads/2012/07/freekeh-with-chicken1.jpg", ref: "https://cooking.nytimes.com/recipes/1020420-freekeh-with-chicken-almonds-and-yogurt" },
    { name: "Mansaf", meat: "Lamb" , grain: "Rice", popularity: 0,  photo: "https://cdn.tasteatlas.com/images/dishes/137ad60f0fc649ceb83b14c5ab5e5a76.jpg?w=600&h=450", ref: "https://www.food.com/recipe/jordanian-mansaf-484562"},
    { name: "Maqlooba", meat: "Chicken",grain: "Rice", popularity: 3,  photo: "https://www.sooperchef.pk/wp-content/uploads/2018/04/maqlooba-recipe.jpg", ref: "https://cooking.nytimes.com/recipes/1018535-maqluba-upside-down-chicken-and-rice"},
    { name: "Koshery", meat: "Cow", grain: "Pasta", popularity: 0.5, photo: "https://amiraspantry.com/wp-content/uploads/2018/05/koshari-IG.png", ref:"https://www.allrecipes.com/recipe/173422/egyptian-koshary/"  },
    { name: "Oozy", meat: "Chicken",grain: "Rice", popularity: 6,   photo: "https://i2.wp.com/travelthisearth.com/wp-content/uploads/2012/03/Oozie-from-Jordan-1.jpg?fit=1632%2C1224", ref: "https://www.food.com/recipe/oozy-palestinian-middle-eastern-436114" },
    { name: "Kufta", meat: "Lamb", grain: "Bread", popularity: 1,  photo: "https://images.squarespace-cdn.com/content/v1/58dff86a1b631bf0ffd1f4c5/1491081834653-8S6HUFUFJNL3D3GFOOOP/ke17ZwdGBToddI8pDm48kGGYz5yRj10Fq0iXgiqOxKp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URIrWBVayxiabYjYokBtQBtok4GjERcHrz6Dd0mvSENfS9mayiR-vA71CXrLbFBG1g/Kufta.jpg", ref: "https://www.myrecipes.com/recipe/grilled-lamb-kufta-kebabs" },
    { name: "Kebabs", meat: "Lamb",grain: "Bread",  popularity: 7,  photo: "https://www.kitchensanctuary.com/wp-content/uploads/2014/09/Greek-Lamb-Souvlaki-Kebabs-Recipe-square-FS.jpg", ref: "https://www.simplyrecipes.com/recipes/beef_kebabs/"},
    { name: "Shawerma", meat: "Chicken", grain: "Bread", popularity: 2,   photo: "https://hips.hearstapps.com/vidthumb/images/190130-chicken-shwarma-horizontal-1551285400.png", ref: "https://www.delish.com/cooking/recipe-ideas/a26092675/best-chicken-shawarma-recipe/"   },
    { name: "Sfikhas", meat: "Cow",grain: "Bread",  popularity: 4,   photo: "https://www.196flavors.com/wp-content/uploads/2014/11/lahm-bi-ajeen-3.jpg", ref:"https://www.eatyourbooks.com/library/recipes/1838254/open-face-meat-bourekas-sfikha" }
  ];

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilteredList items={produce} />
        <Counter/>

        <Navbar bg="dark" expand="lg" variant = "dark" fixed="top">
  <Navbar.Brand href="#home">Arab Eats</Navbar.Brand>
    <Nav className="mr-auto">

    </Nav>
  
</Navbar>
    <Welcomepopup/>
      </div>
    );
  }
}


export default App;
