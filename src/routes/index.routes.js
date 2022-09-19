import React from 'react';
import ProductDetail from '../pages/ProductDetail.page';
import {Route, Switch} from 'react-router-dom';
import ProductPage from '../pages/Product.page';
 const Landing = () => {
    return (
    <Switch> 
        <Route path={'/'} component={Main}/>
    </Switch> 
    )
}
const Main = () => {
    return(
    <Switch>
        <Route path='/product' component={ProductPage}/>
        <Route exact path='/productDetail' component={ProductDetail} />
    </Switch>
    )
}
export default Main;
