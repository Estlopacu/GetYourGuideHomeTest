import 'whatwg-fetch';
import data from '../static/data/data.json';
import filter from 'lodash/filter';
import sortBySpecialOffer from './sortBySpecialOffer';

const searchEndpoint = {
  get: (searchText) => {
    return filter(data.tours, item => item.title.toLowerCase().indexOf(searchText.toLowerCase())>-1).sort(sortBySpecialOffer);
  },
  getSpecialOffers: () => {
    return filter(data.tours, item => item.isSpecialOffer);
  }
};

export default searchEndpoint;
