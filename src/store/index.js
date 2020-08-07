
import { createStore, applyMiddleware, combineReducers} from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import SearchReducer from './searchStore/reducer';
import UsersReducer from './usersStore/reducer';

import UsersEpic from './usersStore/epic';

export default function() {
    const epicMiddleware = createEpicMiddleware();
    const store = createStore(
        combineReducers({
            searchString: SearchReducer,
            users: UsersReducer,
        }), 
        applyMiddleware(epicMiddleware)
    );
    epicMiddleware.run(UsersEpic);

    return store;
}