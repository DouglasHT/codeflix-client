"use client";
import React from "react";
import Image from "next/image";
import profile from "../../../public/profile.png";

// eslint-disable-next-line react/display-name
export const UserProfile = React.memo(() => {
	return (
		<div className="flex items-center space-x-4">
			<p className="hidden cursor-not-allowed lg:inline">Kids</p>
			<Image src={profile} width={48} height={48} alt="" className="cursor-pointer rounded" />
		</div>
	);
});
