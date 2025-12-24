(function () {
  var btn = document.getElementById("mobile-menu-button");
  var menu = document.getElementById("mobile-menu");
  if (!btn || !menu) return;

  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    var expanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", String(!expanded));
    menu.classList.toggle("hidden");
    var icon = this.querySelector("i");
    if (icon) {
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-times");
    }
  });

  // Close when clicking outside (mobile)
  document.addEventListener("click", function (e) {
    if (window.innerWidth >= 768) return;
    if (
      !menu.classList.contains("hidden") &&
      !menu.contains(e.target) &&
      !btn.contains(e.target)
    ) {
      menu.classList.add("hidden");
      btn.setAttribute("aria-expanded", "false");
      var icon = btn.querySelector("i");
      if (icon) {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    }
  });

  // Highlight current link in desktop nav (if same markup exists)
  try {
    var path = location.pathname.split("/").pop() || "index.html";
    var desktopLinks = document.querySelectorAll("nav a[href]");
    desktopLinks.forEach(function (a) {
      var href = a.getAttribute("href");
      if (!href) return;
      if (href === path) {
        a.classList.add("text-arvBlueAccent", "font-bold");
      }
    });
  } catch (e) {
    /* noop */
  }
})();
