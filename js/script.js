const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const sidebar = document.getElementById("sidebar");
const backdrop = document.getElementById("backdrop");
const btnWrap = menuBtn; // same el carries menu-open class

function openMenu() {
  sidebar.classList.add("open");
  backdrop.classList.add("open");
  menuBtn.classList.add("menu-open");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  sidebar.classList.remove("open");
  backdrop.classList.remove("open");
  menuBtn.classList.remove("menu-open");
  document.body.style.overflow = "";
}

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
backdrop.addEventListener("click", closeMenu);

// Close on Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});
