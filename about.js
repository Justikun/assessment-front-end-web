console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Nice, human! My whisker friends will review your form!")
}

function handleMouseoverPicture(evt) {
	// evt.preventDefault();
	console.log('here')
	alert("Woah! Don't try to stop me from eating these fresh bread crusts")
}


let form = document.querySelector('form#contact');
let img = document.querySelector('#main_img')

form.addEventListener('submit', handleSubmit);
img.addEventListener('mouseover', handleMouseoverPicture);