import {
	FETCH_PAGINATED,
	SET_PAGINATED,
	SET_NEXT_PAGE,
	SET_COUNT,
	SET_RESOURCE_NAME,
	CHANGE_RESOURCE_NAME,
	FETCH_SINGLE_ITEM,
	SET_SINGLE_ITEM,
	CLEAR_SINGLE_ITEM,
	SEARCH,
} from 'src/const/swData';

export const fetchPaginatedData = () => ({
	type: FETCH_PAGINATED,
});

export const setPaginatedData = (data) => ({
	type: SET_PAGINATED,
	data,
});

export const setNextPage = (nextPage) => ({
	type: SET_NEXT_PAGE,
	nextPage,
});

export const setCount = (count) => ({
	type: SET_COUNT,
	count,
});

export const setResourceName = (selectedResource) => ({
	type: SET_RESOURCE_NAME,
	selectedResource,
});

export const changeResourceName = (selectedResource) => ({
	type: CHANGE_RESOURCE_NAME,
	selectedResource,
});

export const fetchSingleItem = (resource, id) => ({
	type: FETCH_SINGLE_ITEM,
	resource,
	id,
});

export const setSingleItem = (data) => ({
	type: SET_SINGLE_ITEM,
	data,
});

export const clearSingleItem = () => ({
	type: CLEAR_SINGLE_ITEM,
});

export const search = (value) => ({
	type: SEARCH,
	value,
});