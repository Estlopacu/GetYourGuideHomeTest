const defaultState = {
    searchText: null,
    searchResults: [],
    searchEnable: false,
    searchFound: false
  };
  
  const GetYourGuide = (state = defaultState, action) => {
    switch (action.type) {
    case 'SEARCH':
        return Object.assign({},
          state,
          {
            searchText: action.payload.searchText,
            searchResults: action.payload.searchResults,
            searchEnable: action.payload.searchEnable,
            searchFound: action.payload.searchFound
          }
        );
    default:
        return state;
    }
  };
  
  export default GetYourGuide;
  