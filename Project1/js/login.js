function showregform() {
	document.title = 'Sign up';
	document.querySelector('.vldauth').style.display = 'none';
	document.querySelector('.vldreg').style.display = 'flex';
}

function showauthform() {
	document.title = 'Log in';
	document.querySelector('.vldauth').style.display = 'flex';
	document.querySelector('.vldreg').style.display = 'none';
	document.querySelector('.vldrecpass').style.display = 'none';
}

function showrecoveryform() {
	document.title = 'Password recovery';
	document.querySelector('.vldauth').style.display = 'none';
	document.querySelector('.vldrecpass').style.display = 'flex';
}

//--------> Authentification <---------------

const handleInput = event => {
	event.preventDefault();
	if (event.target.name === 'username') {
		localStorage.setItem('username', event.target.value);
	}
	if (event.target.name === 'password') {
		localStorage.setItem('password', event.target.value);
	}
	if (event.target.name === 'email') {
		localStorage.setItem('email', event.target.value);
	}
	console.log('result: ', username);
};

var usernamePassed = false;
var passwordPassed = false;

const handleInputLogin = event => {
	const { name, value } = event.target;
	const username = localStorage.getItem('username');
	const password = localStorage.getItem('password');

	if (name === 'username' && value === username) {
		usernamePassed = true;
	}
	if (name === 'password' && value === password) {
		passwordPassed = true;
	}

};
const handleLogin = () => {
	// e.preventDefault();
	// if (usernamePassed === true && passwordPassed === true) {
		// window.location.href = "./index.html";
		// alert('passed')
    // } else {
		// alert('Did not pass')
	// }
	console.log(usernamePassed, passwordPassed)
};
