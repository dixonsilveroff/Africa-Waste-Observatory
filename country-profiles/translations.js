// Translation data for Country Profiles page
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
            title: "Country Profile"
        },
        countries: {
            southAfrica: "South Africa",
            egypt: "Egypt",
            nigeria: "Nigeria",
            kenya: "Kenya"
        },
        overview: {
            title: "Overview",
            population: "Population",
            landArea: "Land Area",
            totalWaste: "Total Waste Generated (2022)",
            wastePerCapita: "Waste Per Capita (2022)"
        },
        indicators: {
            title: "Key Waste Indicators",
            recyclingRate: {
                title: "Recycling Rate",
                desc: "Percentage of total waste recycled."
            },
            landfillRate: {
                title: "Landfill Rate",
                desc: "Percentage of total waste sent to landfills."
            },
            compostingRate: {
                title: "Composting Rate",
                desc: "Percentage of organic waste composted."
            },
            collectionCoverage: {
                title: "Formal Collection Coverage",
                desc: "Households with access to formal waste collection."
            },
            informalSector: {
                title: "Informal Sector Participation",
                desc: "Number of informal waste pickers contributing to recycling."
            },
            wasteToEnergy: {
                title: "Waste-to-Energy Plants",
                desc: "Operational waste-to-energy facilities in the country."
            }
        },
        visualizations: {
            title: "Waste Data Visualizations",
            trends: {
                title: "Waste Generation Trends (Million Tons)",
                subtitle: "Total waste generated per year"
            },
            composition: {
                title: "Waste Composition Breakdown",
                subtitle: "Percentage of different waste types"
            },
            treatment: {
                title: "Waste Treatment Methods",
                subtitle: "Distribution of waste treatment methods"
            }
        },
        resources: {
            title: "Related Reports & Resources",
            report1: {
                badge: "Policy Report"
            },
            report2: {
                badge: "Data Report"
            },
            report3: {
                badge: "Case Study"
            },
            viewReport: "View Report →"
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
            title: "Profil du Pays"
        },
        countries: {
            southAfrica: "Afrique du Sud",
            egypt: "Égypte",
            nigeria: "Nigéria",
            kenya: "Kenya"
        },
        overview: {
            title: "Aperçu",
            population: "Population",
            landArea: "Superficie",
            totalWaste: "Déchets Totaux Générés (2022)",
            wastePerCapita: "Déchets Par Habitant (2022)"
        },
        indicators: {
            title: "Indicateurs Clés des Déchets",
            recyclingRate: {
                title: "Taux de Recyclage",
                desc: "Pourcentage du total des déchets recyclés."
            },
            landfillRate: {
                title: "Taux de Mise en Décharge",
                desc: "Pourcentage du total des déchets envoyés en décharge."
            },
            compostingRate: {
                title: "Taux de Compostage",
                desc: "Pourcentage de déchets organiques compostés."
            },
            collectionCoverage: {
                title: "Couverture de Collecte Formelle",
                desc: "Ménages ayant accès à la collecte formelle des déchets."
            },
            informalSector: {
                title: "Participation du Secteur Informel",
                desc: "Nombre de récupérateurs informels contribuant au recyclage."
            },
            wasteToEnergy: {
                title: "Usines de Valorisation Énergétique",
                desc: "Installations de valorisation énergétique opérationnelles dans le pays."
            }
        },
        visualizations: {
            title: "Visualisations des Données sur les Déchets",
            trends: {
                title: "Tendances de Génération des Déchets (Millions de Tonnes)",
                subtitle: "Total des déchets générés par an"
            },
            composition: {
                title: "Répartition de la Composition des Déchets",
                subtitle: "Pourcentage des différents types de déchets"
            },
            treatment: {
                title: "Méthodes de Traitement des Déchets",
                subtitle: "Distribution des méthodes de traitement des déchets"
            }
        },
        resources: {
            title: "Rapports et Ressources Connexes",
            report1: {
                badge: "Rapport de Politique"
            },
            report2: {
                badge: "Rapport de Données"
            },
            report3: {
                badge: "Étude de Cas"
            },
            viewReport: "Voir le Rapport →"
        }
    }
};

// Country-specific data
const countryData = {
    "south-africa": {
        population: "60.4M",
        landArea: "1.22M km²",
        totalWaste: "122M tons",
        wastePerCapita: "0.9 kg/day",
        recyclingRate: "11%",
        landfillRate: "89%",
        compostingRate: "0.5%",
        collectionCoverage: "80-90%",
        informalSector: "~60,000 waste pickers",
        wasteToEnergy: "2 facilities",
        report1Title: "National Waste Management Strategy 2022",
        report1Desc: "A comprehensive policy document outlining the strategic approach to waste management including Just Transition and informal sector integration.",
        report1Date: "Published: Jan 2022",
        report2Title: "State of Waste Report 2020",
        report2Desc: "Annual report detailing waste generation, EPR implementation, and polymer recovery statistics.",
        report2Date: "Published: Mar 2021",
        report3Title: "Plastic Waste Recycling Initiative",
        report3Desc: "Overview of Extended Producer Responsibility frameworks and the 430,000 tonnes polymer recycling achievement.",
        report3Date: "Published: Aug 2023"
    },
    "egypt": {
        population: "104M",
        landArea: "1.01M km²",
        totalWaste: "100M tons",
        wastePerCapita: "0.8 kg/day",
        recyclingRate: "2-4%",
        landfillRate: "~95%",
        compostingRate: "0.1%",
        collectionCoverage: "80-85% (urban), 35% (rural)",
        informalSector: "Zaballeen: ~70,000 people",
        wasteToEnergy: "1 facility (planned)",
        report1Title: "National Solid Waste Management Programme",
        report1Desc: "Comprehensive institutional overhaul initiative to transition from legacy dumping to engineered sanitary landfills.",
        report1Date: "Published: Jan 2023",
        report2Title: "Zaballeen Recycling System Study",
        report2Desc: "Analysis of the informal recycling system in Cairo achieving up to 80% diversion rates through manual sorting.",
        report2Date: "Published: Sep 2021",
        report3Title: "ISWMS Public-Private Partnership Framework",
        report3Desc: "Overview of Integrated Solid Waste Management Sector development and PPP opportunities.",
        report3Date: "Published: May 2022"
    },
    "nigeria": {
        population: "218M",
        landArea: "923,768 km²",
        totalWaste: "32M tons",
        wastePerCapita: "0.5 kg/day",
        recyclingRate: "~13% (Lagos)",
        landfillRate: "~85%",
        compostingRate: "<1%",
        collectionCoverage: "20-30% (national)",
        informalSector: "~100,000+ informal collectors",
        wasteToEnergy: "3 facilities (planned)",
        report1Title: "Lagos PSP Waste Management Model",
        report1Desc: "Analysis of Private Sector Participation model in waste collection and its effectiveness in Nigeria's largest city.",
        report1Date: "Published: Feb 2023",
        report2Title: "Single-Use Plastic Ban Implementation 2025",
        report2Desc: "Report on the enforcement of the January 2025 ban on plastic bags, straws, and styrofoam.",
        report2Date: "Published: Jan 2025",
        report3Title: "Phoenix Edison Waste-to-Energy Project",
        report3Desc: "Overview of the USD 116M waste-to-energy facility addressing the Olusosun dumpsite challenges.",
        report3Date: "Published: Nov 2024"
    },
    "kenya": {
        population: "54M",
        landArea: "580,367 km²",
        totalWaste: "~22M tons",
        wastePerCapita: "0.5 kg/day",
        recyclingRate: "~8%",
        landfillRate: "~90%",
        compostingRate: "<1%",
        collectionCoverage: "~30% (national)",
        informalSector: "~300,000 waste pickers",
        wasteToEnergy: "2 facilities (1 operational, 1 under construction)",
        report1Title: "Sustainable Waste Management Act 2022",
        report1Desc: "Comprehensive legislation establishing devolved waste management responsibilities across 47 counties.",
        report1Date: "Published: Dec 2022",
        report2Title: "Textile Waste and Mitumba Crisis",
        report2Desc: "Analysis of the 22.5 million kg annual clothing imports and circular fashion solutions.",
        report2Date: "Published: Jun 2023",
        report3Title: "Konza Technopolis Pneumatic Collection System",
        report3Desc: "Africa's first underground vacuum waste collection network case study.",
        report3Date: "Published: Mar 2024"
    }
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

// Country switching functionality
function updateCountryData(countryKey) {
    const data = countryData[countryKey];
    if (!data) return;

    // Update all elements with data-country attribute
    const countryElements = document.querySelectorAll('[data-country]');
    countryElements.forEach(element => {
        const field = element.getAttribute('data-country');
        if (data[field]) {
            element.textContent = data[field];
        }
    });

    // Save country preference
    localStorage.setItem('selectedCountry', countryKey);
}

// Initialize country selector
function initializeCountrySelector() {
    const countrySelector = document.getElementById('country-selector');
    if (!countrySelector) return;

    const savedCountry = localStorage.getItem('selectedCountry') || 'south-africa';
    
    countrySelector.value = savedCountry;
    updateCountryData(savedCountry);
    
    countrySelector.addEventListener('change', (e) => {
        updateCountryData(e.target.value);
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initializeLanguage();
        initializeCountrySelector();
    });
} else {
    initializeLanguage();
    initializeCountrySelector();
}
