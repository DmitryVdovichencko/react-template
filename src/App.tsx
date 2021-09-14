import React from 'react';
import REACT_LOGO from '@assets/react.png';
import './style.css';

const App:React.FunctionComponent = () => {
	const sampleObject = {
		prop1:{
			prop2:'test'
		}
	}
    return (
			<div>
				<img src={REACT_LOGO} height="200px" alt="react" />
        <h1>
            Hello World!!! {sampleObject?.prop1?.prop2}
        </h1>
			</div>
    );
}

export default App;