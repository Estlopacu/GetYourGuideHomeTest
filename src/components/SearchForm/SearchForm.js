import React, {PropTypes} from 'react';
import { search } from '../../actions';
import { connect } from 'react-redux';
import searchEndpoint from '../../utils/searchEndpoint';

class SearchForm extends React.Component {
  constructor() {
    super();
    this.onSearch = this.onSearch.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(search({
      searchText: null,
      searchResults: searchEndpoint.getSpecialOffers(),
      searchEnable: false
    }));
  }
  onSearch(e) {
    e.preventDefault();
    const fieldValue = new FormData(e.target).get("search").trim();
    let searchResults = fieldValue ? searchEndpoint.get(fieldValue) : searchEndpoint.getSpecialOffers();
    this.props.dispatch(search({
      searchText: fieldValue,
      searchResults: searchResults.length ? searchResults : searchEndpoint.getSpecialOffers(),
      searchEnable: !!fieldValue,
      searchFound: !!searchResults.length
    }));
  }
  render() {
    return (
      <form className="form" onSubmit={this.onSearch}>
          <div className="col-sm-12">
            <input type="text" className="form-control rounded-0 text-center" name="search" placeholder="Where are you going?" />
          </div>
          <div className="col-sm-12">
            <button type="submit" className="btn btn-primary col rounded-0">Search</button>
          </div>
      </form>
    );
  }
}

SearchForm.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(SearchForm);
