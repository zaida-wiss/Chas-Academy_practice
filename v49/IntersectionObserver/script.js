
const lazyImages = document.querySelectorAll("img.lazy");

if ("IntersectionObserver" in window) {


	const observer = new IntersectionObserver((entries, observerInstance) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting) return;

			const img = entry.target;
			const realSrc = img.dataset.src;

			if (realSrc) {
				img.src = realSrc;
				img.removeAttribute("data-src");
				img.classList.remove("lazy");
				console.log("Loading image: " + realSrc);
			}

			observerInstance.unobserve(img);

		});
	});

	lazyImages.forEach((img) => {
		observer.observe(img);
	});

} else {
	lazyImages.forEach((img) => {
		const realSrc = img.dataset.src;
		img.src = realSrc;
		img.removeAttribute("data-src");
		img.classList.remove("lazy");
	});
}
