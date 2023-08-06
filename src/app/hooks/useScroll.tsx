"use client";
import { useCallback, useEffect, useState } from "react";

export const useScroll = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	const handleScroll = useCallback(() => {
		setIsScrolled(window.scrollY > 0);
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll]);

	return isScrolled;
};
