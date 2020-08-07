import React  from 'react';
import { useSelector } from 'react-redux';
import { Tile } from '../index';


function useUsersRenderer(){
    const { list, error, loader } = useSelector(state => state.users); 
    return () => { 
        switch(true){
            case loader:
                return <h2>Loading ...</h2>;
            case !!error:
                return <h2>{`Error: ${error}`}</h2>;
            case list.length > 0:
                return list.map(user => <Tile key={user.id} {...user}/>);
            default:
                return <h2>No Data</h2>
        }
    };
}
 
export default function(){ 
    const renderer = useUsersRenderer();

    console.log('is same renderer: ', window.renderer === renderer);
    window.renderer = renderer;

    return (<div className='list-wrapper'>
            {renderer()}
        </div>);
}