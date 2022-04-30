function executeDarkLightModeSwitch() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

function setLightMode() {
  localStorage.theme = "light";
  executeDarkLightModeSwitch();
}

function setDarkMode() {
  localStorage.theme = "dark";
  executeDarkLightModeSwitch();
}

function toggleLightDarkMode() {
    if (localStorage.theme === "dark") {
        setLightMode();
    } else {
        setDarkMode();
    }
}

executeDarkLightModeSwitch();
