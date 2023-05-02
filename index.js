const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function ValidateEmail(inputText) {
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (inputText.value.match(mailformat)) {
		alert("Valid email address!");
		document.form1.text1.focus();
		return true;
	}

}

function CheckPassword(inputtxt) {
	var passw = /^[A-Za-z]\w{7,14}$/;
	if (inputtxt.value.match(passw)) {
		alert('Correct, try another...')
		return true;
	}
	else {
		alert('Wrong...!')
		return false;
	}
}