const changeThemeBtn = document.querySelector("#change-theme");

//function dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// load light or dark
function loadTheme(){
  const darkMode = localStorage.getItem("dark")

  if( darkMode){
    toggleDarkMode()
  }
}
loadTheme()

changeThemeBtn.addEventListener("change", () => {
  toggleDarkMode();

  // save or remove
  localStorage.removeItem("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
});
