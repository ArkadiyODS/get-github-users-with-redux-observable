export const 
UPDATE_SEARCH_STRING = 'UPDATE_SEARCH_STRING',
RESET_SEARCH_STRING = 'RESET_SEARCH_STRING';

export function updateSearch(payload){
    return ({
        type: UPDATE_SEARCH_STRING,
        payload
    });
}

export function resetSearch(payload){
    return ({ type: RESET_SEARCH_STRING });
}