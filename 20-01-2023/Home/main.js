// Toggle Menu
function toggleMenu() {
    console.log("open");
    var w = document.documentElement.clientWidth || window.innerWidth;
    if (w <= 768) {
        // Probably mobile
        var x = document.querySelector(".nav-items");
        if (x.style.display === "block") {
           x.style.display = "none";
         } else {
           x.style.display = "block";
         }
    }

}

