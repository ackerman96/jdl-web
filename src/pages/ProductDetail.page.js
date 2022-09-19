import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductDetail from '../screens/ProductDetail';
import * as api from '../utils/api.util';
import { result } from 'lodash';
// import { saveData } from '../redux/reducers/productDetail.reducer';

class ProductDetailPage extends Component {
  
  componentDidMount () {
    console.log('product detail page');
  };

  render = () => {
    console.log('this.props', this.props);
    const { productDetail } = this.props;
    return (
      <>
      asdfasd
      asdfasdasdfasf
      asdfasd
      asdfads
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  productDetail: result(state, 'productDetail.data', [])
});

const mapDispatchToProps = (dispatch) => ({
  
});

// const ConnectedPage = connect(mapStateToProps, mapDispatchToProps)(ProductDetailPage)
export default ProductDetailPage;