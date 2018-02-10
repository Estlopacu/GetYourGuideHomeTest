import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import searchEndpoint from '../../utils/searchEndpoint';
import Card from './Card';
import './Results.scss';

class Results extends React.Component {
    render() {
        const { searchResults, searchEnable, searchFound } = this.props;
        let stars = [];    
        return (
            <div className="d-flex flex-column p-4">
                {(!searchEnable) && <div className="alert alert---specialOffers text-center" role="alert">See Our Specials Offers</div>}
                {(searchEnable && !searchFound) && <div className="alert alert--noResults text-center" role="alert">No results available, but take a look at this Specials Offers.</div>}
                {(searchEnable && searchFound && searchResults.length > 0) && <p className="text-right" role="alert">{searchResults.length} {searchResults.length === 1 ? "Activity" : "Activities"} Found.</p>}
                {searchResults.map((card, index) => {
                    for(let i = 0; i < card.rating; i++) {
                        stars.push(<span key={i} className="oi oi-star"></span>);
                    }
                    return (<Card key={card.title} card={card}>{stars}</Card>);
                })}
        </div>
        );
    }
}

Results.propTypes = {
    searchResults: PropTypes.array,
    searchEnable: PropTypes.bool,
    searchFound: PropTypes.bool
};

const mapStateToProps = state => {
    return {
        searchResults: state.searchResults,
        searchEnable: state.searchEnable,
        searchFound: state.searchFound
    };
};
export default connect(mapStateToProps)(Results);
