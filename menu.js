let menubtn = document.getElementById('menu');
let cancel = document.getElementById('cancel');
let menubar = document.getElementById('menubar');

menubtn.addEventListener("click", function() {
    menubar.style.display = "block";
    cancel.style.display = "block";
    menubtn.style.display = "none";
});

cancel.addEventListener("click", function(){
    menubar.style.display = "none";
    cancel.style.display = "none";
    menubtn.style.display = "block";
});