document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
      fadeOutSplashScreen();
  }, 2000); 
});

function fadeOutSplashScreen() {
  var splashScreen = document.querySelector(".splash-screen");
  splashScreen.style.opacity = "0";
  setTimeout(function () {
      splashScreen.style.display = "none"; 
  }, 1000); 
}