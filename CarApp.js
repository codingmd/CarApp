// Login Modal

// Get the login modal
var loginOpen = document.getElementById('loginOpen');
var loginClose = document.getElementById('loginClose');
var loginCancel = document.getElementById('loginCancel');
var login = document.getElementById('loginModal')

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == login) {
        login.style.display = "none";
    }
}

//display login modal
loginOpen.addEventListener("click", function(){
	login.style.display="block";
});
//hide login modal
loginClose.addEventListener("click", function(){
	login.style.display="none";
});
//hide login modal
loginCancel.addEventListener("click", function(){
	login.style.display="none";
});

//********************
//Create Account Modal
// Get the create accoutn modal
var accountOpen = document.getElementById('accountOpen');
var accountClose = document.getElementById('accountClose');
var accountCancel = document.getElementById('accountCancel');
var account = document.getElementById('accountModal')

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == account) {
        account.style.display = "none";
    }
}
accountOpen.addEventListener("click", function(){
	account.style.display="block";
});

accountClose.addEventListener("click", function(){
	account.style.display="none";
});

accountCancel.addEventListener("click", function(){
	account.style.display="none";
});

// hero slider
var heroSlider = function(){
		var hero = $('.hero'),
			slides = hero.children();

		if (slides.length > 1) {
			hero.slick({
				adaptiveHeight: true,
				autoplay: false,
				autoplaySpeed: 6000,
				arrows: false,
				dots: true,
				vertical: true,
				verticalSwiping: true
			});
		}
	};

jQuery(function(){
	heroSlider();
});