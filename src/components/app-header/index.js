import React from "react";
import './app-header.css';

const AppHeader = ({likes, allPosts}) => {
	return (
		<div className="app-header d-flex">
			<h1>Alexander Fox</h1>
			<h2>{allPosts} записей, из низ {likes} понравилось</h2>
		</div>
	);
}

export default AppHeader;