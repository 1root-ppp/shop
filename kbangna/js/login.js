const container = document.getElementsByClassName('container')[0];
const signIn = document.getElementById('sign-in');
const signUp = document.getElementById('sign-up');

signUp.onclick = function () {
	container.classList.add('active');
}
signIn.onclick = function () {
	container.classList.remove('active');
}

// window.onload = function(){
// 	document.getElementById("form").onsubmit = function(){
// 		return checkUsername() && checkTel() && checkPassword();	
// 	};
// 	document.getElementById("username").onbuler = checkUsername();
// 	document.getElementById("tel").onbuler = checkTel();
// 	document.getElementById("password").onbuler = checkPassword();
// };

function checkUsername() {
	var username = document.getElementById("username").value;
	var reg_username = /^[\u4e00-\u9fa5_a-zA-Z]+$/;
	var flag = reg_username.test(username);
	var s_username = document.getElementById("s_username");
	if (flag) {
		s_username.innerHTML = "<img width='15' height='15' src='images/right.svg'/>";
	} else {
		s_username.innerHTML = "<img width='15' height='15' src='images/false.png'/>";
	}
}

function checkTel() {
	var tel = document.getElementById("tel").value;
	var reg_tel = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
	var flag = reg_tel.test(tel);
	var s_tel = document.getElementById("s_tel");
	if (flag) {
		s_tel.innerHTML = "<img width='15' height='15' src='images/right.svg'/>";
	} else {
		s_tel.innerHTML = "<img width='15' height='15' src='images/false.png'/>";
	}
}
function checkPassword() {
	var password = document.getElementById('password').value;
	var reg_password = /^\w{6,12}$/;
	var flag = reg_password.test(password);
	var s_password = document.getElementById("s_password");
	if (flag) {
		s_password.innerHTML = "<img width='15' height='15' src='images/right.svg'/>";
	} else {
		s_password.innerHTML = "<img width='15' hright='15' src='images/false.png'/>";
	}
}
function checkTelSign() {
	var tel = document.getElementById("tel-Sign").value;
	var reg_tel = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
	var flag = reg_tel.test(tel);
	var s_tel = document.getElementById("s_telSign");
	if (flag) {
		s_tel.innerHTML = "<img width='15' height='15' src='images/right.svg'/>";
	} else {
		s_tel.innerHTML = "<img width='15' height='15' src='images/false.png'/>";
	}
}
function checkPasswordSign() {
	var password = document.getElementById('password-Sign').value;
	var reg_password = /^\w{6,12}$/;
	var flag = reg_password.test(password);
	var s_password = document.getElementById("s_passwordSign");
	if (flag) {
		s_password.innerHTML = "<img width='15' height='15' src='images/right.svg'/>";
	} else {
		s_password.innerHTML = "<img width='15' hright='15' src='images/false.png'/>";
	}
}

