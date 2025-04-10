const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;

function updateButton() {
  if (body.classList.contains("dark")) {
    toggleBtn.innerHTML = '<img src="./images/moon.svg" alt="Moon" class="img" />';
  } else {
    toggleBtn.innerHTML = '<img src="./images/sun.svg" alt="Sun" class="img" />';
  }
}

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
}
updateButton();

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  const theme = body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
  updateButton();
});
