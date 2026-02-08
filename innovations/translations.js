// Translation data for Innovations page
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
            title: "Technologies & Innovations",
            description: "Discover cutting-edge waste management technologies and innovative solutions transforming waste into value across Africa"
        },
        countries: {
            southAfrica: "South Africa",
            kenya: "Kenya",
            egypt: "Egypt",
            nigeria: "Nigeria"
        },
        sections: {
            overview: "Innovation Overview",
            smartTech: "Smart Technology & Monitoring",
            recycling: "Recycling & Recovery Innovations",
            wasteToEnergy: "Waste-to-Energy Solutions",
            community: "Community & Social Innovations",
            circular: "Circular Economy Models",
            impact: "Key Impact & Achievements"
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
            title: "Technologies et Innovations",
            description: "Découvrez des technologies de pointe en gestion des déchets et des solutions innovantes transformant les déchets en valeur à travers l'Afrique"
        },
        countries: {
            southAfrica: "Afrique du Sud",
            kenya: "Kenya",
            egypt: "Égypte",
            nigeria: "Nigéria"
        },
        sections: {
            overview: "Aperçu des Innovations",
            smartTech: "Technologie Intelligente et Surveillance",
            recycling: "Innovations en Recyclage et Récupération",
            wasteToEnergy: "Solutions de Valorisation Énergétique",
            community: "Innovations Communautaires et Sociales",
            circular: "Modèles d'Économie Circulaire",
            impact: "Impact Clé et Réalisations"
        }
    }
};

// Country-specific innovation data
const countryData = {
    "south-africa": {
        overviewText: "South Africa leads the continent in waste management innovation with a strong focus on smart technologies, Extended Producer Responsibility (EPR) frameworks, and circular economy transitions. The country is advancing IoT-enabled waste systems, recycling startups, and waste-to-energy solutions—all underpinned by a commitment to inclusive, 'Just Transition' policies that formally integrate informal waste pickers.",
        smartTech: [
            {
                title: "Smart Waste Monitoring & IoT Technology",
                description: "IoT sensors and smart bins are being deployed across major cities to monitor waste levels in real-time. This technology optimizes collection routes, reduces fuel consumption, and improves operational efficiency. Smart routing reduces collection costs by up to 30% while minimizing carbon emissions from waste vehicles."
            }
        ],
        recycling: [
            {
                title: "Regenize",
                description: "A digital platform that incentivizes recycling by rewarding households and informal waste pickers through mobile technology. Users earn points for recyclable materials, which can be exchanged for goods or services. This innovation bridges the formal-informal divide and increases diversion rates."
            },
            {
                title: "Boomba.mobi",
                description: "A mobile-based platform linking waste collection to food and essentials exchange. It includes small-scale organic processing systems such as worm farms for vermicomposting, reducing organic waste sent to landfills while producing nutrient-rich soil amendments."
            }
        ],
        wasteToEnergy: [
            {
                title: "Kibo Gauteng Thermal Power Station",
                description: "This planned facility aims to convert plastic waste into energy through pyrolysis technology, producing syngas and electricity. It represents a significant step toward diverting non-recyclable plastics from landfills while contributing to renewable energy generation. The project aligns with South Africa's 2025 climate targets for methane reduction and landfill gas capture."
            }
        ],
        community: [
            {
                title: "Just Transition Framework",
                description: "South Africa's 2025 National Determined Contributions (NDC) explicitly integrate informal waste pickers into formal waste systems through 'pay-per-kg' incentive models, health and safety programs, and recognition within District Development Models. This framework ensures social equity and economic inclusion in the waste sector."
            }
        ],
        circular: [
            {
                title: "Extended Producer Responsibility (EPR) Systems",
                description: "South Africa has Africa's most advanced EPR frameworks, particularly for e-waste and polymers. The new 2025 National E-Waste Policy establishes take-back schemes for electronics, while polymer recovery programs recently diverted over 430,000 tonnes of plastic from landfills."
            },
            {
                title: "Separation-at-Source Initiatives",
                description: "Government-backed programs encourage households and businesses to segregate waste at the point of generation. This reduces contamination, improves recycling efficiency, and supports decentralized organic waste processing to reduce methane emissions."
            }
        ],
        impact: [
            "Over 430,000 tonnes of plastics recovered annually through EPR schemes",
            "30% reduction in waste collection costs through smart routing",
            "First national policy integrating informal waste pickers into climate commitments (2025 NDC)",
            "Significant progress toward methane reduction targets via landfill gas capture",
            "Expansion of decentralized organic waste systems to divert biodegradables from landfills"
        ]
    },
    "kenya": {
        overviewText: "Kenya is at the forefront of waste innovation in East Africa, combining cutting-edge infrastructure projects with grassroots circular economy ventures. The country's 2024 Sustainable Waste Management Rules and commitment to the 'Five R's' (Refuse, Reduce, Reuse, Repurpose, Recycle) drive ambitious initiatives ranging from pneumatic waste systems to textile upcycling and biodegradable packaging solutions.",
        smartTech: [
            {
                title: "Pneumatic Waste Collection – Konza Technopolis",
                description: "Africa's first underground pneumatic waste collection network eliminates the need for waste trucks by using vacuum tubes to transport waste to central sorting facilities. This innovative system reduces traffic congestion, lowers emissions, and ensures hygienic, odor-free waste management in urban areas. The system showcases Kenya's vision for smart city development."
            }
        ],
        recycling: [
            {
                title: "HyaPak",
                description: "Converts invasive water hyacinth—a persistent ecological problem in Lake Victoria—into biodegradable packaging materials. This innovation addresses both environmental pollution and plastic waste by providing a sustainable alternative to conventional packaging while creating employment opportunities in rural communities."
            },
            {
                title: "EcoPost",
                description: "Processes mixed plastic waste into durable building products, including eco-fencing and construction materials. EcoPost diverts thousands of tons of plastics from landfills annually while supplying affordable, weather-resistant infrastructure materials for agriculture and real estate sectors."
            },
            {
                title: "Mr. Green Africa",
                description: "A tech-enabled plastics recycling platform that formalizes informal waste recovery supply chains. The platform connects waste pickers, aggregators, and recycling facilities through digital tracking, fair pricing, and consistent off-take agreements, improving livelihoods and recycling efficiency."
            }
        ],
        wasteToEnergy: [
            {
                title: "Kakamega Waste-to-Energy Plant",
                description: "Currently under construction, this facility will incinerate solid waste to generate approximately 10 MW of electricity, enough to power thousands of homes. The project represents Kenya's push toward sustainable waste disposal while contributing to renewable energy targets and reducing reliance on landfills like the hazardous Dandora dumpsite."
            }
        ],
        community: [
            {
                title: "County-Level Waste Management Systems",
                description: "Kenya's devolved governance structure empowers 47 counties to design localized waste solutions. Recent 2024 regulations mandate counties to provide designated 'refuse chambers' and segregated collection services, with pilots in Murang'a and Taita Taveta showing promising results in youth group and CBO-led collection models."
            },
            {
                title: "Textile Take-Back Hubs",
                description: "To manage the 'mitumba crisis' (22.5 million kg of annual second-hand clothing imports), Kenya is establishing take-back hubs where used textiles are collected, sorted, and upcycled into new circular fashion products. This innovation reduces textile waste going to dumpsites and supports sustainable fashion entrepreneurship."
            }
        ],
        circular: [
            {
                title: "Five R's Framework",
                description: "Kenya's national strategy emphasizes Refuse, Reduce, Reuse, Repurpose, and Recycle principles. This comprehensive approach encourages behavior change, product redesign, and circular business models across industries, from textiles to electronics."
            },
            {
                title: "Sustainable Waste Management Act (2022)",
                description: "Provides the legal backbone for circular economy transitions, mandating EPR compliance, waste segregation, and Material Recovery Facilities (MRFs) at county levels to capture previously uncollected waste streams."
            }
        ],
        impact: [
            "Africa's first pneumatic waste collection network operational (Konza Technopolis)",
            "Targeting 50% waste collection coverage nationwide (up from 30%) by 2027",
            "Major diversion of water hyacinth waste into commercial packaging",
            "Planned 10 MW waste-to-energy capacity from Kakamega plant",
            "Progressive closure of Dandora dumpsite and transition to engineered landfills",
            "Establishment of textile take-back hubs to combat 'mitumba' waste crisis"
        ]
    },
    "egypt": {
        overviewText: "Egypt's waste innovation landscape is deeply rooted in the world-renowned Zabbaleen informal recycling system while progressively incorporating digital platforms, government-led infrastructure reforms, and advanced circular economy initiatives. The country is expanding capacity to produce organic fertilizers, hydrogen, and advanced materials like graphene from waste streams, positioning itself as a regional leader in waste valorization.",
        smartTech: [
            {
                title: "Digital Credit Schemes for Informal Collectors",
                description: "Digital platforms reward informal waste collectors with credits for plastic waste delivered to aggregation centers. These schemes formalize financial transactions, improve traceability, and provide informal workers with secure income streams while increasing plastic recovery rates."
            }
        ],
        recycling: [
            {
                title: "Zabbaleen Informal Recycling System",
                description: "The Zabbaleen community in Cairo operates one of the most efficient informal recycling systems in the world, recovering up to 80% of collected waste through highly skilled manual and semi-mechanized sorting. This system serves as the backbone of Egypt's waste value chain, diverting millions of tons from landfills annually. Efforts are underway to formalize and improve working conditions while preserving operational efficiency."
            },
            {
                title: "Government Composting Facility Upgrades",
                description: "Egypt is modernizing 65+ government-owned composting facilities to handle the country's 50-60% organic waste fraction. Upgraded facilities produce high-quality organic fertilizer, reduce methane emissions from decomposition, and support agricultural productivity."
            }
        ],
        wasteToEnergy: [
            {
                title: "Integrated Solid Waste Management Sector (ISWMS)",
                description: "Large-scale Public-Private Partnerships (PPPs) are establishing waste-to-energy plants and engineered sanitary landfills to replace legacy dumpsites. These facilities will convert municipal solid waste into electricity and heat, supporting Egypt's renewable energy targets under Vision 2030."
            }
        ],
        community: [
            {
                title: "Informal Sector Integration Programs",
                description: "Government programs provide training, logistics support, and safety equipment to traditional Zabbaleen workers. Formalization initiatives include health insurance, legal recognition, and integration into municipal waste contracts, ensuring social protection without disrupting proven recovery systems."
            },
            {
                title: "Electricity-Bill-Linked Waste Fees",
                description: "To bridge the 35% funding gap in waste management, Egypt is piloting a system where waste fees are linked to electricity bills, ensuring consistent revenue streams for municipal waste services while expanding rural collection coverage from 35% to national targets."
            }
        ],
        circular: [
            {
                title: "Advanced Material Production from Waste",
                description: "Egypt is investing in facilities that produce hydrogen, graphene, and other advanced materials from waste feedstocks. These innovations transform waste from a disposal challenge into a high-value resource for industrial applications, supporting green industrial growth."
            },
            {
                title: "National Solid Waste Management Programme (NSWMP)",
                description: "This comprehensive reform program drives institutional overhaul, moving Egypt away from open dumping toward integrated waste systems. NSWMP promotes waste segregation, MRFs, composting, and formal recycling markets, targeting a national recycling rate increase from 2-4% to double digits."
            }
        ],
        impact: [
            "Up to 80% waste recovery achieved by Zabbaleen informal system",
            "65+ composting facilities modernized to process organic waste",
            "Successful closure of major legacy dumpsites (e.g., Al-Salam)",
            "Pilot waste-to-energy plants under construction via PPP models",
            "Electricity-bill-linked fees piloted to expand collection to underserved rural areas",
            "Advanced materials (graphene, hydrogen) production from waste streams underway"
        ]
    },
    "nigeria": {
        overviewText: "Nigeria's innovation ecosystem is driven by social enterprises and mobile technology platforms that democratize access to recycling services, especially for low-income urban households. From SMS-based points systems to cargo-bike collection models and waste-to-product ventures, Nigerian innovators are tackling the country's massive waste challenges with scalable, community-centered solutions.",
        smartTech: [
            {
                title: "Mobile SMS & App-Based Recycling Platforms",
                description: "Nigerian startups use SMS and mobile apps to connect households with recycling services. Users register via text, schedule pickups, and earn points for recyclables—making recycling accessible even in areas with limited internet connectivity. This approach lowers barriers to participation and formalizes informal markets."
            }
        ],
        recycling: [
            {
                title: "Wecyclers",
                description: "A pioneering social enterprise using low-cost cargo bikes (Wecycles) to collect recyclable waste from households in low-income neighborhoods. Participants earn points through an SMS-based system, which can be exchanged for household goods, food, or cash. Wecyclers has diverted thousands of tons of waste from landfills and provided economic opportunities for waste collectors."
            },
            {
                title: "Vicfold Recyclers",
                description: "Converts plastic waste into resins used in manufacturing. The company processes post-consumer plastics into raw material feedstock for industries, reducing dependence on virgin plastic imports while addressing Nigeria's plastic waste crisis."
            },
            {
                title: "Salubata",
                description: "Transforms discarded plastic waste into modular, fashionable footwear. This upcycling venture addresses plastic pollution while creating affordable, durable shoes for local markets, demonstrating the potential of circular design in consumer goods."
            }
        ],
        wasteToEnergy: [
            {
                title: "Phoenix Edison Waste-to-Energy Facility",
                description: "A USD 116 million investment in waste-to-energy infrastructure, this facility will process municipal solid waste to generate electricity. The project aligns with Nigeria's Climate Change Act (2021) and Gas-to-Waste Policy (2022), targeting methane capture and renewable energy generation from waste streams."
            }
        ],
        community: [
            {
                title: "Community-Based Points Systems",
                description: "Grassroots recycling programs use points-based incentives to encourage households to separate and collect recyclables. These programs build environmental awareness, reduce waste leakage into drainage systems, and create micro-entrepreneurship opportunities for waste aggregators."
            },
            {
                title: "Material Recovery Facilities (MRFs) Expansion",
                description: "New MRFs are being established in Lagos and other major cities to capture the 60% uncollected waste stream. These facilities sort, process, and prepare recyclables for market, supporting Nigeria's goal to increase recycling rates from below 10% to national targets."
            }
        ],
        circular: [
            {
                title: "Extended Producer Responsibility (EPR) Initiatives",
                description: "Nigeria is rolling out EPR schemes for packaging, plastics, and electronics. Producers are required to finance take-back and recycling systems, shifting responsibility upstream and incentivizing sustainable product design."
            },
            {
                title: "Single-Use Plastic Ban Enforcement (2025)",
                description: "The January 2025 ban on single-use plastic bags, straws, and styrofoam marks a turning point for Nigeria's plastic reduction strategy. Enforcement is being backed by awareness campaigns, alternative product promotion, and penalties for non-compliance."
            }
        ],
        impact: [
            "Wecyclers has diverted over 5,000 tonnes of waste from landfills",
            "Salubata has repurposed thousands of kilograms of plastic into footwear",
            "USD 116M Phoenix Edison WtE facility expected to process 1,000+ tonnes daily",
            "Expansion of MRFs targeting 60% uncollected waste stream",
            "Enforcement of single-use plastic ban reducing plastic leakage by significant margins",
            "Points-based systems engaging tens of thousands of low-income households in recycling"
        ]
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

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLanguage);
} else {
    initializeLanguage();
}

// Function to load country-specific data
function loadCountryData(countryCode) {
    const data = countryData[countryCode];
    if (!data) return;

    // Update overview text
    const overviewText = document.querySelector('.overview-text');
    if (overviewText) {
        overviewText.textContent = data.overviewText;
    }

    // Load Smart Technology section
    const smartTechGrid = document.querySelector('[data-country="smartTech"]');
    if (smartTechGrid && data.smartTech) {
        smartTechGrid.innerHTML = data.smartTech.map(item => `
            <div class="innovation-card">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `).join('');
    }

    // Load Recycling section
    const recyclingGrid = document.querySelector('[data-country="recycling"]');
    if (recyclingGrid && data.recycling) {
        recyclingGrid.innerHTML = data.recycling.map(item => `
            <div class="innovation-card">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `).join('');
    }

    // Load Waste-to-Energy section
    const wteGrid = document.querySelector('[data-country="wasteToEnergy"]');
    if (wteGrid && data.wasteToEnergy) {
        wteGrid.innerHTML = data.wasteToEnergy.map(item => `
            <div class="innovation-card">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `).join('');
    }

    // Load Community section
    const communityGrid = document.querySelector('[data-country="community"]');
    if (communityGrid && data.community) {
        communityGrid.innerHTML = data.community.map(item => `
            <div class="innovation-card">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `).join('');
    }

    // Load Circular Economy section
    const circularGrid = document.querySelector('[data-country="circular"]');
    if (circularGrid && data.circular) {
        circularGrid.innerHTML = data.circular.map(item => `
            <div class="innovation-card">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `).join('');
    }

    // Load Impact section
    const impactList = document.querySelector('[data-country="impact"]');
    if (impactList && data.impact) {
        impactList.innerHTML = data.impact.map(item => `
            <li>${item}</li>
        `).join('');
    }
}

// Initialize country selector
function initializeCountrySelector() {
    const countrySelector = document.getElementById('country-selector');
    if (!countrySelector) return;

    // Load the first country by default
    const defaultCountry = countrySelector.value || 'south-africa';
    loadCountryData(defaultCountry);

    // Add change event listener
    countrySelector.addEventListener('change', (e) => {
        loadCountryData(e.target.value);
    });
}

// Initialize everything when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initializeLanguage();
        initializeCountrySelector();
    });
} else {
    initializeLanguage();
    initializeCountrySelector();
}
