import React, { Component } from 'react'
import { connect } from 'react-redux'
import Product from '../screens/Product'
import * as api from '../utils/api.util';
import { result } from 'lodash';
import { getAllProducts, getSingleProduct, getCategories } from '../redux/thunks/onboarding.thunks';
import { saveData } from '../redux/reducers/productDetail.reducer';

export class ProductPage extends Component {

  constructor(props) {
    super(props);
    console.log('props', props);
  }

  getAllProducts = () => {
    // api.allProducts().then((res) => {
    //   saveData(result(res, 'products', []));
    // })
  }
  detailItem = (product)  => {
    const{history, getSingleProduct} = this.props;
    const id = result(product, 'id', '');
    console.log('product', product, this.props);
    api.singleProduct(id).then(res=>{
      console.log('res', res);
      this.props.saveDataSingleProduct(res);
      this.props.history.push('/detailProduct');
      
        // dispatch(saveData(result(res, 'products',[])));
    })

  }

  componentDidMount() {
    const { getProduct, getCategories } = this.props;
    // this.getAllProducts()
    // getAllProducts()
    getProduct();
    getCategories();

    console.log('jauh disini');
  };



  render() {
    console.log('this.props', this.props);
    const { product , singleProduct, categories} = this.props;
    return (
      <><Product product={product} detailItem={this.detailItem} 
      singleProduct={singleProduct} categories={categories}/></>
    );
  }
}

const mapStateToProps = (state) => ({
  product: result(state, 'product.data', []),
  categories: result(state, 'categories.data', [])

})

const mapDispatchToProps = (dispatch) => ({
  getProduct:() => dispatch(getAllProducts()),
  singleProduct:(id) => dispatch(getSingleProduct(id)),
  saveDataSingleProduct: (res) => dispatch(saveData(res)),
  getCategories:() => dispatch(getCategories())
})

const ConnectedPage = connect(mapStateToProps, mapDispatchToProps)(ProductPage)
export default ConnectedPage;