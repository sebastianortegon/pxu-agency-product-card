document.addEventListener("DOMContentLoaded", function(event) {

	const cartButtons = document.querySelectorAll('.cart-button');
	cartButtons.forEach(button => { button.addEventListener('click',cartClick); });
	
	function cartClick(){
	let button =this;
	button.classList.add('clicked');
	window.setTimeout(restoreClick, 3000);
	}

	function restoreClick(){
		var element1 = document.getElementById("addbtn1");
		element1.classList.remove("clicked");
		var element2 = document.getElementById("addbtn2");
		element2.classList.remove("clicked");
		var element3 = document.getElementById("addbtn3");
		element3.classList.remove("clicked");
	}

	});