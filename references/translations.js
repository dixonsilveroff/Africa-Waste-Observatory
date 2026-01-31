// Translation data for References page
const translations = {
    en: {
        nav: {
            about: "About",
            countries: "Country Profiles",
            streams: "Waste Streams",
            innovations: "Innovations",
            policies: "Policies",
            references: "References"
        },
        footer: {
            references: "References",
            dataSources: "Data Sources",
            privacy: "Privacy Policy",
            contact: "Contact",
            copyright: "© 2026 Africa Waste Observatory. All rights reserved."
        },
        header: {
            title: "REFERENCES & DATA SOURCES",
            intro: "Statement on data credibility: This observatory prioritizes peer-reviewed evidence and official national statistics. All data presented is cross-referenced with the sources listed below to ensure a high standard of transparency and accountability in waste management reporting across the African continent.",
            integrityTitle: "DATA INTEGRITY NOTE",
            updateFrequency: "[Update Frequency: Bi-annual audit]",
            limitations: "[Limitations: Variability in informal sector data and differences in national reporting definitions for 'waste']"
        },
        search: {
            placeholder: "SEARCH: Filter by Author, Country, or Document Type..."
        },
        categories: {
            all: "ALL REFERENCES & DATA SOURCES",
            institutional: "01 / INSTITUTIONAL & REGIONAL REPORTS",
            academic: "02 / ACADEMIC & PEER-REVIEWED PAPERS",
            datasets: "03 / DATASETS & RAW STATISTICS"
        }
    },
    fr: {
        nav: {
            about: "À propos",
            countries: "Profils des Pays",
            streams: "Flux de Déchets",
            innovations: "Innovations",
            policies: "Politiques",
            references: "Références"
        },
        footer: {
            references: "Références",
            dataSources: "Sources de Données",
            privacy: "Politique de Confidentialité",
            contact: "Contact",
            copyright: "© 2026 Observatoire Africain des Déchets. Tous droits réservés."
        },
        header: {
            title: "RÉFÉRENCES ET SOURCES DE DONNÉES",
            intro: "Déclaration sur la crédibilité des données : Cet observatoire privilégie les preuves évaluées par des pairs et les statistiques nationales officielles. Toutes les données présentées sont recoupées avec les sources répertoriées ci-dessous pour garantir un niveau élevé de transparence et de responsabilité dans les rapports sur la gestion des déchets à travers le continent africain.",
            integrityTitle: "NOTE D'INTÉGRITÉ DES DONNÉES",
            updateFrequency: "[Fréquence de mise à jour : Audit semestriel]",
            limitations: "[Limitations : Variabilité des données du secteur informel et différences dans les définitions nationales des 'déchets']"
        },
        search: {
            placeholder: "RECHERCHER : Filtrer par auteur, pays ou type de document..."
        },
        categories: {
            all: "TOUTES LES RÉFÉRENCES ET SOURCES DE DONNÉES",
            institutional: "01 / RAPPORTS INSTITUTIONNELS ET RÉGIONAUX",
            academic: "02 / ARTICLES ACADÉMIQUES ET ÉVALUÉS PAR DES PAIRS",
            datasets: "03 / ENSEMBLES DE DONNÉES ET STATISTIQUES BRUTES"
        }
    }
};

// References Data organized by category
const referencesData = {
    institutional: [
        {
            title: "What a Waste 2.0: A Global Snapshot of Solid Waste Management to 2050",
            author: "World Bank",
            year: "2022",
            location: "Washington, DC: World Bank Group",
            category: "REPORT",
            countries: ["Nigeria", "Egypt", "Kenya", "Rwanda", "South Africa"],
            link: "https://openknowledge.worldbank.org/handle/10986/30317",
            accessed: "2024-05-12"
        },
        {
            title: "Africa Waste Management Outlook 2021: Towards a Circular Economy",
            author: "UNEP",
            year: "2021",
            location: "Nairobi: United Nations Environment Programme",
            category: "REPORT",
            countries: ["Nigeria", "Kenya"],
            link: "https://www.unep.org/ietc/resources/publication/africa-waste-management-outlook",
            accessed: ""
        },
        {
            title: "National Waste & Plastic Policies",
            author: "Federal Ministry of Environment (Nigeria)",
            year: "2024",
            location: "Nigeria",
            category: "REPORT",
            countries: ["Nigeria"],
            link: "https://environment.gov.ng/",
            accessed: ""
        },
        {
            title: "National Implementation Guidelines for Plastic Waste Management",
            author: "UNIDO & Government of Japan",
            year: "2024",
            location: "Nigeria",
            category: "REPORT",
            countries: ["Nigeria"],
            link: "https://www.unido.org/who-we-are/structure/regional-offices/nigeria-regional-office-hub",
            accessed: ""
        },
        {
            title: "Climate Change Act of Nigeria",
            author: "Federal Government of Nigeria",
            year: "2021",
            location: "Nigeria",
            category: "REPORT",
            countries: ["Nigeria"],
            link: "https://placng.org/law/laws/climate-change-act-2021/",
            accessed: ""
        },
        {
            title: "Waste Management & Environmental Reports",
            author: "Ministry of Environment, Egypt",
            year: "2023",
            location: "Egypt",
            category: "REPORT",
            countries: ["Egypt"],
            link: "https://www.eeaa.gov.eg/",
            accessed: ""
        },
        {
            title: "Law No. 202 of 2020 (Waste Management Regulation Law)",
            author: "Government of Egypt",
            year: "2020",
            location: "Egypt",
            category: "REPORT",
            countries: ["Egypt"],
            link: "https://www.ecolex.org/details/legislation/waste-management-law-no202-of-2020-lex-faoc199134/",
            accessed: ""
        },
        {
            title: "Egypt Solid Waste Management Program Documentation",
            author: "World Bank",
            year: "2023",
            location: "Egypt",
            category: "REPORT",
            countries: ["Egypt"],
            link: "https://documents.worldbank.org/",
            accessed: ""
        },
        {
            title: "National Solid Waste Management Programme (NSWMP)",
            author: "Government of Egypt",
            year: "2023",
            location: "Egypt",
            category: "REPORT",
            countries: ["Egypt"],
            link: "https://www.giz.de/en/projects/national-solid-waste-management-programme-0",
            accessed: ""
        },
        {
            title: "EPAP III – Egypt Pollution Abatement Project",
            author: "Government of Egypt",
            year: "2022",
            location: "Egypt",
            category: "REPORT",
            countries: ["Egypt"],
            link: "https://www.eeaa.gov.eg/en-us/projects/epap.aspx",
            accessed: ""
        },
        {
            title: "Marine Plastic Pollution in the Mediterranean",
            author: "UNEP",
            year: "2021",
            location: "Mediterranean Region",
            category: "REPORT",
            countries: ["Egypt"],
            link: "https://www.unep.org/unepmap/",
            accessed: ""
        },
        {
            title: "Sustainable Waste Management Act",
            author: "Government of Kenya",
            year: "2022",
            location: "Kenya",
            category: "REPORT",
            countries: ["Kenya"],
            link: "http://kenyalaw.org/kl/fileadmin/pdfdownloads/Acts/2022/TheSustainableWasteManagementAct_No.31of2022.pdf",
            accessed: ""
        },
        {
            title: "Kenya Urban Development & Waste Studies",
            author: "World Bank",
            year: "2023",
            location: "Kenya",
            category: "REPORT",
            countries: ["Kenya"],
            link: "https://documents.worldbank.org/en/publication/documents-reports?f:country_exact=Kenya",
            accessed: ""
        },
        {
            title: "East Africa Waste & Circular Economy Reports",
            author: "UNEP",
            year: "2023",
            location: "East Africa",
            category: "REPORT",
            countries: ["Kenya"],
            link: "https://www.unep.org/",
            accessed: ""
        },
        {
            title: "National Solid Waste Management Strategy",
            author: "Government of Kenya",
            year: "2024",
            location: "Kenya",
            category: "REPORT",
            countries: ["Kenya"],
            link: "https://www.nema.go.ke/index.php?option=com_content&view=article&id=11&Itemid=149",
            accessed: ""
        },
        {
            title: "Construction Waste Strategy (2025–2030)",
            author: "National Construction Authority (NCA)",
            year: "2025",
            location: "Kenya",
            category: "REPORT",
            countries: ["Kenya"],
            link: "https://www.nca.go.ke/media/CONSTRUCTION_WASTE_STRATEGY_Nov_2025.pdf",
            accessed: ""
        },
        {
            title: "Integrated Solid Waste Management Strategy",
            author: "Rwanda Environment Management Authority (REMA)",
            year: "2022",
            location: "Rwanda",
            category: "REPORT",
            countries: ["Rwanda"],
            link: "https://www.rema.gov.rw/publications",
            accessed: ""
        },
        {
            title: "National Strategy for Transformation (NST2, 2024–2029)",
            author: "Government of Rwanda",
            year: "2024",
            location: "Rwanda",
            category: "REPORT",
            countries: ["Rwanda"],
            link: "https://www.minecofin.gov.rw/publications/reports",
            accessed: ""
        },
        {
            title: "Rwanda Urban & Environmental Performance Reports",
            author: "World Bank",
            year: "2023",
            location: "Rwanda",
            category: "REPORT",
            countries: ["Rwanda"],
            link: "https://documents.worldbank.org/",
            accessed: ""
        },
        {
            title: "Plastic Ban & Circular Economy Case Studies",
            author: "UNEP",
            year: "2022",
            location: "Rwanda",
            category: "REPORT",
            countries: ["Rwanda"],
            link: "https://www.unep.org/",
            accessed: ""
        },
        {
            title: "National Environmental Management: Waste Act",
            author: "Department of Forestry, Fisheries and the Environment (DFFE)",
            year: "2008",
            location: "South Africa",
            category: "REPORT",
            countries: ["South Africa"],
            link: "https://www.gov.za/documents/national-environmental-management-waste-act",
            accessed: ""
        },
        {
            title: "National Waste Management Strategy (NWMS)",
            author: "DFFE, South Africa",
            year: "2020",
            location: "South Africa",
            category: "REPORT",
            countries: ["South Africa"],
            link: "https://www.dffe.gov.za/sites/default/files/docs/2020national_wastemanagement_strategy.pdf",
            accessed: ""
        },
        {
            title: "South Africa Waste & Circular Economy Studies",
            author: "World Bank",
            year: "2023",
            location: "South Africa",
            category: "REPORT",
            countries: ["South Africa"],
            link: "https://documents.worldbank.org/",
            accessed: ""
        },
        {
            title: "Extended Producer Responsibility (EPR) Reviews",
            author: "OECD",
            year: "2023",
            location: "South Africa",
            category: "REPORT",
            countries: ["South Africa"],
            link: "https://www.oecd.org/en/publications/oecd-environmental-performance-reviews-south-africa-2013_9789264202887-en.html",
            accessed: ""
        },
        {
            title: "Africa Circular Economy Alliance Reports",
            author: "UNEP",
            year: "2023",
            location: "Africa",
            category: "REPORT",
            countries: ["South Africa"],
            link: "https://www.aceaafrica.org/",
            accessed: ""
        }
    ],
    academic: [
        {
            title: "Urban solid waste management in Africa: A review of Nigeria, Kenya and South Africa",
            author: "Mhiba, F.",
            year: "2014",
            journal: "Journal of Environmental Planning and Management, 57(2), 221-235",
            category: "PEER-REVIEWED",
            countries: ["Nigeria", "Kenya", "South Africa"],
            link: "https://scholar.google.com/scholar?q=Urban+solid+waste+management+in+Africa+review+Nigeria+Kenya+South+Africa",
            accessed: ""
        },
        {
            title: "Environmental Performance Index",
            author: "Yale University",
            year: "2022, 2024",
            journal: "Yale Center for Environmental Law & Policy",
            category: "PEER-REVIEWED",
            countries: ["Nigeria"],
            link: "https://epi.yale.edu/",
            accessed: ""
        }
    ],
    datasets: [
        {
            title: "MSW Generation Rates per Capita (2018-2023)",
            provider: "AFDB Statistics Department",
            format: "CSV / XLSX",
            description: "Provider: AFDB Statistics Department | Format: CSV / XLSX",
            category: "DATASET",
            countries: ["All"],
            downloadLink: "https://www.afdb.org/en/knowledge/statistics",
            accessed: ""
        },
        {
            title: "Environmental & Urbanization Data",
            provider: "Nigeria National Bureau of Statistics (NBS)",
            format: "Government Database",
            description: "National statistical data on environment and urbanization",
            category: "DATASET",
            countries: ["Nigeria"],
            downloadLink: "https://nigerianstat.gov.ng/elibrary",
            accessed: ""
        },
        {
            title: "Global E-Waste Monitor",
            provider: "International Telecommunication Union (ITU)",
            format: "Database",
            description: "Comprehensive e-waste generation statistics",
            category: "DATASET",
            countries: ["Egypt", "Kenya"],
            downloadLink: "https://ewastemonitor.info/",
            accessed: ""
        },
        {
            title: "Kenya National Bureau of Statistics (KNBS)",
            provider: "KNBS",
            format: "Government Database",
            description: "National statistical data on waste and environment",
            category: "DATASET",
            countries: ["Kenya"],
            downloadLink: "https://www.knbs.or.ke/",
            accessed: ""
        },
        {
            title: "Kigali City Council – Waste Generation & Collection Data",
            provider: "Kigali City Council",
            format: "Government Database",
            description: "Municipal waste data for Kigali",
            category: "DATASET",
            countries: ["Rwanda"],
            downloadLink: "https://www.kigalicity.gov.rw/",
            accessed: ""
        },
        {
            title: "South Africa Waste Information System (SAWIS)",
            provider: "DFFE, South Africa",
            format: "Online Database",
            description: "Comprehensive national waste data system",
            category: "DATASET",
            countries: ["South Africa"],
            downloadLink: "http://sawis.environment.gov.za/",
            accessed: ""
        }
    ]
};

// Language switching functionality
function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const keys = element.getAttribute('data-i18n').split('.');
        let translation = translations[lang];
        
        keys.forEach(key => {
            translation = translation[key];
        });
        
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // Save language preference
    localStorage.setItem('selectedLanguage', lang);
}

// Initialize language functionality
function initializeLanguage() {
    const languageSelector = document.getElementById('language-selector');
    if (!languageSelector) return;

    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    
    languageSelector.value = savedLanguage;
    // Only apply translations if user has explicitly changed from default
    if (savedLanguage !== 'en') {
        setLanguage(savedLanguage);
    }
    
    languageSelector.addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });
}

// Render references by category
function renderReferences() {
    // Combine all references into one array
    const allReferences = [
        ...referencesData.institutional,
        ...referencesData.academic,
        ...referencesData.datasets
    ];
    renderReferenceCategory('all', allReferences);
}

function renderReferenceCategory(containerId, references) {
    const container = document.getElementById(`${containerId}-refs`);
    if (!container) return;

    container.innerHTML = '';
    
    references.forEach((ref, index) => {
        const type = ref.provider ? 'datasets' : (ref.journal ? 'academic' : 'institutional');
        const refCard = document.createElement('div');
        refCard.className = 'reference-card';
        refCard.dataset.countries = ref.countries.join(',');
        refCard.dataset.category = ref.category;
        refCard.dataset.searchText = `${ref.title} ${ref.author || ref.provider || ''} ${ref.countries.join(' ')}`.toLowerCase();

        if (type === 'datasets') {
            refCard.innerHTML = `
                <div class="reference-header">
                    <h3 class="reference-title">${ref.title}</h3>
                    <span class="reference-badge">${ref.category}</span>
                </div>
                <p class="reference-meta">${ref.description}</p>
                <div class="reference-footer">
                    <span class="reference-countries">${ref.countries.join(', ')}</span>
                    ${ref.downloadLink ? `<a href="#" class="reference-link">${ref.downloadLink}</a>` : ''}
                </div>
            `;
        } else if (type === 'academic') {
            refCard.innerHTML = `
                <div class="reference-header">
                    <h3 class="reference-title">${ref.title}</h3>
                    <span class="reference-badge">${ref.category}</span>
                </div>
                <p class="reference-author">${ref.author} (${ref.year}). <em>${ref.journal}</em></p>
                <div class="reference-footer">
                    <span class="reference-countries">${ref.countries.join(', ')}</span>
                    ${ref.link ? `<a href="#" class="reference-link">${ref.link}</a>` : ''}
                </div>
            `;
        } else {
            // Institutional reports
            refCard.innerHTML = `
                <div class="reference-header">
                    <h3 class="reference-title">${ref.title}</h3>
                    <span class="reference-badge">${ref.category}</span>
                </div>
                <p class="reference-author">${ref.author}. (${ref.year}). <em>${ref.title}</em>. ${ref.location}</p>
                <div class="reference-footer">
                    <span class="reference-countries">${ref.countries.join(', ')}</span>
                    ${ref.link ? `<a href="#" class="reference-link">${ref.link}</a>` : ''}
                    ${ref.accessed ? `<span class="reference-accessed">[ACCESSED: ${ref.accessed}]</span>` : ''}
                </div>
            `;
        }

        container.appendChild(refCard);
    });
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('reference-search');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        filterReferences(searchTerm);
    });
}

function filterReferences(searchTerm) {
    const allCards = document.querySelectorAll('.reference-card');
    
    allCards.forEach(card => {
        const searchText = card.dataset.searchText;
        
        if (searchText.includes(searchTerm)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initializeLanguage();
        renderReferences();
        initializeSearch();
    });
} else {
    initializeLanguage();
    renderReferences();
    initializeSearch();
}
