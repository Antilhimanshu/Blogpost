var signUpModal = document.getElementById("signUpModal");
var signInModal = document.getElementById("signInModal");
var composePostModal = document.getElementById("composePostModal");

signUpModal.style.display = "none";
signInModal.style.display = "none";
composePostModal.style.display = "none";

const showSignUpModal = () => {
	signUpModal.style.display = "block";
};

const showSignInModal = () => {
	signInModal.style.display = "block";
};
const showComposePostModal = () => {
	composePostModal.style.display = "block";
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
		composePostModal.style.display = "none";
	};
}


