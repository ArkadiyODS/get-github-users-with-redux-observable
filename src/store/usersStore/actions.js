export const 
START_FETCH_USERS = 'START_FETCH_USERS',
STOP_FETCH_USERS = 'STOP_FETCH_USERS',
COMPLETE_FETCH_USERS = 'COMPLETE_FETCH_USERS',
FAIL_FETCH_USERS = 'FAIL_FETCH_USERS',

UPDATE_USERS = 'UPDATE_USERS',
CLEAR_USERS = 'CLEAR_USERS';


export function updateUsers(payload){
    return ({ type: UPDATE_USERS, payload });
}

export function handleFailure(payload){
    return ({ type: FAIL_FETCH_USERS, payload });
}

export function completeFetch(){
    return ({ type: COMPLETE_FETCH_USERS });
}


