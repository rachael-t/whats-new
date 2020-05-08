import './Menu.css';
import PropTypes from 'prop-types';
import React from 'react';

const Menu = (props) => {

    return(
        <div className='menu-container'>
            <h1>What's New?</h1>
            <nav>
                <button onClick={props.changeSelectedNews} name='local'>Local</button>
                <button onClick={props.changeSelectedNews} name='entertainment'>Entertainment</button>
                <button onClick={props.changeSelectedNews} name='health'>Health</button>
                <button onClick={props.changeSelectedNews} name='science'>Science</button>
                <button onClick={props.changeSelectedNews} name='technology'>Technology</button>
            </nav>
        </div>
    )
}

export default Menu;

Menu.propTypes = {
    changeSelectedNews: PropTypes.func,
}