// Translation data
const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            data: "Data",
            research: "Research",
            resources: "Resources"
        },
        hero: {
            title: "Advancing Sustainable Waste Management in Africa",
            description: "The Africa Waste Observatory provides critical data and insights to support evidence-based policy-making, resource optimization, and environmental protection across the continent. Join us in building a greener future.",
            explore: "Explore Observatory",
            partner: "Partner With Us"
        },
        objectives: {
            title: "Our Core Objectives",
            data: {
                title: "Data Collection & Harmonization",
                desc: "Standardize waste data across Africa for coherent analysis."
            },
            policy: {
                title: "Policy Development Support",
                desc: "Provide evidence based insights to inform waste policy formulation."
            },
            innovation: {
                title: "Innovation & Best Practices",
                desc: "Showcase and promote cutting-edge waste management solutions."
            },
            capacity: {
                title: "Capacity Building & Training",
                desc: "Empower local communities with tools for sustainable practices."
            }
        },
        explore: {
            title: "Explore the Observatory",
            countries: {
                title: "Country Profiles",
                desc: "Access country-specific waste profiles and statistics."
            },
            streams: {
                title: "Waste Streams",
                desc: "Analyze detailed data on various types of waste materials."
            },
            tech: {
                title: "Technologies",
                desc: "Discover innovative waste processing and recycling technologies."
            },
            policies: {
                title: "Policies",
                desc: "Review existing waste management policies and regulations."
            }
        },
        insights: {
            title: "Featured Insights & Highlights",
            plastic: {
                title: "Significant reduction in plastic waste in coastal regions due to new initiatives.",
                label: "Plastic Waste Reduced",
                source: "Source: Environmental Agency Report"
            },
            investment: {
                title: "Increase in recycling infrastructure investments across West Africa.",
                label: "Investment Growth",
                source: "Source: African Development Bank"
            },
            policy: {
                title: "New policy framework adopted by 10 nations for circular economy principles.",
                label: "Policy Adoption",
                source: "Source: UN Environment Programme"
            },
            composting: {
                title: "Successful implementation of organic composting programs in urban centers.",
                label: "Organic Waste Diverted",
                source: "Source: Local Municipality Data"
            }
        },
        footer: {
            references: "References",
            dataSources: "Data Sources",
            privacy: "Privacy Policy",
            contact: "Contact",
            copyright: "© 2026 Africa Waste Observatory. All rights reserved."
        }
    },
    fr: {
        nav: {
            home: "Accueil",
            about: "À propos",
            data: "Données",
            research: "Recherche",
            resources: "Ressources"
        },
        hero: {
            title: "Promouvoir la Gestion Durable des Déchets en Afrique",
            description: "L'Observatoire Africain des Déchets fournit des données et des analyses essentielles pour soutenir l'élaboration de politiques fondées sur des preuves, l'optimisation des ressources et la protection de l'environnement à travers le continent. Rejoignez-nous pour construire un avenir plus vert.",
            explore: "Explorer l'Observatoire",
            partner: "Devenez Partenaire"
        },
        objectives: {
            title: "Nos Objectifs Principaux",
            data: {
                title: "Collecte et Harmonisation des Données",
                desc: "Standardiser les données sur les déchets en Afrique pour une analyse cohérente."
            },
            policy: {
                title: "Soutien au Développement des Politiques",
                desc: "Fournir des informations fondées sur des preuves pour éclairer la formulation des politiques de gestion des déchets."
            },
            innovation: {
                title: "Innovation et Meilleures Pratiques",
                desc: "Présenter et promouvoir des solutions de pointe en gestion des déchets."
            },
            capacity: {
                title: "Renforcement des Capacités et Formation",
                desc: "Donner aux communautés locales les outils pour des pratiques durables."
            }
        },
        explore: {
            title: "Explorer l'Observatoire",
            countries: {
                title: "Profils des Pays",
                desc: "Accéder aux profils et statistiques des déchets spécifiques à chaque pays."
            },
            streams: {
                title: "Flux de Déchets",
                desc: "Analyser des données détaillées sur divers types de matériaux de déchets."
            },
            tech: {
                title: "Technologies",
                desc: "Découvrir des technologies innovantes de traitement et de recyclage des déchets."
            },
            policies: {
                title: "Politiques",
                desc: "Examiner les politiques et réglementations existantes en matière de gestion des déchets."
            }
        },
        insights: {
            title: "Informations et Faits Saillants",
            plastic: {
                title: "Réduction significative des déchets plastiques dans les régions côtières grâce à de nouvelles initiatives.",
                label: "Déchets Plastiques Réduits",
                source: "Source: Rapport de l'Agence Environnementale"
            },
            investment: {
                title: "Augmentation des investissements dans les infrastructures de recyclage en Afrique de l'Ouest.",
                label: "Croissance des Investissements",
                source: "Source: Banque Africaine de Développement"
            },
            policy: {
                title: "Nouveau cadre politique adopté par 10 nations pour les principes de l'économie circulaire.",
                label: "Adoption de Politiques",
                source: "Source: Programme des Nations Unies pour l'Environnement"
            },
            composting: {
                title: "Mise en œuvre réussie de programmes de compostage organique dans les centres urbains.",
                label: "Déchets Organiques Détournés",
                source: "Source: Données Municipales Locales"
            }
        },
        footer: {
            references: "Références",
            dataSources: "Sources de Données",
            privacy: "Politique de Confidentialité",
            contact: "Contact",
            copyright: "© 2026 Observatoire Africain des Déchets. Tous droits réservés."
        }
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
    setLanguage(savedLanguage);
    
    languageSelector.addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLanguage);
} else {
    initializeLanguage();
}
