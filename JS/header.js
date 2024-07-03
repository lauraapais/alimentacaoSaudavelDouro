
var menuDiv = document.getElementById("menuDiv");

var menuIcon = document.getElementById("menuIcon");

menuIcon.addEventListener("click", function () {
    menuDiv.classList.add("active");
    document.body.classList.add("overflow-hidden");
});

closeMenu.addEventListener("click", function () {
    menuDiv.classList.remove("active");
    document.body.classList.remove("overflow-hidden");
});
