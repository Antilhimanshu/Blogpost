const bindLogoToHomepage = () => {
	const logo = document.getElementById("logo_container");
	logo.addEventListener("click", () => {
		window.location.href = "/";
	});
};
bindLogoToHomepage();

var deletePostModal = document.getElementById("deletePostModal");
var signUpModal = document.getElementById("signUpModal");
var signInModal = document.getElementById("signInModal");
const showSignUpModal = () => {
	signUpModal.style.display = "block";
};

const showSignInModal = () => {
	signInModal.style.display = "block";
};
const raiseSignUp = () => {
	signInModal.style.display = "none";
	showSignUpModal();
};
const span = document.getElementsByClassName("close");
for (const close of span) {
	close.onclick = function () {
		signUpModal.style.display = "none";
		signInModal.style.display = "none";
		deletePostModal.style.display = "none";
	};
}

const showDeletePostModal = () => {
	deletePostModal.style.display = "block";
};
const hideDeletePostModal = () => {
	deletePostModal.style.display = "none";
};
signUpModal.style.display = "none";
signInModal.style.display = "none";
deletePostModal.style.display = "none";
