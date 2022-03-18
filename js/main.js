document.addEventListener("DOMContentLoaded", function(event) {

	const cartButtons = document.querySelectorAll('.cart-button');
	cartButtons.forEach(button => { button.addEventListener('click',cartClick); });
	
	function cartClick(){
	let button =this;
	button.classList.add('clicked');
	window.setTimeout(restoreClick, 3000);
	}

	function restoreClick(){
		var element = document.getElementById("addbtn");
		element.classList.remove("clicked");
	}

	});