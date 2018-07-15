import React from 'react';
import './user.css';

const userOutput = (props) =>{
	return(
         <div>
            <p>Username: {props.username}</p>
            <p>Username can be anything.</p>
         </div>

		)
};

export default userOutput;