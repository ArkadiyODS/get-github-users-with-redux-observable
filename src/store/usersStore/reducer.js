import { START_FETCH_USERS, COMPLETE_FETCH_USERS, UPDATE_USERS, CLEAR_USERS, FAIL_FETCH_USERS} from './actions';

const initalState = {
    list:[],
    error: null,
    loader: false,
};
export default function (state = initalState, {type, payload}){
    switch(type){
        case START_FETCH_USERS:
            return {...state, 
                loader: true
                };
        case COMPLETE_FETCH_USERS:
            return {...state, 
                loader: false
                };
        case UPDATE_USERS:
            return {...state, 
                list: payload,
                error: null
                };
        case CLEAR_USERS:
            return {...state, 
                list: initalState.list
                };
        case FAIL_FETCH_USERS:
            return {...state, 
                error: payload,
                loader: false,
                };
        default:
            return state;
    }
}