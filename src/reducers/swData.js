import {
	FETCH_PAGINATED,
	SET_PAGINATED,
	SET_NEXT_PAGE,
	SET_COUNT,
	SET_RESOURCE_NAME,
	SET_SINGLE_ITEM,
	CLEAR_SINGLE_ITEM,
	SET_SEARCH_RESULTS,
} from 'src/const/swData';

const initialState = {
	data: [],
	nextPage: '',
	count: 1,
	singleItem: undefined,
  loadingData: false,
  selectedResource: 'people',
	error: undefined,
	searchResults: undefined,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_PAGINATED: {
			return {
				...state,
				loadingData: true,
			};
		}
    case SET_PAGINATED: {
			return {
				...state,
				data: [...state.data, ...action.data],
				loadingData: false,
			};
    }
    case SET_SINGLE_ITEM: {
			return {
				...state,
				singleItem: action.data,
			};
    }
    case SET_NEXT_PAGE: {
			return {
				...state,
				nextPage: action.nextPage,
			};
    }
    case SET_COUNT: {
			return {
				...state,
				count: action.count,
			};
    }
    case SET_RESOURCE_NAME: {
			return {
				...state,
				selectedResource: action.selectedResource,
				nextPage: '',
				data: [],
			};
    }
    case CLEAR_SINGLE_ITEM: {
			return {
				...state,
				singleItem: undefined,
			};
    }
    case SET_SEARCH_RESULTS: {
			return {
				...state,
				searchResults: action.results,
			};
    }
    default:
			return state;
  }
};

export default reducer;