
const year = new Date();
document.getElementById("copyright-year").innerHTML = "© BEAUTIFUL WORLD MUSIC " + year.getFullYear();


var sidebar = document.querySelector(".sidebar");
var hamburger = document.querySelector(".hamburger");

document.querySelector(".hamburger").addEventListener("click", event => {

	if(sidebar.classList.contains("active")) {
		sidebar.classList.remove("active");
		hamburger.classList.remove("active");
	} else {
		sidebar.classList.add("active");
		hamburger.classList.add("active");
	}
});
