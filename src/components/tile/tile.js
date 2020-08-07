import React, { useCallback, useRef } from 'react'; 
import './tile.css';



const propertiesToShow = ['name', 'company', 'blog', 'location', 'email', 'hireable', 'bio', 'twitter_username', 'html_url'];

function renderProp(value) {
    switch(true){
        case typeof value === 'string' && value.includes('github.com'):
            return <a href={value} target='blank'>{value}</a>;
        case !!value:
            return <span className="tile-content__value">{value}</span>
        default:
            return '-'
    }
}

export default function(props){
    const { login, avatar_url } = props;

    return (
        <div className='tile-wrapper'>
            <div className='tile-avatar'>
                <img alt='avatar' src={avatar_url} />
            </div>
            <div className='tile-content'>
                <h3>{login}</h3>
                {propertiesToShow.map((key, i) => (
                    <div key={key + i}>
                        <span className="tile-content__key">{`${key}:`}</span>{renderProp(props[key])}
                    </div>
                ))}
            </div>
        </div>
    );
}