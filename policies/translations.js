// Translation data for Policies page
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
            title: "POLICIES & REGULATORY FRAMEWORKS",
            overview: "A centralized registry of legislative documents governing solid waste in Africa. This index covers the hierarchy of legal authority from international treaties to national acts and municipal bylaws, facilitating evidence-based policy comparison and compliance tracking."
        },
        navigation: {
            jumpTitle: "JUMP TO SECTION",
            international: "I. International Agreements",
            regional: "II. Regional Frameworks",
            national: "III. National Policies"
        },
        filters: {
            title: "FILTER BY AUTHORITY",
            au: "African Union (AU)",
            regional: "ECOWAS / EAC / SADC",
            national: "National Sovereignty"
        },
        sections: {
            international: {
                title: "I. INTERNATIONAL AGREEMENTS"
            },
            regional: {
                title: "II. REGIONAL FRAMEWORKS"
            },
            national: {
                title: "III. NATIONAL POLICY REGISTRY",
                note: "The following table presents primary waste management legislation for featured countries. Click the traceability icon to view the official gazette or legislative source."
            }
        },
        policies: {
            basel: {
                title: "Basel Convention on the Control of Transboundary Movements of Hazardous Wastes",
                coverage: "GLOBAL COVERAGE",
                description: "Addresses the transboundary movements of hazardous wastes and their disposal, including plastic waste amendments adopted in 2019."
            },
            bamako: {
                title: "Bamako Convention on Hazardous Wastes within Africa",
                coverage: "REGIONAL (AFRICA FOCUSED)",
                description: "Prohibits the import of hazardous waste into Africa and regulates the transboundary movement and management of hazardous wastes produced within the continent."
            },
            stockholm: {
                title: "Stockholm Convention on Persistent Organic Pollutants",
                coverage: "GLOBAL COVERAGE",
                description: "Addresses persistent organic pollutants (POPs) including those found in waste streams such as pesticides, industrial chemicals, and unintentional by-products."
            },
            acea: {
                title: "Africa Circular Economy Alliance (ACEA)",
                coverage: "CONTINENTAL ALLIANCE",
                description: "Multi-stakeholder platform advancing circular economy principles across Africa. Founding members include the African Union, World Economic Forum, African Development Bank, World Bank, and South Africa (2022)."
            },
            agenda2063: {
                title: "African Union Agenda 2063",
                coverage: "CONTINENTAL FRAMEWORK",
                description: "Africa's strategic framework for socio-economic transformation, including environmental sustainability goals and waste management as part of Aspiration 1 (Prosperous Africa based on inclusive growth and sustainable development)."
            },
            eac: {
                title: "East African Community (EAC) Protocol on Environment and Natural Resources",
                coverage: "REGIONAL (EAST AFRICA)",
                description: "Harmonizes environmental management policies among EAC partner states (Kenya, Tanzania, Uganda, Rwanda, Burundi, South Sudan, DRC), including waste management standards and transboundary waste movement."
            },
            ecowas: {
                title: "ECOWAS Policy on Environment",
                coverage: "REGIONAL (WEST AFRICA)",
                description: "Economic Community of West African States environmental policy framework addressing waste management, pollution control, and environmental protection across 15 West African nations including Nigeria."
            }
        },
        meta: {
            adopted: "Adopted",
            effectiveDate: "Effective",
            parties: "Parties",
            established: "Established",
            scope: "Scope",
            timeline: "Timeline",
            members: "Members"
        },
        links: {
            official: "Official Text",
            signatories: "Signatory List"
        },
        table: {
            country: "Country",
            regulation: "Primary Regulation / Act",
            effectiveDate: "Effective Date",
            keyProvisions: "Key Provisions",
            traceability: "Traceability"
        },
        disclaimer: {
            text: "Reference Protocol: All documents listed in this observatory are verified against original gazette publications. Citations follow the [Organization/Author, Year] convention for consistency with the Africa Waste Observatory reporting standards."
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
            title: "POLITIQUES ET CADRES RÉGLEMENTAIRES",
            overview: "Un registre centralisé des documents législatifs régissant les déchets solides en Afrique. Cet index couvre la hiérarchie de l'autorité juridique, des traités internationaux aux lois nationales et aux règlements municipaux, facilitant la comparaison des politiques et le suivi de la conformité."
        },
        navigation: {
            jumpTitle: "ALLER À LA SECTION",
            international: "I. Accords Internationaux",
            regional: "II. Cadres Régionaux",
            national: "III. Politiques Nationales"
        },
        filters: {
            title: "FILTRER PAR AUTORITÉ",
            au: "Union Africaine (UA)",
            regional: "CEDEAO / CAE / SADC",
            national: "Souveraineté Nationale"
        },
        sections: {
            international: {
                title: "I. ACCORDS INTERNATIONAUX"
            },
            regional: {
                title: "II. CADRES RÉGIONAUX"
            },
            national: {
                title: "III. REGISTRE DES POLITIQUES NATIONALES",
                note: "Le tableau suivant présente la législation principale en matière de gestion des déchets pour les pays présentés. Cliquez sur l'icône de traçabilité pour consulter la gazette officielle ou la source législative."
            }
        },
        table: {
            country: "Pays",
            regulation: "Réglementation / Loi Principale",
            effectiveDate: "Date d'Entrée en Vigueur",
            keyProvisions: "Dispositions Clés",
            traceability: "Traçabilité"
        },
        disclaimer: {
            text: "Protocole de Référence : Tous les documents répertoriés dans cet observatoire sont vérifiés par rapport aux publications officielles de la gazette. Les citations suivent la convention [Organisation/Auteur, Année] pour cohérence avec les normes de rapport de l'Observatoire Africain des Déchets."
        }
    }
};

// National policies data
const nationalPolicies = [
    {
        country: "South Africa",
        countryCode: "ZA",
        policies: [
            {
                name: "National Environmental Management: Waste Act (NEMWA)",
                effectiveDate: "2008",
                keyProvisions: "Comprehensive waste management framework, waste classification, licensing requirements, waste management hierarchy",
                link: "https://www.dffe.gov.za"
            },
            {
                name: "Extended Producer Responsibility (EPR) Regulations",
                effectiveDate: "2021 (May)",
                keyProvisions: "Mandatory EPR for e-waste, paper, packaging, and plastics. Producers must register with Producer Responsibility Organizations (PROs)",
                link: "https://www.dffe.gov.za"
            },
            {
                name: "Draft National Waste Management Strategy (NWMS) 2026",
                effectiveDate: "2026 (Draft)",
                keyProvisions: "Next-generation targets for waste diversion, circular economy integration, equitable service delivery addressing 37% household service gap",
                link: "https://www.dffe.gov.za"
            },
            {
                name: "National Determined Contributions (NDC) 2025 - Just Transition Framework",
                effectiveDate: "2025",
                keyProvisions: "Integrates informal waste pickers through 'pay-per-kg' incentives, health programs, methane reduction targets",
                link: "https://unfccc.int"
            }
        ]
    },
    {
        country: "Nigeria",
        countryCode: "NG",
        policies: [
            {
                name: "National Environmental Standards and Regulations Enforcement Agency (NESREA) Act",
                effectiveDate: "2007",
                keyProvisions: "Establishes NESREA as main enforcement agency for environmental standards and waste regulations",
                link: "https://www.nesrea.gov.ng"
            },
            {
                name: "Climate Change Act",
                effectiveDate: "2021",
                keyProvisions: "Net-zero emissions target by 2060, climate action framework including waste-to-energy and methane capture",
                link: "https://climatechange.gov.ng"
            },
            {
                name: "National Policy on Plastic Waste Management (NPPWM)",
                effectiveDate: "2020",
                keyProvisions: "Circular economy framework for plastic waste, promotes Extended Producer Responsibility (EPR), waste-to-value initiatives",
                link: "https://www.fmenv.gov.ng"
            },
            {
                name: "National Implementation Guidelines for Plastic Waste Management",
                effectiveDate: "2024",
                keyProvisions: "Developed with UNIDO and Japan, provides operational guidelines for NPPWM implementation, EPR schemes",
                link: "https://www.unido.org"
            },
            {
                name: "Lagos State Single-Use Plastic Ban",
                effectiveDate: "2025 (July 1)",
                keyProvisions: "Prohibits styrofoam, single-use straws, cutlery, plates. Offenders risk business shutdown. Addresses Lagos's 13,000 tons/day waste crisis",
                link: "https://lagosstate.gov.ng"
            },
            {
                name: "Gas-to-Waste Policy",
                effectiveDate: "2022",
                keyProvisions: "Methane capture and waste-to-energy initiatives, landfill gas recovery, biogas production",
                link: "https://www.fmenv.gov.ng"
            }
        ]
    },
    {
        country: "Kenya",
        countryCode: "KE",
        policies: [
            {
                name: "Sustainable Waste Management Act",
                effectiveDate: "2022",
                keyProvisions: "Provides legal backbone for circular economy transitions, mandates EPR compliance, waste segregation, Material Recovery Facilities (MRFs)",
                link: "https://www.nema.go.ke"
            },
            {
                name: "Extended Producer Responsibility (EPR) Regulations",
                effectiveDate: "2020 (Updated 2024)",
                keyProvisions: "Producers responsible for end-of-life management of products, mandatory registration, take-back schemes for packaging and electronics",
                link: "https://www.nema.go.ke"
            },
            {
                name: "Sustainable Waste Management Regulations",
                effectiveDate: "2024",
                keyProvisions: "County-level implementation guidelines, designated 'refuse chambers', segregated collection services, licensing requirements",
                link: "https://www.nema.go.ke"
            },
            {
                name: "National Sanitation Management Policy",
                effectiveDate: "2024",
                keyProvisions: "Integrated approach to sanitation and solid waste management, targets 100% coverage by 2030",
                link: "https://www.health.go.ke"
            },
            {
                name: "National Construction Authority - Construction & Demolition Waste Strategy",
                effectiveDate: "2025-2030",
                keyProvisions: "C&D waste treatment requirements, material recovery targets, circular construction practices",
                link: "https://www.nca.go.ke"
            }
        ]
    },
    {
        country: "Egypt",
        countryCode: "EG",
        policies: [
            {
                name: "Waste Management Regulation Law (Law No. 202 of 2020)",
                effectiveDate: "2020",
                keyProvisions: "Ended decades of fragmented regulation. Establishes Polluter Pays Principle, licensing framework, waste classification system",
                link: "https://www.eeaa.gov.eg"
            },
            {
                name: "Executive Regulations for Law No. 202",
                effectiveDate: "2022",
                keyProvisions: "Operational guidelines for public and private sector licensing, waste facility standards, monitoring protocols",
                link: "https://www.eeaa.gov.eg"
            },
            {
                name: "Prime Ministerial Decree No. 662 of 2025 - EPR Implementation",
                effectiveDate: "2025",
                keyProvisions: "Implements Extended Producer Responsibility for plastics and electronics, establishes plastic bag fees, producer registration requirements",
                link: "https://www.eeaa.gov.eg"
            },
            {
                name: "National Solid Waste Management Programme (NSWMP)",
                effectiveDate: "2015 (Ongoing)",
                keyProvisions: "Institutional overhaul, promotes waste segregation, MRFs, composting, formal recycling markets. Targets recycling rate increase from 37% (2024) to 60% by 2027",
                link: "https://www.worldbank.org/en/country/egypt"
            },
            {
                name: "Single-Use Plastic Restrictions",
                effectiveDate: "2023 (Phased)",
                keyProvisions: "Restrictions on single-use plastics with green tax incentives for alternatives",
                link: "https://www.eeaa.gov.eg"
            }
        ]
    },
    {
        country: "Rwanda",
        countryCode: "RW",
        policies: [
            {
                name: "Law No. 48/2018 Governing Environment",
                effectiveDate: "2018",
                keyProvisions: "Comprehensive environmental protection framework including waste management provisions, environmental impact assessments",
                link: "https://www.rema.gov.rw"
            },
            {
                name: "Integrated Solid Waste Management Strategy",
                effectiveDate: "2022",
                keyProvisions: "National framework for sustainable waste management aligned with circular economy principles, targets zero-waste cities by 2035",
                link: "https://www.rema.gov.rw"
            },
            {
                name: "National Strategy for Transformation (NST2)",
                effectiveDate: "2024-2029",
                keyProvisions: "Economic transformation strategy including circular economy targets, waste management modernization, green jobs creation",
                link: "https://www.minecofin.gov.rw"
            },
            {
                name: "National Circular Economy Action Plan",
                effectiveDate: "2023",
                keyProvisions: "Transforms Kigali into zero-waste city by 2035, 100% EPR compliance by 2030, 10-R circular principles implementation",
                link: "https://www.rema.gov.rw"
            },
            {
                name: "Plastic Bag Ban",
                effectiveDate: "2008",
                keyProvisions: "Africa's pioneering plastic bag ban, strict enforcement, reduced plastic waste composition to 3.7% of total waste stream",
                link: "https://www.rema.gov.rw"
            },
            {
                name: "Extended Producer Responsibility (EPR) Regulations for E-Waste",
                effectiveDate: "2020 (Phased targets to 2030)",
                keyProvisions: "30% EPR compliance (2024) → 50% (2026) → 70% (2028) → 100% (2030). Manages ~2,500 electronics producers through Producer Responsibility Organization",
                link: "https://www.rura.rw"
            }
        ]
    }
];

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
    
    // Reload national policies table with translated headers
    loadNationalPolicies();
}

// Load national policies into table
function loadNationalPolicies() {
    const tableBody = document.getElementById('policy-table-body');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    nationalPolicies.forEach(countryData => {
        countryData.policies.forEach((policy, index) => {
            const row = document.createElement('tr');
            
            // Country column (only show for first policy of each country)
            if (index === 0) {
                const countryCell = document.createElement('td');
                countryCell.innerHTML = `<strong>${countryData.country}</strong> <span class="flag-emoji">${getCountryFlag(countryData.countryCode)}</span>`;
                countryCell.rowSpan = countryData.policies.length;
                row.appendChild(countryCell);
            }
            
            // Regulation name
            const nameCell = document.createElement('td');
            nameCell.innerHTML = `<strong>${policy.name}</strong>`;
            row.appendChild(nameCell);
            
            // Effective date
            const dateCell = document.createElement('td');
            dateCell.textContent = policy.effectiveDate;
            row.appendChild(dateCell);
            
            // Key provisions
            const provisionsCell = document.createElement('td');
            provisionsCell.textContent = policy.keyProvisions;
            row.appendChild(provisionsCell);
            
            // Traceability link
            const linkCell = document.createElement('td');
            linkCell.innerHTML = `<a href="${policy.link}" target="_blank" class="trace-link">🔗</a>`;
            row.appendChild(linkCell);
            
            tableBody.appendChild(row);
        });
    });
    
    // Update total entries count
    const totalPolicies = nationalPolicies.reduce((sum, country) => sum + country.policies.length, 0);
    const totalEntriesElement = document.getElementById('total-entries');
    if (totalEntriesElement) {
        totalEntriesElement.textContent = totalPolicies + 7; // Add international/regional policies
    }
}

// Helper function to get country flag emoji
function getCountryFlag(countryCode) {
    const flags = {
        'ZA': '🇿🇦',
        'NG': '🇳🇬',
        'KE': '🇰🇪',
        'EG': '🇪🇬',
        'RW': '🇷🇼'
    };
    return flags[countryCode] || '';
}

// Initialize language functionality
function initializeLanguage() {
    const languageSelector = document.getElementById('language-selector');
    if (!languageSelector) {
        // Load policies even if no language selector
        loadNationalPolicies();
        return;
    }

    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    
    languageSelector.value = savedLanguage;
    // Only apply translations if user has explicitly changed from default
    if (savedLanguage !== 'en') {
        setLanguage(savedLanguage);
    } else {
        loadNationalPolicies();
    }
    
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
