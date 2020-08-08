import React, { useState, useCallback, useEffect } from 'react';

const Header = (props) => {
    const [hstate, setHstate] = useState(null);
    useEffect( () => {
        setHstate(props.dataOfHeader);
    }, []);
    console.log(hstate, props)
    return <>
        <header className="App-header">
            <p>{props.dataOfHeader}</p>
        </header>
    </>
}

export default Header;