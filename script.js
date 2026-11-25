const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const themeLabel = document.querySelector(".theme-label");

function setTheme(theme) {
  const isDark = theme === "dark";
  document.body.dataset.theme = isDark ? "dark" : "light";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"
  );
  themeIcon.textContent = isDark ? "☀" : "☾";
  themeLabel.textContent = isDark ? "الوضع الفاتح" : "الوضع الداكن";
}

const savedTheme = localStorage.getItem("layan-theme");
setTheme(savedTheme === "dark" ? "dark" : "light");

themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
  localStorage.setItem("layan-theme", nextTheme);
});
