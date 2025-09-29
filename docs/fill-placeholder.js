// Fill dynamic links/text using the single source of truth from config.js
document.getElementById("y").textContent = new Date().getFullYear();

var repo = document.getElementById("repoLink");
repo.href = window.SITE.gh;
repo.textContent = `${window.SITE.user}/${window.SITE.repo}`;

var user = document.getElementById("userLink");
user.href = `https://github.com/${window.SITE.user}`;
user.textContent = `@${window.SITE.user}`;
