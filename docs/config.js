// Change these variables for a new repo
window.SITE = {
  user: "thomaszhouan",
  repo: "fennec-test",
  proj: "Fennec",
};

// Derived values
window.SITE.base  = `/${window.SITE.repo}/`;                 // path prefix on GitHub Pages
window.SITE.home  = `https://${window.SITE.user}.github.io`; // user root
window.SITE.url   = window.SITE.home + window.SITE.base;     // full site URL
window.SITE.gh    = `https://github.com/${window.SITE.user}/${window.SITE.repo}`;

// Insert <base> early so subsequent relative paths resolve under /<repo>/
(function () {
    var b = document.createElement("base");
    b.href = window.SITE?.base || "/";
    document.head.appendChild(b);
})();

// Fill dynamic links/text using the single source of truth from config.js
document.getElementById("y").textContent = new Date().getFullYear();

var repo = document.getElementById("repoLink");
repo.href = window.SITE.gh;
repo.textContent = `${window.SITE.user}/${window.SITE.repo}`;

var user = document.getElementById("userLink");
user.href = `https://github.com/${window.SITE.user}`;
user.textContent = `@${window.SITE.user}`;
