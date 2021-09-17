window.addEventListener("DOMContentLoaded", event => {
    let topButton = document.getElementById("topButton");
    window.onscroll = () => {
        if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    }



})