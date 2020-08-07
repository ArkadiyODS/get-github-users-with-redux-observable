import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearch, resetSearch } from '../../store/searchStore/actions'; 

export default function(props){
    const ref = useRef();
    const searchValue = useSelector(state => state.searchString);
    const dispatch = useDispatch();
    const handleSearchChange = useCallback(evt=>{
        const { value } = evt.target;
        dispatch(updateSearch(value));
    },[]);
    const handleSearchClear = useCallback(()=>{
        dispatch(resetSearch());
        if(ref.current) {
            ref.current.focus();
        };
    }, []);
    const setRef = useCallback(input => ref.current = input, []);

    return (<>
        <input 
            ref={setRef}
            type='text' 
            placeholder='Search'
            value={searchValue} 
            onChange={handleSearchChange}
        ></input>
        <button onClick={handleSearchClear}>Clear</button>
        </>);
}