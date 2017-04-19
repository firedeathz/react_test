import React from 'react';

const UserRepo = ({name, desc}) => (
	<div className="Repo" >
		<h1>{name}</h1>
		<p><b>Description:</b> {desc}</p>
	</div>
);

export default UserRepo;

