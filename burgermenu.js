window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
  console.log("toggleMenu");
  document.querySelector("#menu").classList.toggle("hidden");

  let erSkjult = document.querySelector("#menu").classList.contains("hidden");

  if (erSkjult == true) {
    document.querySelector("#menuknap").textContent = "☰";
    document.querySelector("#nav_baggrund").classList.remove("nav_style");
    document.querySelector(".logo").classList.remove("hidden");
  } else {
    document.querySelector("#menuknap").textContent = "X";
    document.querySelector("#nav_baggrund").classList.add("nav_style");
    document.querySelector(".logo").classList.add("hidden");
  }
}
