import React from 'react';
import './App.css';
import Router from './routes/index.routes';
import { BrowserRouter, useHistory } from 'react-router-dom';
import NavigationBar from './screens/NavigationBar';
import {connect} from 'react-redux';
import { result } from 'lodash';
import ErrorBoundaries from './screens/ErrorBoundaries';
import {productByCategory, searchingFunction} from './redux/thunks/onboarding.thunks';
function App(props) {
  console.log('props', props);
  const{categories, productByCategory, searchingFunction} = props;

  return (
    <>
        <BrowserRouter>
        <NavigationBar  categories={categories} 
        productByCategory={productByCategory} searchingFunction={searchingFunction}/>
          <Router />
        </BrowserRouter>
    </>

  );
}

const mapDispatchToProps = (dispatch) => ({
  productByCategory: (selectedCategory) => dispatch(productByCategory(selectedCategory)),
  searchingFunction: (searchTerm) => dispatch(searchingFunction(searchTerm))
});
const mapStateToProps = (state) => ({
  categories: result(state, 'categories.data', {})
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
