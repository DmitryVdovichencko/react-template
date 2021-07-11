import React from 'react';
import REACT_LOGO from '@assets/react.png';
import './style.css';

const App = () => {
    return (
			<div>
				<img src={REACT_LOGO} height="200px" />
        <h1>
            Hello World
        </h1>
			</div>
    );
}

export default App;