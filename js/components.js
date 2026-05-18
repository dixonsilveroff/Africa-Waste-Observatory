const year = new Date().getFullYear();

// Shared reference slug utility - generates a consistent ID from a reference title
// Used on the references page to create anchor IDs, and on other pages to create links
function slugifyRef(title) {
  return (
    "ref-" +
    title
      .toLowerCase()
      .replace(/['']/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .substring(0, 80)
  );
}

// Detect if we're in a subdirectory
const isSubdirectory =
  window.location.pathname.includes("/about/") ||
  window.location.pathname.includes("/country-profiles/") ||
  window.location.pathname.includes("/waste-streams/") ||
  window.location.pathname.includes("/innovations/") ||
  window.location.pathname.includes("/policies/") ||
  window.location.pathname.includes("/references/");

const pathPrefix = isSubdirectory ? "../" : "./";

// Header Component Template
const headerTemplate = `
<header>
    <div class="header-container">
        <a href="${pathPrefix}index.html" class="logo"><img src="${pathPrefix}assets/images/logo.png" alt="Africa Waste Observatory" width="100px"></a>
        <button class="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <nav id="nav-menu">
            <a href="${pathPrefix}about/" data-i18n="nav.about">About</a>
            <a href="${pathPrefix}country-profiles/" data-i18n="nav.countries">Country Profiles</a>
            <a href="${pathPrefix}waste-streams/" data-i18n="nav.streams">Waste Streams</a>
            <a href="${pathPrefix}innovations/" data-i18n="nav.innovations">Innovations</a>
            <a href="${pathPrefix}policies/" data-i18n="nav.policies">Policies</a>
            <a href="${pathPrefix}references/" data-i18n="nav.references">References</a>
            <select class="language-selector" id="language-selector">
                <option value="en">English</option>
                <option value="fr">Français</option>
            </select>
        </nav>
    </div>
</header>
`;

// Footer Component Template
const footerTemplate = `
<footer>
    <div class="footer-container">
        <div class="footer-section">
            <h4 data-i18n="footer.references">References</h4>
            <ul>
                <li><a href="${pathPrefix}references/" data-i18n="footer.dataSources">Data Sources</a></li>
                <li><a href="${pathPrefix}privacy.html" data-i18n="footer.privacy">Privacy Policy</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h4 data-i18n="footer.contact">Contact</h4>
            <ul>
                <li><a href="mailto:info@africawasteobservatory.org">Email: info@africawasteobservatory.org</a></li>
                <li>The Africa Waste Observatory,<br>7 Paddock View, Dunstall Park, Wolverhampton WV60UU,<br>United Kingdom</li>
            </ul>
        </div>
    </div>
    <div class="footer-bottom">
        <p data-i18n="footer.copyright">&copy; ${year} Africa Waste Observatory. All rights reserved.</p>
    </div>
</footer>
`;

// Render components immediately
function renderComponents() {
  // Render header
  const headerPlaceholder = document.getElementById("header-placeholder");
  if (headerPlaceholder) {
    headerPlaceholder.innerHTML = headerTemplate;
  }

  // Render footer
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = footerTemplate;
  }

  // Initialize header functionality
  initializeHeader();
}

// Initialize header interactions
function initializeHeader() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      });
    });
  }
}

// Run immediately when script loads
renderComponents();

// Initialize Lucide icons (replaces <i data-lucide="..."> with inline SVGs)
if (typeof lucide !== "undefined") {
  lucide.createIcons();
}
