import React from 'react';

import AppStyles from './App.css'

const UserInformation = ({avatar, name, url, bio, location}) => (
	<div className={AppStyles.User} >
        <div className={AppStyles.UserAvatar}>
          <img src={avatar} alt={name} />
        </div>
        <h1>{name}</h1>
		<p>{url}</p>
        <p>{bio}</p>
        <p>{location}</p>
	</div>
);

export default UserInformation;

