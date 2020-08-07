import { UPDATE_SEARCH_STRING, RESET_SEARCH_STRING } from './actions';

const initalState = "";
export default function (state = initalState, {type, payload}){
    switch(type){
        case UPDATE_SEARCH_STRING:
            return payload;

        case RESET_SEARCH_STRING:
            return initalState;
        default:
            return state;
    }
}