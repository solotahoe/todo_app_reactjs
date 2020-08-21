import React from "react";
import "./App.css";
import About from "./ownProject/about";
import AboutPage from "./ownProject/aboutPage";
import Shop from "./ownProject/shop";
import ItemDetails from "./ownProject/itemdetails";
import Nav from "./nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {


    return (
        <Router>
            <div className="App">
                <About />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/shop" exact component={Shop} />
                    <Route path="/shop/:id" component={ItemDetails} />
                </Switch>
            </div>
        </Router>

    );

}
const Home = () => (
    <div>
        <h1>home page pizo </h1>
    </div>
);

export default App;
