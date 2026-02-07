// Translation data for Waste Streams page
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
        hero: {
            title: "Africa's Waste Streams Uncovered",
            description: "Explore comprehensive data and insights on various waste categories across the African continent. Understand the challenges, opportunities, and sustainable practices for a cleaner future."
        },
        categories: {
            title: "Key Waste Categories",
            viewDetails: "View Details",
            plastics: {
                title: "Plastics",
                description: "Addressing the global challenge of plastic pollution, from single-use items to manufacturing."
            },
            organics: {
                title: "Organics",
                description: "Managing organic waste through composting, anaerobic digestion, and sustainable agricultural practices."
            },
            metals: {
                title: "Metals",
                description: "Recycling ferrous and non-ferrous metals to conserve resources and reduce environmental impact."
            },
            glass: {
                title: "Glass",
                description: "Promoting glass recycling and reuse to minimize landfill waste and energy consumption."
            },
            ewaste: {
                title: "E-Waste",
                description: "Tackling the complex issue of electronic waste, its hazardous components, and recovery strategies."
            },
            hazardous: {
                title: "Hazardous Waste",
                description: "Safe management and disposal of hazardous materials to protect public health and the environment."
            }
        },
        insights: {
            backToCategories: "← Back to All Categories"
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
        hero: {
            title: "Les Flux de Déchets en Afrique Révélés",
            description: "Explorez des données et des informations complètes sur diverses catégories de déchets à travers le continent africain. Comprenez les défis, les opportunités et les pratiques durables pour un avenir plus propre."
        },
        categories: {
            title: "Catégories de Déchets Clés",
            viewDetails: "Voir les Détails",
            plastics: {
                title: "Plastiques",
                description: "Relever le défi mondial de la pollution plastique, des articles à usage unique à la fabrication."
            },
            organics: {
                title: "Organiques",
                description: "Gestion des déchets organiques par compostage, digestion anaérobie et pratiques agricoles durables."
            },
            metals: {
                title: "Métaux",
                description: "Recyclage des métaux ferreux et non ferreux pour conserver les ressources et réduire l'impact environnemental."
            },
            glass: {
                title: "Verre",
                description: "Promotion du recyclage et de la réutilisation du verre pour minimiser les déchets d'enfouissement et la consommation d'énergie."
            },
            ewaste: {
                title: "Déchets Électroniques",
                description: "Aborder la question complexe des déchets électroniques, leurs composants dangereux et les stratégies de récupération."
            },
            hazardous: {
                title: "Déchets Dangereux",
                description: "Gestion et élimination sûres des matériaux dangereux pour protéger la santé publique et l'environnement."
            }
        },
        insights: {
            backToCategories: "← Retour à Toutes les Catégories"
        }
    }
};

// Waste stream detailed data
const wasteStreamData = {
    plastics: {
        title: "Detailed Insight: Plastics Waste",
        statistics: {
            annualGeneration: {
                label: "Annual Generation",
                value: "17 Million Tons",
                sublabel: "Africa (2024)"
            },
            recyclingRate: {
                label: "Recycling Rate (Avg.)",
                value: "12%",
                sublabel: "Continental Average"
            },
            majorSource: {
                label: "Major Source",
                value: "Packaging",
                sublabel: "Single-use plastics"
            },
            environmentalImpact: {
                label: "Environmental Impact",
                value: "High",
                sublabel: "Marine & soil pollution"
            }
        },
        chartData: {
            title: "Monthly Plastic Waste Trends",
            subtitle: "Generation and recycling volumes over the past six months (in Metric Tons)",
            months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            generation: [15, 13, 16, 14, 17, 16],
            recycled: [2, 1.5, 2.2, 1.8, 2.5, 2.3]
        },
        policySection: {
            title: "Policy & Regulatory Landscape",
            content: `African nations are increasingly adopting stringent policies to combat plastic waste, including bans on 
            single-use plastics and Extended Producer Responsibility (EPR) schemes. Countries like Rwanda and Kenya lead with 
            comprehensive plastic bag bans, while South Africa and Egypt are working to harmonize waste management standards and 
            facilitate cross-border recycling initiatives. However, implementation and enforcement remain key challenges. 
            Investments in circular economy models and public awareness campaigns are crucial for driving behavioral change and 
            fostering a sustainable plastics economy.`
        },
        caseStudy: {
            title: "Case Study: Rwanda's Plastic Ban",
            content: `Rwanda has been a pioneer in Africa with its comprehensive ban on plastic bags and single-use plastics, 
            implemented over a decade ago. This bold policy has led to significantly cleaner cities and reduced plastic pollution 
            in the country's waterways and ecosystems, demonstrating the positive impact of strong political will and community engagement. 
            While challenges persist in managing other forms of plastic waste, Rwanda's success serves as a powerful model for other 
            nations striving for environmental sustainability.`
        },
        overview: `Plastic waste represents one of the most pressing environmental challenges across Africa. 
        Originating mainly from packaging, bottles, shopping bags, and single-use plastics, this waste stream has reached 
        critical levels. Global plastic waste reached approximately 220 million tonnes in 2024, with Africa experiencing rapid 
        growth due to urbanization and changing consumption patterns. Despite bans in countries like Kenya, plastic waste 
        continues to rise, while Egypt and Nigeria struggle with enforcement.`,
        challenges: [
            "Non-biodegradability - plastics persist in the environment for hundreds of years",
            "Low market value of some plastic types reduces recycling viability",
            "Mixed and contaminated plastics make sorting and processing difficult",
            "Weak enforcement of plastic bans and regulations",
            "Limited recycling infrastructure and facilities"
        ],
        solutions: [
            "Extended Producer Responsibility (EPR) schemes",
            "Plastic buy-back programs and deposit-refund systems",
            "Chemical recycling (plastic-to-fuel) technologies",
            "Design for recyclability and reduced plastic packaging",
            "Public awareness campaigns on plastic reduction",
            "Investment in formal recycling infrastructure"
        ]
    },
    organics: {
        title: "Detailed Insight: Organic Waste",
        statistics: {
            annualGeneration: {
                label: "Composition",
                value: "58%",
                sublabel: "Of Africa's total waste"
            },
            recyclingRate: {
                label: "Composting Rate",
                value: "<5%",
                sublabel: "Formal composting"
            },
            majorSource: {
                label: "Major Sources",
                value: "Food & Agriculture",
                sublabel: "Households & markets"
            },
            environmentalImpact: {
                label: "Methane Potential",
                value: "Very High",
                sublabel: "When improperly managed"
            }
        },
        chartData: {
            title: "Organic Waste Generation Trends",
            subtitle: "Monthly generation across key African cities (in Metric Tons)",
            months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            generation: [45, 48, 52, 50, 55, 54],
            recycled: [2, 2.2, 2.5, 2.3, 2.8, 2.7]
        },
        policySection: {
            title: "Policy & Regulatory Landscape",
            content: `Organic waste management policies across Africa are evolving, with increasing focus on composting, 
            anaerobic digestion, and biogas production. South Africa's National Waste Management Strategy prioritizes organic 
            waste diversion from landfills, while Kenya's Sustainable Waste Management Act mandates separation at source. 
            However, implementation remains limited due to infrastructure gaps and lack of public awareness. Egypt and Nigeria 
            are exploring public-private partnerships to develop composting facilities and biogas plants.`
        },
        caseStudy: {
            title: "Case Study: Community Composting in South Africa",
            content: `Several South African municipalities have successfully implemented community-based composting programs 
            that divert organic waste from landfills while creating jobs and producing valuable soil amendments. These programs 
            demonstrate how decentralized waste management can address multiple challenges simultaneously - reducing methane 
            emissions, improving soil quality, and providing economic opportunities for local communities.`
        },
        overview: `Organic waste, including food scraps, agricultural residues, yard waste, and biodegradable materials, 
        accounts for approximately 58% of Africa's total waste stream. This represents the highest-value opportunity for 
        waste management improvement. Poor management leads to methane emissions, odors, and disease vectors. High moisture 
        content makes incineration inefficient, and organic waste is often mixed with plastics and metals, complicating 
        management efforts.`,
        challenges: [
            "High moisture content reduces energy recovery efficiency",
            "Lack of composting and anaerobic digestion facilities",
            "Mixed waste collection contaminates organic materials",
            "Limited market for compost products",
            "Seasonal variations in generation volumes",
            "Methane emissions from improper disposal"
        ],
        solutions: [
            "Composting programs at household and community levels",
            "Anaerobic digestion for biogas production",
            "Separation at source initiatives",
            "Market development for compost products",
            "Integration with urban agriculture programs",
            "Decentralized processing to reduce transport costs"
        ]
    },
    ewaste: {
        title: "Detailed Insight: Electronic Waste (E-Waste)",
        statistics: {
            annualGeneration: {
                label: "Global E-Waste",
                value: "62 Million Tons",
                sublabel: "2022 (Growing 5x faster)"
            },
            recyclingRate: {
                label: "Formal Recycling",
                value: "<20%",
                sublabel: "Africa average"
            },
            majorSource: {
                label: "Major Sources",
                value: "Electronics",
                sublabel: "Phones, computers, TVs"
            },
            environmentalImpact: {
                label: "Toxicity Level",
                value: "Extreme",
                sublabel: "Lead, mercury exposure"
            }
        },
        chartData: {
            title: "E-Waste Growth Trends",
            subtitle: "Monthly e-waste collection volumes (in Metric Tons)",
            months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            generation: [4.5, 4.8, 5.2, 5.0, 5.5, 5.8],
            recycled: [0.7, 0.8, 0.9, 0.85, 1.0, 1.1]
        },
        policySection: {
            title: "Policy & Regulatory Landscape",
            content: `E-waste management policies in Africa are rapidly developing in response to growing volumes and health 
            concerns. Several countries have implemented or are developing Extended Producer Responsibility (EPR) schemes for 
            electronics. South Africa leads with its National E-Waste Management Plan, while Rwanda and Kenya are establishing 
            formal collection and recycling systems. However, enforcement of import controls and informal sector regulation 
            remains challenging across the continent.`
        },
        caseStudy: {
            title: "Case Study: Nigeria's E-Waste Hub",
            content: `Nigeria, particularly Lagos, has emerged as a major e-waste processing hub in West Africa. While informal 
            recycling provides livelihoods for thousands, it also exposes workers to toxic substances through unsafe dismantling 
            practices. Recent initiatives by the government and NGOs aim to formalize the sector, provide protective equipment, 
            and establish certified recycling facilities that can safely recover valuable materials while protecting worker health.`
        },
        overview: `Electronic waste includes discarded electronic devices such as phones, computers, TVs, and batteries, 
        often containing hazardous substances like lead, mercury, and toxic chemicals. Global e-waste reached 62 million 
        tonnes in 2022, growing five times faster than formal recycling capacity. Africa faces significant challenges with 
        informal dismantling exposing workers to toxic fumes and environmental contamination.`,
        challenges: [
            "Lack of formal recycling facilities and infrastructure",
            "Informal processing using unsafe methods and burning",
            "Weak enforcement of import controls on used electronics",
            "Complex material composition requiring specialized equipment",
            "Health risks from exposure to toxic substances",
            "Limited awareness of proper disposal methods"
        ],
        solutions: [
            "Formal take-back schemes and collection centers",
            "Certified recycling plants with proper safety measures",
            "Public awareness campaigns on safe disposal",
            "Enforcement of Basel Convention regulations",
            "Training programs for informal sector workers",
            "Extended Producer Responsibility (EPR) schemes"
        ]
    },
    hazardous: {
        title: "Detailed Insight: Hazardous & Industrial Waste",
        statistics: {
            annualGeneration: {
                label: "Industrial Waste",
                value: "Variable",
                sublabel: "Highly country-specific"
            },
            recyclingRate: {
                label: "Proper Treatment",
                value: "<30%",
                sublabel: "Estimated continental"
            },
            majorSource: {
                label: "Major Sources",
                value: "Industry",
                sublabel: "Manufacturing & mining"
            },
            environmentalImpact: {
                label: "Risk Level",
                value: "Critical",
                sublabel: "Health & ecosystem"
            }
        },
        chartData: {
            title: "Hazardous Waste Management Trends",
            subtitle: "Quarterly hazardous waste volumes (in Metric Tons)",
            months: ["Q1", "Q2", "Q3", "Q4", "Q1", "Q2"],
            generation: [8, 8.5, 9, 8.8, 9.2, 9.5],
            recycled: [2, 2.2, 2.5, 2.3, 2.6, 2.8]
        },
        policySection: {
            title: "Policy & Regulatory Landscape",
            content: `Hazardous waste management in Africa faces significant regulatory challenges. While most countries have 
            enacted hazardous waste legislation aligned with the Basel Convention, enforcement and monitoring capacity remain 
            limited. South Africa has the most developed framework with dedicated hazardous waste landfills and treatment 
            facilities. Egypt, Nigeria, and Kenya are strengthening their regulatory frameworks, but infrastructure gaps and 
            illegal dumping persist. Regional cooperation on transboundary movement and capacity building is increasing.`
        },
        caseStudy: {
            title: "Case Study: Medical Waste Management in Rwanda",
            content: `Rwanda has implemented a comprehensive medical waste management system that serves as a model for the 
            region. The country established centralized incinerators and treatment facilities, mandatory segregation at health 
            facilities, and a robust tracking system. This systematic approach has significantly reduced environmental and 
            health risks associated with medical waste, demonstrating the importance of dedicated infrastructure and clear 
            protocols for hazardous waste management.`
        },
        overview: `Hazardous and industrial waste includes industrial chemicals, medical waste, mining residues, and toxic 
        by-products. These waste streams pose severe environmental and health risks when improperly managed. Across Africa, 
        hazardous waste is often mixed with municipal waste, treatment facilities are inadequate, and illegal dumping is 
        common. Limited monitoring systems and weak enforcement exacerbate the challenges.`,
        challenges: [
            "Inadequate monitoring and disposal systems",
            "Illegal dumping and improper storage",
            "Limited specialized treatment infrastructure",
            "Mixing of hazardous waste with municipal waste",
            "High cost of proper treatment and disposal",
            "Limited technical capacity and expertise"
        ],
        solutions: [
            "Dedicated hazardous waste landfills with proper lining",
            "Incineration facilities with emission controls",
            "Strict regulatory oversight and enforcement",
            "Segregation at source for medical and industrial waste",
            "Training for waste handlers and regulators",
            "Regional cooperation on transboundary movement"
        ]
    },
    metals: {
        title: "Detailed Insight: Metal Waste",
        statistics: {
            annualGeneration: {
                label: "Metal Content",
                value: "3-5%",
                sublabel: "Of municipal waste"
            },
            recyclingRate: {
                label: "Recovery Rate",
                value: "45-60%",
                sublabel: "Informal & formal"
            },
            majorSource: {
                label: "Major Sources",
                value: "Cans & Scrap",
                sublabel: "Construction, vehicles"
            },
            environmentalImpact: {
                label: "Recovery Value",
                value: "High",
                sublabel: "Economic incentive"
            }
        },
        chartData: {
            title: "Metal Recovery Trends",
            subtitle: "Monthly metal waste collection and recycling (in Metric Tons)",
            months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            generation: [3.5, 3.8, 4.0, 3.9, 4.2, 4.3],
            recycled: [1.8, 2.0, 2.2, 2.1, 2.4, 2.5]
        },
        policySection: {
            title: "Policy & Regulatory Landscape",
            content: `Metal recycling in Africa is primarily driven by economic incentives rather than policy mandates. 
            Ferrous and non-ferrous metals command good market prices, leading to relatively high informal recovery rates. 
            South Africa has the most developed scrap metal industry with formal recycling infrastructure and export markets. 
            Other countries are developing policies to formalize the sector, improve worker safety, and prevent illegal 
            exports. The informal sector plays a crucial role but faces challenges with price volatility and lack of 
            regulatory protection.`
        },
        caseStudy: {
            title: "Case Study: Kenya's Scrap Metal Industry",
            content: `Kenya's scrap metal sector demonstrates both opportunities and challenges in metal waste management. 
            A thriving informal sector collects and processes metal waste, creating jobs and reducing landfill burden. However, 
            concerns about theft of infrastructure (railway lines, power cables) and unsafe working conditions have prompted 
            government intervention. New regulations aim to formalize the sector, establish licensed scrap yards, and implement 
            traceability systems while preserving livelihoods and environmental benefits.`
        },
        overview: `Metal waste includes ferrous (iron and steel) and non-ferrous metals (aluminum, copper, brass) from various 
        sources including packaging (cans), construction debris, vehicles, and appliances. Metals represent 3-5% of municipal 
        waste but have high recycling value. Africa's informal sector actively collects and recycles metals due to good market 
        prices, achieving recovery rates of 45-60% in some areas.`,
        challenges: [
            "Price volatility affects collection economics",
            "Contamination with other materials",
            "Safety concerns in informal recycling",
            "Theft of infrastructure for scrap value",
            "Limited formal processing capacity",
            "Export of valuable materials without local value addition"
        ],
        solutions: [
            "Formalization of scrap metal sector",
            "Licensed collection and processing centers",
            "Worker safety training and equipment",
            "Traceability systems to prevent theft",
            "Value addition before export",
            "Integration with Extended Producer Responsibility schemes"
        ]
    },
    glass: {
        title: "Detailed Insight: Glass Waste",
        statistics: {
            annualGeneration: {
                label: "Glass Content",
                value: "2-4%",
                sublabel: "Of municipal waste"
            },
            recyclingRate: {
                label: "Recovery Rate",
                value: "15-25%",
                sublabel: "Varies by country"
            },
            majorSource: {
                label: "Major Sources",
                value: "Bottles",
                sublabel: "Beverage containers"
            },
            environmentalImpact: {
                label: "Recyclability",
                value: "Infinite",
                sublabel: "No quality loss"
            }
        },
        chartData: {
            title: "Glass Recycling Trends",
            subtitle: "Monthly glass waste collection volumes (in Metric Tons)",
            months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            generation: [2.5, 2.7, 2.9, 2.8, 3.0, 3.1],
            recycled: [0.5, 0.6, 0.7, 0.65, 0.75, 0.8]
        },
        policySection: {
            title: "Policy & Regulatory Landscape",
            content: `Glass waste management policies in Africa are less developed compared to plastics and metals. South Africa 
            has deposit-refund schemes for beverage bottles that encourage returns and recycling. Kenya and Rwanda are exploring 
            similar systems. The main policy focus is on integrating glass into broader Extended Producer Responsibility (EPR) 
            schemes and promoting reusable glass containers over single-use alternatives. Challenges include collection logistics, 
            contamination issues, and limited glass manufacturing capacity for recycled glass use.`
        },
        caseStudy: {
            title: "Case Study: South Africa's Glass Recycling Industry",
            content: `South Africa has established a successful glass recycling industry with multiple glass manufacturing 
            plants that use recycled cullet (crushed glass) as feedstock. The Glass Recycling Company, an industry-led 
            initiative, has achieved recycling rates exceeding 40% for certain glass types. The deposit-refund system on 
            beverage bottles drives high return rates. This model demonstrates how industry leadership combined with economic 
            incentives can create viable recycling systems even for relatively low-value materials.`
        },
        overview: `Glass waste consists primarily of beverage bottles, food containers, and other packaging materials. 
        While glass is 100% recyclable without loss of quality, recycling rates in Africa remain relatively low (15-25%) due 
        to collection challenges, contamination, and limited processing infrastructure. Glass represents 2-4% of municipal 
        waste by weight but occupies significant landfill space.`,
        challenges: [
            "Weight and transportation costs",
            "Contamination with other materials",
            "Color separation requirements",
            "Limited glass manufacturing capacity to use recycled glass",
            "Competition from plastic alternatives",
            "Breakage during collection and handling"
        ],
        solutions: [
            "Deposit-refund systems for beverage containers",
            "Promotion of reusable glass containers",
            "Color-sorted collection systems",
            "Support for glass manufacturing using recycled cullet",
            "Integration with EPR schemes",
            "Alternative uses for crushed glass (construction, filtration)"
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
    if (savedLanguage !== 'en') {
        setLanguage(savedLanguage);
    }
    
    languageSelector.addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });
}

// Render detailed insights for a specific waste stream
function renderDetailedInsights(streamType) {
    const data = wasteStreamData[streamType];
    if (!data) return;

    const container = document.getElementById('detailed-insights');
    
    container.innerHTML = `
        <section class="detailed-insights-section">
            <div class="container">
                <button type="button" class="back-button" onclick="clearDetailedInsights()">
                    <span data-i18n="insights.backToCategories">← Back to All Categories</span>
                </button>

                <h2 class="insights-title">${data.title}</h2>

                <!-- Overview -->
                <div class="stream-overview">
                    <p>${data.overview}</p>
                </div>

                <!-- Statistics -->
                <div class="statistics-section">
                    <h3>Key Statistics</h3>
                    <p class="statistics-subtitle">Snapshot of ${streamType} waste generation and management in Africa.</p>
                    
                    <div class="statistics-grid">
                        <div class="stat-card">
                            <h4>${data.statistics.annualGeneration.label}</h4>
                            <p class="stat-value">${data.statistics.annualGeneration.value}</p>
                            <p class="stat-sublabel">${data.statistics.annualGeneration.sublabel}</p>
                        </div>
                        <div class="stat-card">
                            <h4>${data.statistics.recyclingRate.label}</h4>
                            <p class="stat-value">${data.statistics.recyclingRate.value}</p>
                            <p class="stat-sublabel">${data.statistics.recyclingRate.sublabel}</p>
                        </div>
                        <div class="stat-card">
                            <h4>${data.statistics.majorSource.label}</h4>
                            <p class="stat-value">${data.statistics.majorSource.value}</p>
                            <p class="stat-sublabel">${data.statistics.majorSource.sublabel}</p>
                        </div>
                        <div class="stat-card">
                            <h4>${data.statistics.environmentalImpact.label}</h4>
                            <p class="stat-value">${data.statistics.environmentalImpact.value}</p>
                            <p class="stat-sublabel">${data.statistics.environmentalImpact.sublabel}</p>
                        </div>
                    </div>
                </div>

                <!-- Chart -->
                <div class="chart-section">
                    <h3>${data.chartData.title}</h3>
                    <p class="chart-subtitle">${data.chartData.subtitle}</p>
                    <div class="chart-container">
                        <canvas id="waste-chart"></canvas>
                    </div>
                </div>

                <!-- Challenges and Solutions -->
                <div class="challenges-solutions-grid">
                    <div class="challenges-card">
                        <h3>Key Challenges</h3>
                        <ul class="challenges-list">
                            ${data.challenges.map(challenge => `<li>${challenge}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="solutions-card">
                        <h3>Sustainable Solutions</h3>
                        <ul class="solutions-list">
                            ${data.solutions.map(solution => `<li>${solution}</li>`).join('')}
                        </ul>
                    </div>
                </div>

                <!-- Policy and Case Study -->
                <div class="policy-casestudy-grid">
                    <div class="policy-card">
                        <h3>${data.policySection.title}</h3>
                        <p>${data.policySection.content}</p>
                    </div>
                    <div class="casestudy-card">
                        <h3>${data.caseStudy.title}</h3>
                        <p>${data.caseStudy.content}</p>
                    </div>
                </div>
            </div>
        </section>
    `;

    // Render chart
    renderChart(data.chartData);

    // Scroll to insights
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Re-apply language if not English
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    if (savedLanguage !== 'en') {
        setLanguage(savedLanguage);
    }
}

// Clear detailed insights
function clearDetailedInsights() {
    const container = document.getElementById('detailed-insights');
    container.innerHTML = '';
    
    // Scroll back to categories
    document.querySelector('.waste-categories-section').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
    });
}

// Render chart using Canvas
function renderChart(chartData) {
    const canvas = document.getElementById('waste-chart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.parentElement.clientWidth;
    const height = 300;
    canvas.width = width;
    canvas.height = height;

    const padding = { top: 20, right: 20, bottom: 50, left: 50 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    // Find max value
    const maxValue = Math.max(...chartData.generation, ...chartData.recycled);
    const yScale = chartHeight / (maxValue * 1.1);

    // Draw grid lines
    ctx.strokeStyle = '#E2E8F0';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
        const y = padding.top + (chartHeight / 5) * i;
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(padding.left + chartWidth, y);
        ctx.stroke();
    }

    // Draw bars
    const barWidth = chartWidth / (chartData.months.length * 3);
    const barSpacing = barWidth / 2;

    chartData.months.forEach((month, index) => {
        const x = padding.left + (index * (barWidth * 3));
        
        // Generation bar (darker)
        const genHeight = chartData.generation[index] * yScale;
        ctx.fillStyle = '#64748B';
        ctx.fillRect(x, padding.top + chartHeight - genHeight, barWidth, genHeight);
        
        // Recycled bar (lighter)
        const recHeight = chartData.recycled[index] * yScale;
        ctx.fillStyle = '#CBD5E1';
        ctx.fillRect(x + barWidth + barSpacing, padding.top + chartHeight - recHeight, barWidth, recHeight);
    });

    // Draw x-axis labels
    ctx.fillStyle = '#475569';
    ctx.font = '12px Inter';
    ctx.textAlign = 'center';
    chartData.months.forEach((month, index) => {
        const x = padding.left + (index * (barWidth * 3)) + barWidth * 1.5;
        ctx.fillText(month, x, height - 20);
    });

    // Draw legend
    ctx.textAlign = 'left';
    const legendY = height - padding.bottom + 10;
    
    ctx.fillStyle = '#64748B';
    ctx.fillRect(width / 2 - 150, legendY, 15, 15);
    ctx.fillStyle = '#475569';
    ctx.fillText('Total Generation (MT)', width / 2 - 130, legendY + 12);
    
    ctx.fillStyle = '#CBD5E1';
    ctx.fillRect(width / 2 + 20, legendY, 15, 15);
    ctx.fillStyle = '#475569';
    ctx.fillText('Recycled (MT)', width / 2 + 40, legendY + 12);
}

// Initialize category buttons
function initializeCategoryButtons() {
    const buttons = document.querySelectorAll('.waste-category-card button');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const streamType = e.target.closest('button').dataset.stream;
            renderDetailedInsights(streamType);
        });
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initializeLanguage();
        initializeCategoryButtons();
    });
} else {
    initializeLanguage();
    initializeCategoryButtons();
}
