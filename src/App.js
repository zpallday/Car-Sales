import React from 'react';
import { connect } from 'react-redux';
import { addFeature, removeFeature } from './actions/';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
const App = ({removeFeature, addFeature, car, store, additionalPrice}) => {
 const deleteFeature = item => {
   removeFeature(item)
 }

 const purchaseItem = (e, item) => {
   e.preventDefault();

   addFeature(item);
 };



  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} remove={deleteFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={store} add={purchaseItem} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};


const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    store: state.store
  }
}

export default connect(mapStateToProps, {addFeature, removeFeature}) (App);
