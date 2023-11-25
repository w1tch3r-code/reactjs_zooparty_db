// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";

const GalleryObserver = () => {
	useEffect(() => {
		const galleryObserver = () => {
			const allArticle = document.querySelectorAll("article");

			// Options für IntersectionObserver
			const options = {
				root: null,
				rootMargin: "200px",
				threshold: 0,
				delay: 1000,
			};

			const moveObserver = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					const intersecting = entry.isIntersecting;
					if (intersecting) {
						entry.target.style.opacity = "1";
						entry.target.style.transform = "scale(1)";
					} else {
						entry.target.style.opacity = "0";
						entry.target.style.transform = "scale(0.5)";
					}
				});
			}, options);

			allArticle.forEach((article) => {
				moveObserver.observe(article);
			});
		};

		galleryObserver();

		// Optional: Cleanup-Funktion für das Aufräumen bei Component Unmount
		return () => {
			// Führe hier Aufräumarbeiten durch (z.B. Observer-Beobachtung beenden)
		};
	}, []); // Leeres Array als zweites Argument sorgt dafür, dass useEffect nur einmal nach dem Rendern ausgeführt wird

	// Rest deiner React-Komponente
	return (
		<div>{/* Hier kommt der restliche JSX-Code deiner Komponente */}</div>
	);
};

export default GalleryObserver;
