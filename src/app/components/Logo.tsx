"use client";
import React from "react";
import Image from "next/image";
import logo from '../../../public/logo.png';

// eslint-disable-next-line react/display-name
export const Logo = React.memo(() => {
	return <Image
		src={logo}
		alt='Logo'
		width={90}
		height={90}
		className='cursor-pointer' />;
});
