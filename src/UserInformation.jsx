import React from 'react';

import css from './App.css'

const UserInformation = ({avatar_url, name, url, location}) => (
	<div className={css.User} >
        <div className={css.UserAvatar}>
          <img src={avatar_url} alt={name} />
        </div>
        <h1>{name}</h1>
		<p><b>URL:</b> {url}</p>
        <p><b>Location:</b> {location}</p>
	</div>
);

export default UserInformation;

