function myFunction() {
    var x = document.getElementById("myLinks");

    var y = document.getElementById("burger");
    console.log(x);
    if (x.style.display === "flex") {
        x.style.display = "none";
        y.style.backgroundImage = "url('assets/images/hamburger.svg')";
        y.style.width = "24px";
        y.style.height = "13px";

    } else {
        x.style.display = "flex";
        y.style.backgroundImage = "url('assets/images/close.svg')";
        y.style.width = "18px";
        y.style.height = "19px";
        y.style.backgroundRepeat = "norepeat";




    }

}