document.addEventListener("DOMContentLoaded", function () {
  const darkModeSwitch = document.getElementById("darkModeSwitch");
  const htmlElement = document.documentElement;

  // Initialize from localStorage
  const savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme === "dark") {
    darkModeSwitch.checked = true;
    htmlElement.setAttribute("data-bs-theme", "dark");
  }

  darkModeSwitch.addEventListener("change", function () {
    const newTheme = this.checked ? "dark" : "light";
    htmlElement.setAttribute("data-bs-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
});
