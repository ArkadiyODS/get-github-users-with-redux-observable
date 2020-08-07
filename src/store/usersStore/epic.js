import { combineEpics, ofType } from 'redux-observable';
import { from, of, concat } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { tap, filter, mapTo, take, map, switchMap, takeUntil, distinctUntilChanged, mergeMap, debounceTime, catchError  } from 'rxjs/operators';
import { UPDATE_SEARCH_STRING, RESET_SEARCH_STRING } from '../searchStore/actions';
import { START_FETCH_USERS, CLEAR_USERS, COMPLETE_FETCH_USERS, completeFetch,  updateUsers, handleFailure } from './actions';
 


function logger(action$){
    return action$.pipe(
        filter(({type}) => type !== 'END'),
        tap(({ type, payload })=>console.log('[EPIC] :', type, payload)),
        mapTo({type: 'END'}),
        );
}

function searchEpic (action$){
    return action$.pipe(
        ofType(UPDATE_SEARCH_STRING),
        debounceTime(500),
        distinctUntilChanged((prev, next) => prev.payload === next.payload),
        tap(({ type, payload })=>console.log('[searchEpic] :', payload)),
        map(({ payload })=>({ type: START_FETCH_USERS, payload })),
    );
}

function fetchUsersEpic(action$){
    return action$.pipe(
        ofType(START_FETCH_USERS),
        switchMap(({ payload })=>  
            fromFetch(`https://api.github.com/search/users?q=${payload}`, {
                selector: (r) => r.json(),
            })
            .pipe(
                takeUntil(action$.pipe(
                    ofType(CLEAR_USERS),
                )),
                map( response => response.items || []),
                mergeMap( users => of(updateUsers(users), completeFetch())),
                // mergeMap(action =>  concat(of(action), of(completeFetch()))),
                catchError(err => of(handleFailure(err.message))),
        )),
    );
}

function clearUsers(action$){
    return action$.pipe(
        ofType(RESET_SEARCH_STRING),
        mapTo({type: CLEAR_USERS}),
    );
}

export default combineEpics(
    logger,
    searchEpic,
    fetchUsersEpic,
    clearUsers,
  );