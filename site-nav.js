document.querySelectorAll("[data-page-navigation]").forEach((navigation) => {
  const toggle = navigation.querySelector("[data-menu-toggle]");
  const menu = navigation.querySelector("[data-mobile-menu]");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(expanded));
    menu.classList.toggle("open", expanded);
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
});
