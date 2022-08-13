// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
	'use strict';
	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	var forms = document.querySelectorAll('.needs-validation');
	// Loop over them and prevent submission
	Array.prototype.slice.call(forms).forEach(function (form) {
		form.addEventListener(
			'submit',
			function (event) { 
				if (!form.checkValidity()) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
			},
			false
		);
	});
})();

// validate password
var myInput = document.getElementById('password');
var letter = document.getElementById('letter');
var capital = document.getElementById('capital');
var number = document.getElementById('number');
var length = document.getElementById('length');

// When the user clicks on the password field, show the message box
myInput.onfocus = function () {
	document.getElementById('message').style.display = 'block';
};

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function () {
	document.getElementById('message').style.display = 'none';
};

// When the user starts to type something inside the password field
myInput.onkeyup = function () {
	// Validate lowercase letters
	var lowerCaseLetters = /[a-z]/g;
	if (myInput.value.match(lowerCaseLetters)) {
		letter.classList.remove('invalid');
		letter.classList.add('valid');
	} else {
		letter.classList.remove('valid');
		letter.classList.add('invalid');
	}

	// Validate capital letters
	var upperCaseLetters = /[A-Z]/g;
	if (myInput.value.match(upperCaseLetters)) {
		capital.classList.remove('invalid');
		capital.classList.add('valid');
	} else {
		capital.classList.remove('valid');
		capital.classList.add('invalid');
	}

	// Validate numbers
	var numbers = /[0-9]/g;
	if (myInput.value.match(numbers)) {
		number.classList.remove('invalid');
		number.classList.add('valid');
	} else {
		number.classList.remove('valid');
		number.classList.add('invalid');
	}

	// Validate length
	if (myInput.value.length >= 8) {
		length.classList.remove('invalid');
		length.classList.add('valid');
	} else {
		length.classList.remove('valid');
		length.classList.add('invalid');
	}
};

// confirm password
var pw1 = document.getElementById("password");  
var pw2 = document.getElementById("confirmpassword"); 

function validatePassword(){
	if(pw1.value != pw2.value) {
	  pw2.setCustomValidity("Passwords Don't Match");
	} else {
	  pw2.setCustomValidity('');
	}
  }
pw1.onchange = validatePassword;
pw2.onkeyup = validatePassword;