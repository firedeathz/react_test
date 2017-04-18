import React from 'react';

import AppStyles from './App.css'

const UserInformation = ({avatar_url, name, url, bio, location}) => (
	<div className={AppStyles.User} >
        <div className={AppStyles.UserAvatar}>
          <img src={avatar_url} alt={name} />
        </div>
        <h1>{name}</h1>
		<p>{url}</p>
        <p>{bio}</p>
        <p>{location}</p>
	</div>
);

export default UserInformation;

