var form, input, grid;

form = document.getElementById("image-form");
input = document.getElementById("image-url");
grid = document.getElementById("image-grid");


var getImage = function(){
	var container, img, remove;
	event.preventDefault();
	var text = input.value;
	if(text === "") {
		alert("Missing url");
		return;
	}
	text.value = "";
	container = document.createElement("div");
	container.setAttribute("class", "image-container");
	img = document.createElement("img");
	img.setAttribute("src", text);
	remove = document.createElement("button");
	remove.innerHTML = "Delete image";
	container.appendChild(img);
	container.appendChild(remove);
	grid.appendChild(container);

	remove.addEventListener("click", function(){
		grid.removeChild(container);
	});

};

form.addEventListener("submit", getImage);