import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Principal from '../pages/principal';
import Order from '../pages/order';
import OrdersHistory from '../pages/OrdersHistory';
import ChefTables from '../pages/chefTables';
import WaiterTables from '../pages/waiterTables';

function Opp() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Principal} />
                <Route exact path="/order" component={Order} />
                <Route exact path="/orderHistory" component={OrdersHistory} />
                <Route exact path="/chefTables" component={ChefTables} />
                <Route exact path="/waiterTables" component={WaiterTables} />
            </Switch>
        </BrowserRouter>
    )
}

export default Opp;