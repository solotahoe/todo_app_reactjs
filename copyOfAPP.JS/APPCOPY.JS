import React from "react";
import "./App.css";
import About from "./about";
import Shop from "./shop";
import Nav from "./nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" exact component={home} />
                    <Route path="/about" component={About} />
                    <Route path="/shop" component={Shop} />
                </Switch>
            </div>
        </Router>
    );
}

const home = () => (
    <div>
        <h1>home page pozo </h1>
    </div>
);

export default App;