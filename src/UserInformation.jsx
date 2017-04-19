import React from 'react';

const UserInformation = ({avatar_url, name, url, location}) => (
	<div className='User' >
        <div className='UserAvatar'>
          <img src={avatar_url} alt={name} />
        </div>
		<div className="UserInfo">
			<h1>{name}</h1>
			<p><b>URL:</b> {url}</p>
			<p><b>Location:</b> {location}</p>
		</div>
	</div>
);

export default UserInformation;

