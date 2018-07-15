import React from 'react';
import './user.css';

const userInput = (props) =>{
	return(
			<input type="text" onChange={props.changed} value={props.startName} />
		)
}

export default userInput;