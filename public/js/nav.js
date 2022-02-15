// nav burger button
const navBurger = document.querySelector("#burger");

// add click event listener to toggle open / close
navBurger.addEventListener("click", () => {
	// get the associated menu for the button
	const { target } = navBurger.dataset;
	const navMenu = document.querySelector(`#${target}`);
	// togggle the classes
	navBurger.classList.toggle("is-active");
	navMenu.classList.toggle("is-active");
});
