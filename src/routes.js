import React from "react";
import { Switch, Route } from 'react-router-dom';
import AddResource from './components/addResources/AddResource';
import Backpack from './components/backpack/Backpack';
import Gear from './components/gear/Gear';
import Auth from './components/auth/Auth';

export default (
    <Switch>
        <Route exact path="/" component={Auth} />
        <Route path="/backpack" component={Backpack} />
        <Route path="/resource" component={AddResource} />
        <Route path="/gear" component={Gear} />
    </Switch>
)