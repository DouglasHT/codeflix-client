"use client";
import React from "react";

// eslint-disable-next-line react/display-name
export const NavLinks = React.memo(() => {
	return (
		<nav>
			<ul className="hidden md:flex md:space-x-4">
				<li>Home</li>
				<li>TV Shows</li>
				<li>Movies</li>
				<li>New & Popular</li>
				<li>My List</li>
			</ul>
		</nav>
	);
});
