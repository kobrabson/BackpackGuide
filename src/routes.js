import React from "react";
import { Switch, Route } from 'react-router-dom';
import AddResource from './components/addResources/AddResource';
import Backpack from './components/backpack/Backpack';
import Gear from './components/gear/Gear';
import Auth from './components/auth/Auth';
import about from './components/about/About';
import Home from './components/Home/Home';

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/about' component={about} />
        <Route path="/Auth" component={Auth} />
        <Route path="/backpack" component={Backpack} />
        <Route path="/gear" component={Gear} />
        <Route path="/resource" component={AddResource} />
    </Switch>
)