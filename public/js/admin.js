// DOM node to append users to
const usersList = document.querySelector("#users");

// takes a user object & creates a list item node
const createUserListItem = ({ email, firstName, lastName, id, state }) => `
	<li class="${state === "active" ? "has-text-success" : "has-text-warning"}">#${id} - ${email} - ${firstName || "First"} ${lastName || "Last"}</li>
`;

// fetch the users list
axios.get("http://localhost:3000/users").then(({ data: users }) => {
	// turn the data into a DOM node
	const userNodes = users.map(u => createUserListItem(u));
	// append them all to the list
	usersList.innerHTML = userNodes.join("");
}).catch(err => {
	console.error(err);
});
