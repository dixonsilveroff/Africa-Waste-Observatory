// Header Component Template
const headerTemplate = `
<header>
    <div class="header-container">
        <a href="index.html" class="logo"><img src="./assets/images/logo.png" alt="Africa Waste Observatory" width="100px"></a>
        <button class="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </button>
        <nav id="nav-menu">
            <a href="./about/" data-i18n="nav.about">About</a>
            <a href="./country-profiles/" data-i18n="nav.countries">Country Profiles</a>
            <a href="./waste-streams/" data-i18n="nav.streams">Waste Streams</a>
            <a href="./innovations/" data-i18n="nav.innovations">Innovations</a>
            <a href="./policies/" data-i18n="nav.policies">Policies</a>
            <a href="./references/" data-i18n="nav.references">References</a>
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
                <li><a href="../references" data-i18n="footer.dataSources">Data Sources</a></li>
                <li><a href="../privacy.html" data-i18n="footer.privacy">Privacy Policy</a></li>
            </ul>
        </div>
        <div class="footer-section">
            <h4 data-i18n="footer.contact">Contact</h4>
            <ul>
                <li><a href="mailto:africawasteobservatory@gmail.com">Email: africawasteobservatory@gmail.com</a></li>
                <li><a href="#address">Alex Ekwueme Federal University, Ndufu-Alike, Ikwo, Nigeria</a></li>
            </ul>
        </div>
    </div>
    <div class="footer-bottom">
        <p data-i18n="footer.copyright">&copy; 2026 Africa Waste Observatory. All rights reserved.</p>
    </div>
</footer>
`;

// Render components immediately
function renderComponents() {
    // Render header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerTemplate;
    }

    // Render footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerTemplate;
    }

    // Initialize header functionality
    initializeHeader();
}

// Initialize header interactions
function initializeHeader() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Run immediately when script loads
renderComponents();
