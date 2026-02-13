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
        policySection: {
            title: "Policy & Regulatory Landscape",
            content: `African nations are increasingly adopting stringent policies to combat plastic waste, including bans on 
            single-use plastics and Extended Producer Responsibility (EPR) schemes. <a class='cite-link' href='../references/#ref-extended-producer-responsibility-epr-reviews' title='Source: OECD – EPR Reviews'>↗</a> Countries like Rwanda and Kenya lead with 
            comprehensive plastic bag bans <a class='cite-link' href='../references/#ref-plastic-ban-circular-economy-case-studies' title='Source: UNEP – Plastic Ban & Circular Economy Case Studies'>↗</a>, while South Africa and Egypt are working to harmonize waste management standards and 
            facilitate cross-border recycling initiatives. However, implementation and enforcement remain key challenges. 
            Investments in circular economy models and public awareness campaigns are crucial for driving behavioral change and 
            fostering a sustainable plastics economy.`
        },
        caseStudy: {
            title: "Case Study: Rwanda's Plastic Ban",
            content: `Rwanda has been a pioneer in Africa with its comprehensive ban on plastic bags and single-use plastics, 
            implemented over a decade ago. <a class='cite-link' href='../references/#ref-plastic-ban-circular-economy-case-studies' title='Source: UNEP – Plastic Ban & Circular Economy Case Studies'>↗</a> This bold policy has led to significantly cleaner cities and reduced plastic pollution 
            in the country's waterways and ecosystems, demonstrating the positive impact of strong political will and community engagement. 
            While challenges persist in managing other forms of plastic waste, Rwanda's success serves as a powerful model for other 
            nations striving for environmental sustainability.`
        },
        overview: `Plastic waste represents one of the most pressing environmental challenges across Africa. 
        Originating mainly from packaging, bottles, shopping bags, and single-use plastics, this waste stream has reached 
        critical levels. Global plastic waste reached approximately 220 million tonnes in 2024, with Africa experiencing rapid 
        growth due to urbanization and changing consumption patterns. <a class='cite-link' href='../references/#ref-africa-waste-management-outlook-2021-towards-a-circular-economy' title='Source: UNEP – Africa Waste Management Outlook'>↗</a> Despite bans in countries like Kenya, plastic waste 
        continues to rise, while Egypt and Nigeria struggle with enforcement.`,
        challenges: [
            { title: "Non-biodegradability - plastics persist in the environment for hundreds of years", detail: "Unlike organic materials, most plastics take 400–1,000 years to decompose in the environment. They fragment into microplastics that contaminate soil, waterways, and oceans, entering the food chain and posing long-term ecological and human health risks across the continent." },
            { title: "Low market value of some plastic types reduces recycling viability", detail: "While PET and HDPE fetch reasonable prices, plastics like polystyrene and multi-layer films have minimal resale value. This makes collection and recycling economically unviable for informal waste pickers and formal recyclers alike, leading to these materials being landfilled or littered." },
            { title: "Mixed and contaminated plastics make sorting and processing difficult", detail: "In the absence of source-separation programs, plastics are often collected mixed with food waste, metals, and other materials. Contaminated plastics require costly washing and sorting before they can be recycled, significantly reducing throughput and profitability for recycling operations." },
            { title: "Weak enforcement of plastic bans and regulations", detail: "Although many African nations have enacted plastic bag bans or single-use plastic restrictions, enforcement remains inconsistent. Smuggling across borders, lack of inspectors, and limited penalties mean that banned plastic items continue to circulate widely in many markets." },
            { title: "Limited recycling infrastructure and facilities", detail: "Most African countries have very few formal plastic recycling plants relative to the volumes generated. Collection networks are fragmented, and many regions lack the Material Recovery Facilities needed to sort, clean, and process plastics into usable secondary raw materials." }
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
        policySection: {
            title: "Policy & Regulatory Landscape",
            content: `Organic waste management policies across Africa are evolving, with increasing focus on composting, 
            anaerobic digestion, and biogas production. South Africa's National Waste Management Strategy prioritizes organic 
            waste diversion from landfills <a class='cite-link' href='../references/#ref-national-waste-management-strategy-nwms' title='Source: DFFE – National Waste Management Strategy (NWMS)'>↗</a>, while Kenya's Sustainable Waste Management Act mandates separation at source. <a class='cite-link' href='../references/#ref-sustainable-waste-management-act' title='Source: Government of Kenya – Sustainable Waste Management Act'>↗</a> 
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
        accounts for approximately 58% of Africa's total waste stream. <a class='cite-link' href='../references/#ref-what-a-waste-2-0-a-global-snapshot-of-solid-waste-management-to-2050' title='Source: World Bank – What a Waste 2.0'>↗</a> This represents the highest-value opportunity for 
        waste management improvement. Poor management leads to methane emissions, odors, and disease vectors. High moisture 
        content makes incineration inefficient, and organic waste is often mixed with plastics and metals, complicating 
        management efforts.`,
        challenges: [
            { title: "High moisture content reduces energy recovery efficiency", detail: "Organic waste in Africa typically contains 60–80% moisture, making incineration and waste-to-energy processes highly inefficient. The energy required to evaporate the water often exceeds the energy recovered, making thermal treatment impractical without pre-drying infrastructure." },
            { title: "Lack of composting and anaerobic digestion facilities", detail: "Despite organic waste comprising over half of Africa's waste stream, fewer than 5% of municipalities have access to formal composting or anaerobic digestion facilities. Most organic waste ends up in open dumps where it decomposes uncontrollably, producing greenhouse gases and leachate." },
            { title: "Mixed waste collection contaminates organic materials", detail: "Without source-separation programs, organic waste is collected alongside plastics, glass, and hazardous items. This contamination makes the organics unsuitable for composting or digestion, as the resulting product contains harmful impurities that limit its use as a soil amendment." },
            { title: "Limited market for compost products", detail: "Even where composting is practiced, farmers and agricultural operations often lack awareness of compost benefits or prefer synthetic fertilizers. Inconsistent compost quality, lack of certification standards, and limited distribution networks further restrict demand and commercial viability." },
            { title: "Seasonal variations in generation volumes", detail: "Agricultural harvest seasons, religious festivals, and market cycles create significant fluctuations in organic waste volumes. Composting and digestion facilities designed for average throughput struggle to handle peak loads, leading to overflow and operational inefficiencies." },
            { title: "Methane emissions from improper disposal", detail: "When organic waste decomposes anaerobically in open dumps and poorly managed landfills, it produces methane—a greenhouse gas 80 times more potent than CO₂ over a 20-year period. Africa's uncaptured landfill methane represents both a major climate threat and a missed energy opportunity." }
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
        policySection: {
            title: "Policy & Regulatory Landscape",
            content: `E-waste management policies in Africa are rapidly developing in response to growing volumes and health 
            concerns. Several countries have implemented or are developing Extended Producer Responsibility (EPR) schemes for 
            electronics. South Africa leads with its National E-Waste Management Plan, while Rwanda and Kenya are establishing 
            formal collection and recycling systems. <a class='cite-link' href='../references/#ref-actively-engaging-rwanda-s-private-sector-in-e-waste-management' title='Source: ITU – Rwanda E-Waste Management'>↗</a> However, enforcement of import controls and informal sector regulation 
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
        tonnes in 2022, growing five times faster than formal recycling capacity. <a class='cite-link' href='../references/#ref-global-e-waste-monitor' title='Source: ITU – Global E-Waste Monitor'>↗</a> Africa faces significant challenges with 
        informal dismantling exposing workers to toxic fumes and environmental contamination.`,
        challenges: [
            { title: "Lack of formal recycling facilities and infrastructure", detail: "Africa has very few certified e-waste recycling plants capable of safely extracting valuable materials like gold, copper, and rare earth elements. Most countries lack the specialized shredders, smelters, and chemical processing equipment required, forcing reliance on export or informal methods." },
            { title: "Informal processing using unsafe methods and burning", detail: "In informal e-waste hubs like Agbogbloshie (Ghana) and Alaba (Nigeria), workers strip electronics using open burning, acid baths, and manual dismantling without protective equipment. These practices release toxic fumes including dioxins, furans, and heavy metals into surrounding communities." },
            { title: "Weak enforcement of import controls on used electronics", detail: "Despite Basel Convention regulations, large volumes of non-functional electronics are imported into Africa labeled as 'second-hand goods.' Weak port inspections and corruption enable this dumping, adding to the e-waste burden without any accompanying recycling infrastructure or funding." },
            { title: "Complex material composition requiring specialized equipment", detail: "A single smartphone contains over 60 different elements including precious metals, rare earths, and hazardous substances. Recovering these materials safely requires sophisticated hydrometallurgical and pyrometallurgical processes that are capital-intensive and technically demanding." },
            { title: "Health risks from exposure to toxic substances", detail: "E-waste contains lead, mercury, cadmium, brominated flame retardants, and other toxins. Workers and nearby residents face elevated risks of respiratory disease, neurological damage, kidney failure, and cancer. Children in informal recycling communities are especially vulnerable to developmental harm." },
            { title: "Limited awareness of proper disposal methods", detail: "Many consumers store obsolete electronics at home or discard them with regular waste, unaware of the hazards or the existence of collection programs. This reduces the volume available for formal recycling and increases the likelihood of toxic materials entering general waste streams." }
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
        policySection: {
            title: "Policy & Regulatory Landscape",
            content: `Hazardous waste management in Africa faces significant regulatory challenges. While most countries have 
            enacted hazardous waste legislation aligned with the Basel Convention <a class='cite-link' href='../references/#ref-basel-convention-on-the-control-of-transboundary-movements-of-hazardous-wastes-a' title='Source: UNEP – Basel Convention'>↗</a>, enforcement and monitoring capacity remain 
            limited. South Africa has the most developed framework with dedicated hazardous waste landfills and treatment 
            facilities. <a class='cite-link' href='../references/#ref-national-environmental-management-waste-act' title='Source: DFFE – National Environmental Management: Waste Act'>↗</a> Egypt, Nigeria, and Kenya are strengthening their regulatory frameworks, but infrastructure gaps and 
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
            { title: "Inadequate monitoring and disposal systems", detail: "Most African countries lack comprehensive hazardous waste tracking systems. Without manifest systems or digital registries, hazardous materials move through the waste chain unmonitored, making it impossible to ensure proper handling from generation to final disposal." },
            { title: "Illegal dumping and improper storage", detail: "High disposal costs incentivize illegal dumping of hazardous waste in unauthorized sites, waterways, and vacant land. Improper storage in leaking drums and uncovered areas leads to soil and groundwater contamination that can persist for decades and affect surrounding communities." },
            { title: "Limited specialized treatment infrastructure", detail: "Safe treatment of hazardous waste requires facilities like high-temperature incinerators, chemical neutralization plants, and engineered secure landfills. Very few African countries have sufficient capacity, forcing long-distance transport or, more commonly, inadequate local disposal." },
            { title: "Mixing of hazardous waste with municipal waste", detail: "In the absence of segregation protocols, hazardous materials from households (batteries, pesticides, paints) and small businesses end up in regular waste bins. This contaminates the entire waste stream, exposes waste workers to health risks, and compromises recycling efforts." },
            { title: "High cost of proper treatment and disposal", detail: "The specialized equipment, trained personnel, protective infrastructure, and regulatory compliance required for hazardous waste management make it significantly more expensive than municipal waste handling. Many generators, especially small enterprises, cannot afford proper disposal fees." },
            { title: "Limited technical capacity and expertise", detail: "Managing hazardous waste safely requires specialized knowledge in chemistry, toxicology, and environmental engineering. Africa faces a shortage of trained hazardous waste professionals, laboratory capacity for waste characterization, and institutional knowledge for regulatory enforcement." }
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
        policySection: {
            title: "Policy & Regulatory Landscape",
            content: `Metal recycling in Africa is primarily driven by economic incentives rather than policy mandates. 
            Ferrous and non-ferrous metals command good market prices, leading to relatively high informal recovery rates. 
            South Africa has the most developed scrap metal industry with formal recycling infrastructure and export markets. <a class='cite-link' href='../references/#ref-national-environmental-management-waste-act' title='Source: DFFE – National Environmental Management: Waste Act'>↗</a> 
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
            { title: "Price volatility affects collection economics", detail: "Global commodity prices for metals like aluminum, copper, and steel fluctuate significantly. When prices drop, informal collectors abandon metal recovery as it becomes unprofitable, leading to increased landfilling and loss of valuable resources from the recycling chain." },
            { title: "Contamination with other materials", detail: "Scrap metal collected from mixed waste streams often contains plastics, rubber, paint, and other contaminants. These impurities reduce the quality and value of the metal, requiring additional processing steps like magnetic separation and manual sorting before smelting." },
            { title: "Safety concerns in informal recycling", detail: "Informal metal recyclers work without protective equipment, operating cutting torches, handling sharp edges, and sometimes burning coatings to access metals. This leads to high rates of cuts, burns, respiratory illness, and heavy metal poisoning among workers, including children." },
            { title: "Theft of infrastructure for scrap value", detail: "The high market value of metals has driven widespread theft of public infrastructure including railway lines, electrical cables, manhole covers, and water pipes. This causes service disruptions, safety hazards, and enormous replacement costs for governments and utilities." },
            { title: "Limited formal processing capacity", detail: "While informal collectors achieve impressive recovery rates, the lack of formal smelting and refining facilities means most scrap is exported as raw material. This limits local value addition and the development of a domestic secondary metals manufacturing industry." },
            { title: "Export of valuable materials without local value addition", detail: "Significant volumes of scrap metal leave Africa as raw feedstock for smelters in Asia and Europe. This represents a lost economic opportunity—processing metals domestically would create manufacturing jobs, build technical skills, and retain more economic value on the continent." }
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
        policySection: {
            title: "Policy & Regulatory Landscape",
            content: `Glass waste management policies in Africa are less developed compared to plastics and metals. South Africa 
            has deposit-refund schemes for beverage bottles that encourage returns and recycling. <a class='cite-link' href='../references/#ref-trade-and-the-circular-economy-plastics-action-in-south-africa' title='Source: WEF – Circular Economy: Plastics Action in South Africa'>↗</a> Kenya and Rwanda are exploring 
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
            { title: "Weight and transportation costs", detail: "Glass is significantly heavier than alternative packaging materials, making collection and transport to recycling facilities expensive—especially in rural areas with poor road networks. The high cost-per-tonne of transport often exceeds the value of the recovered glass." },
            { title: "Contamination with other materials", detail: "Glass collected from mixed waste streams is frequently contaminated with ceramics, stones, metals, and organic residues. Even small amounts of heat-resistant glass (like Pyrex) or ceramics can compromise an entire batch of recycled glass, causing defects in new products." },
            { title: "Color separation requirements", detail: "Glass recycling requires separation by color (clear, green, amber) because mixed-color cullet produces low-quality output. Manual sorting is labor-intensive, and optical sorting equipment is expensive, creating a bottleneck in the recycling process that many African facilities cannot overcome." },
            { title: "Limited glass manufacturing capacity to use recycled glass", detail: "Recycled glass (cullet) is most efficiently used by glass manufacturers as furnace feedstock. However, Africa has relatively few glass manufacturing plants, limiting local demand for cullet and forcing recyclers to seek export markets or alternative uses with lower economic returns." },
            { title: "Competition from plastic alternatives", detail: "The beverage and food industries are increasingly switching from glass to plastic packaging due to lower weight, reduced breakage, and cheaper transport. This shift reduces the volume of glass entering the waste stream while also undermining the economics of glass recycling programs." },
            { title: "Breakage during collection and handling", detail: "Glass containers frequently shatter during collection, transport, and sorting—especially in informal collection systems. Broken glass creates safety hazards for waste workers, contaminates other recyclables, and reduces the recoverable value of the material." }
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

// French translations for waste stream detailed data
const wasteStreamDataFr = {
    plastics: {
        title: "Aperçu Détaillé : Déchets Plastiques",
        statistics: {
            annualGeneration: {
                label: "Génération Annuelle",
                value: "17 Millions de Tonnes",
                sublabel: "Afrique (2024)"
            },
            recyclingRate: {
                label: "Taux de Recyclage (Moy.)",
                value: "12%",
                sublabel: "Moyenne continentale"
            },
            majorSource: {
                label: "Source Principale",
                value: "Emballages",
                sublabel: "Plastiques à usage unique"
            },
            environmentalImpact: {
                label: "Impact Environnemental",
                value: "Élevé",
                sublabel: "Pollution marine et du sol"
            }
        },
        policySection: {
            title: "Paysage Politique et Réglementaire",
            content: `Les nations africaines adoptent de plus en plus des politiques strictes pour lutter contre les déchets plastiques, notamment des interdictions de plastiques à usage unique et des programmes de Responsabilité Élargie des Producteurs (REP). <a class='cite-link' href='../references/#ref-extended-producer-responsibility-epr-reviews' title='Source: OECD – EPR Reviews'>↗</a> Des pays comme le Rwanda et le Kenya sont leaders avec des interdictions complètes des sacs plastiques <a class='cite-link' href='../references/#ref-plastic-ban-circular-economy-case-studies' title='Source: UNEP – Plastic Ban & Circular Economy Case Studies'>↗</a>, tandis que l'Afrique du Sud et l'Égypte s'efforcent d'harmoniser les normes de gestion des déchets et de faciliter les initiatives de recyclage transfrontalières. Cependant, la mise en œuvre et l'application restent des défis majeurs. Les investissements dans les modèles d'économie circulaire et les campagnes de sensibilisation du public sont cruciaux pour favoriser le changement de comportement et promouvoir une économie plastique durable.`
        },
        caseStudy: {
            title: "Étude de Cas : L'interdiction du Plastique au Rwanda",
            content: `Le Rwanda a été un pionnier en Afrique avec son interdiction complète des sacs plastiques et des plastiques à usage unique, mise en œuvre il y a plus d'une décennie. Cette politique audacieuse a conduit à des villes nettement plus propres et à une réduction de la pollution plastique dans les cours d'eau et les écosystèmes du pays, démontrant l'impact positif d'une forte volonté politique et de l'engagement communautaire. Bien que des défis persistent dans la gestion d'autres formes de déchets plastiques, le succès du Rwanda sert de modèle puissant pour d'autres nations aspirant à la durabilité environnementale.`
        },
        overview: `Les déchets plastiques représentent l'un des défis environnementaux les plus pressants en Afrique. Provenant principalement des emballages, bouteilles, sacs d'achat et plastiques à usage unique, ce flux de déchets a atteint des niveaux critiques. Les déchets plastiques mondiaux ont atteint environ 220 millions de tonnes en 2024, l'Afrique connaîssant une croissance rapide en raison de l'urbanisation et des changements dans les modes de consommation. <a class='cite-link' href='../references/#ref-africa-waste-management-outlook-2021-towards-a-circular-economy' title='Source: UNEP – Africa Waste Management Outlook'>↗</a> Malgré les interdictions dans des pays comme le Kenya, les déchets plastiques continuent d'augmenter, tandis que l'Égypte et le Nigeria luttent avec l'application des lois.`,
        challenges: [
            { title: "Non-biodégradabilité - les plastiques persistent dans l'environnement pendant des centaines d'années", detail: "Contrairement aux matériaux organiques, la plupart des plastiques mettent 400 à 1 000 ans à se décomposer dans l'environnement. Ils se fragmentent en microplastiques qui contaminent les sols, les cours d'eau et les océans, entrant dans la chaîne alimentaire et posant des risques écologiques et sanitaires à long terme sur tout le continent." },
            { title: "Faible valeur marchande de certains types de plastiques réduit la viabilité du recyclage", detail: "Alors que le PET et le PEHD obtiennent des prix raisonnables, les plastiques comme le polystyrène et les films multicouches ont une valeur de revente minimale. Cela rend la collecte et le recyclage économiquement non viables pour les récupérateurs informels et les recycleurs formels, conduisant ces matériaux à être mis en décharge ou abandonnés." },
            { title: "Les plastiques mélangés et contaminés rendent le tri et le traitement difficiles", detail: "En l'absence de programmes de tri à la source, les plastiques sont souvent collectés mélangés avec des déchets alimentaires, des métaux et d'autres matériaux. Les plastiques contaminés nécessitent un lavage et un tri coûteux avant de pouvoir être recyclés, réduisant considérablement le débit et la rentabilité des opérations de recyclage." },
            { title: "Application faible des interdictions et réglementations sur le plastique", detail: "Bien que de nombreuses nations africaines aient promulgué des interdictions de sacs plastiques ou des restrictions sur les plastiques à usage unique, l'application reste incohérente. La contrebande transfrontalière, le manque d'inspecteurs et les sanctions limitées signifient que les articles en plastique interdits continuent de circuler largement sur de nombreux marchés." },
            { title: "Infrastructure et installations de recyclage limitées", detail: "La plupart des pays africains disposent de très peu d'usines de recyclage de plastique formelles par rapport aux volumes générés. Les réseaux de collecte sont fragmentés et de nombreuses régions manquent des centres de tri nécessaires pour trier, nettoyer et transformer les plastiques en matières premières secondaires utilisables." }
        ],
        solutions: [
            "Programmes de Responsabilité Élargie des Producteurs (REP)",
            "Programmes de rachat de plastique et systèmes de consigne",
            "Technologies de recyclage chimique (plastique en carburant)",
            "Conception pour la recyclabilité et réduction des emballages plastiques",
            "Campagnes de sensibilisation du public sur la réduction du plastique",
            "Investissement dans l'infrastructure de recyclage formel"
        ]
    },
    organics: {
        title: "Aperçu Détaillé : Déchets Organiques",
        statistics: {
            annualGeneration: {
                label: "Composition",
                value: "58%",
                sublabel: "Des déchets totaux d'Afrique"
            },
            recyclingRate: {
                label: "Taux de Compostage",
                value: "<5%",
                sublabel: "Compostage formel"
            },
            majorSource: {
                label: "Sources Principales",
                value: "Alimentation et Agriculture",
                sublabel: "Ménages et marchés"
            },
            environmentalImpact: {
                label: "Potentiel de Méthane",
                value: "Très Élevé",
                sublabel: "Mal géré"
            }
        },
        policySection: {
            title: "Paysage Politique et Réglementaire",
            content: `Les politiques de gestion des déchets organiques en Afrique évoluent, avec un accent croissant sur le compostage, la digestion anaérobie et la production de biogaz. La Stratégie Nationale de Gestion des Déchets de l'Afrique du Sud priorise la diversion des déchets organiques des décharges <a class='cite-link' href='../references/#ref-national-waste-management-strategy-nwms' title='Source: DFFE – National Waste Management Strategy (NWMS)'>↗</a>, tandis que la Loi sur la Gestion Durable des Déchets du Kenya impose la séparation à la source. <a class='cite-link' href='../references/#ref-sustainable-waste-management-act' title='Source: Government of Kenya – Sustainable Waste Management Act'>↗</a> Cependant, la mise en œuvre reste limitée en raison des lacunes en infrastructure et du manque de sensibilisation du public. L'Égypte et le Nigeria explorent des partenariats public-privé pour développer des installations de compostage et des usines de biogaz.`
        },
        caseStudy: {
            title: "Étude de Cas : Compostage Communautaire en Afrique du Sud",
            content: `Plusieurs municipalités sud-africaines ont mis en œuvre avec succès des programmes de compostage communautaire qui détournent les déchets organiques des décharges tout en créant des emplois et en produisant des amendements de sol précieux. Ces programmes démontrent comment la gestion décentralisée des déchets peut relever plusieurs défis simultanément - réduire les émissions de méthane, améliorer la qualité du sol et offrir des opportunités économiques aux communautés locales.`
        },
        overview: `Les déchets organiques, y compris les restes alimentaires, résidus agricoles, déchets de jardin et matériaux biodégradables, représentent environ 58% du flux total de déchets d'Afrique. <a class='cite-link' href='../references/#ref-what-a-waste-2-0-a-global-snapshot-of-solid-waste-management-to-2050' title='Source: World Bank – What a Waste 2.0'>↗</a> Cela représente l'opportunité de plus grande valeur pour l'amélioration de la gestion des déchets. Une mauvaise gestion conduit à des émissions de méthane, des odeurs et des vecteurs de maladies. La teneur élevée en humidité rend l'incinération inefficace, et les déchets organiques sont souvent mélangés avec du plastique et des métaux, compliquant les efforts de gestion.`,
        challenges: [
            { title: "Teneur élevée en humidité réduit l'efficacité de la récupération d'énergie", detail: "Les déchets organiques en Afrique contiennent généralement 60 à 80% d'humidité, rendant l'incinération et les processus de valorisation énergétique très inefficaces. L'énergie nécessaire pour évaporer l'eau dépasse souvent l'énergie récupérée, rendant le traitement thermique impraticable sans infrastructure de pré-séchage." },
            { title: "Manque d'installations de compostage et de digestion anaérobie", detail: "Bien que les déchets organiques représentent plus de la moitié du flux de déchets africain, moins de 5% des municipalités ont accès à des installations formelles de compostage ou de digestion anaérobie. La plupart des déchets organiques finissent dans des décharges à ciel ouvert où ils se décomposent de manière incontrôlée." },
            { title: "La collecte mixte contamine les matières organiques", detail: "Sans programmes de tri à la source, les déchets organiques sont collectés aux côtés des plastiques, du verre et des déchets dangereux. Cette contamination rend les matières organiques impropres au compostage ou à la digestion, car le produit résultant contient des impuretés nocives limitant son utilisation comme amendement du sol." },
            { title: "Marché limité pour les produits de compost", detail: "Même là où le compostage est pratiqué, les agriculteurs manquent souvent de connaissance des avantages du compost ou préfèrent les engrais synthétiques. La qualité inconstante du compost, l'absence de normes de certification et les réseaux de distribution limités restreignent davantage la demande et la viabilité commerciale." },
            { title: "Variations saisonnières des volumes de génération", detail: "Les saisons de récolte agricole, les fêtes religieuses et les cycles des marchés créent des fluctuations importantes dans les volumes de déchets organiques. Les installations de compostage et de digestion conçues pour un débit moyen peinent à gérer les charges de pointe, entraînant des débordements et des inefficacités opérationnelles." },
            { title: "Émissions de méthane provenant de l'élimination inappropriée", detail: "Lorsque les déchets organiques se décomposent de manière anaérobie dans les décharges à ciel ouvert et mal gérées, ils produisent du méthane — un gaz à effet de serre 80 fois plus puissant que le CO₂ sur une période de 20 ans. Le méthane non capturé des décharges africaines représente à la fois une menace climatique majeure et une opportunité énergétique manquée." }
        ],
        solutions: [
            "Programmes de compostage au niveau des ménages et des communautés",
            "Digestion anaérobie pour la production de biogaz",
            "Initiatives de séparation à la source",
            "Développement du marché pour les produits de compost",
            "Intégration avec les programmes d'agriculture urbaine",
            "Traitement décentralisé pour réduire les coûts de transport"
        ]
    },
    ewaste: {
        title: "Aperçu Détaillé : Déchets Électroniques",
        statistics: {
            annualGeneration: {
                label: "Déchets Électroniques Mondiaux",
                value: "62 Millions de Tonnes",
                sublabel: "2022 (Croissance 5x plus rapide)"
            },
            recyclingRate: {
                label: "Recyclage Formel",
                value: "<20%",
                sublabel: "Moyenne africaine"
            },
            majorSource: {
                label: "Sources Principales",
                value: "Électronique",
                sublabel: "Téléphones, ordinateurs, TV"
            },
            environmentalImpact: {
                label: "Niveau de Toxicité",
                value: "Extrême",
                sublabel: "Exposition au plomb et mercure"
            }
        },
        policySection: {
            title: "Paysage Politique et Réglementaire",
            content: `Les politiques de gestion des déchets électroniques en Afrique se développent rapidement en réponse aux volumes croissants et aux préoccupations sanitaires. Plusieurs pays ont mis en œuvre ou développent des programmes de Responsabilité Élargie des Producteurs (REP) pour l'électronique. L'Afrique du Sud est leader avec son Plan National de Gestion des Déchets Électroniques, tandis que le Rwanda et le Kenya établissent des systèmes formels de collecte et de recyclage. Cependant, l'application des contrôles à l'importation et la réglementation du secteur informel restent difficiles à travers le continent.`
        },
        caseStudy: {
            title: "Étude de Cas : Le Hub des Déchets Électroniques du Nigeria",
            content: `Le Nigeria, en particulier Lagos, est devenu un hub majeur de traitement des déchets électroniques en Afrique de l'Ouest. Bien que le recyclage informel fournisse des moyens de subsistance à des milliers de personnes, il expose également les travailleurs à des substances toxiques par des pratiques de démantèlement dangereuses. Les initiatives récentes du gouvernement et des ONG visent à formaliser le secteur, fournir des équipements de protection et établir des installations de recyclage certifiées qui peuvent récupérer en toute sécurité les matériaux précieux tout en protégeant la santé des travailleurs.`
        },
        overview: `Les déchets électroniques comprennent les appareils électroniques mis au rebut tels que les téléphones, ordinateurs, téléviseurs et batteries, contenant souvent des substances dangereuses comme le plomb, le mercure et des produits chimiques toxiques. Les déchets électroniques mondiaux ont atteint 62 millions de tonnes en 2022, croissant cinq fois plus vite que la capacité de recyclage formel. <a class='cite-link' href='../references/#ref-global-e-waste-monitor' title='Source: ITU – Global E-Waste Monitor'>↗</a> L'Afrique fait face à des défis importants avec le démantèlement informel exposant les travailleurs à des fumées toxiques et à la contamination environnementale.`,
        challenges: [
            { title: "Manque d'installations et d'infrastructure de recyclage formelles", detail: "L'Afrique dispose de très peu d'usines de recyclage de déchets électroniques certifiées capables d'extraire en toute sécurité des matériaux précieux comme l'or, le cuivre et les terres rares. La plupart des pays n'ont pas les broyeurs, fonderies et équipements de traitement chimique spécialisés nécessaires." },
            { title: "Traitement informel utilisant des méthodes dangereuses et la combustion", detail: "Dans les centres informels de déchets électroniques comme Agbogbloshie (Ghana) et Alaba (Nigeria), les travailleurs dépouillent l'électronique par combustion à ciel ouvert, bains d'acide et démantèlement manuel sans équipement de protection. Ces pratiques libèrent des fumées toxiques dans les communautés environnantes." },
            { title: "Application faible des contrôles à l'importation sur l'électronique usagée", detail: "Malgré les réglementations de la Convention de Bâle, de grands volumes d'électronique non fonctionnelle sont importés en Afrique sous l'étiquette de 'biens d'occasion'. Les inspections portuaires faibles permettent ce dumping, ajoutant au fardeau des déchets électroniques sans infrastructure de recyclage." },
            { title: "Composition matérielle complexe nécessitant un équipement spécialisé", detail: "Un seul smartphone contient plus de 60 éléments différents, y compris des métaux précieux, des terres rares et des substances dangereuses. Récupérer ces matériaux en toute sécurité nécessite des processus hydrométallurgiques et pyrométallurgiques sophistiqués, intensifs en capital et techniquement exigeants." },
            { title: "Risques sanitaires liés à l'exposition aux substances toxiques", detail: "Les déchets électroniques contiennent du plomb, du mercure, du cadmium et des retardateurs de flamme bromés. Les travailleurs et les résidents voisins font face à des risques élevés de maladies respiratoires, de dommages neurologiques et de cancer. Les enfants dans les communautés de recyclage informel sont particulièrement vulnérables." },
            { title: "Conscience limitée des méthodes d'élimination appropriées", detail: "De nombreux consommateurs conservent l'électronique obsolète chez eux ou la jettent avec les déchets ordinaires, ignorant les dangers ou l'existence de programmes de collecte. Cela réduit le volume disponible pour le recyclage formel et augmente le risque que des matériaux toxiques entrent dans les flux de déchets généraux." }
        ],
        solutions: [
            "Programmes formels de reprise et centres de collecte",
            "Usines de recyclage certifiées avec mesures de sécurité appropriées",
            "Campagnes de sensibilisation du public sur l'élimination sûre",
            "Application des réglementations de la Convention de Bâle",
            "Programmes de formation pour les travailleurs du secteur informel",
            "Programmes de Responsabilité Élargie des Producteurs (REP)"
        ]
    },
    hazardous: {
        title: "Aperçu Détaillé : Déchets Dangereux et Industriels",
        statistics: {
            annualGeneration: {
                label: "Déchets Industriels",
                value: "Variable",
                sublabel: "Très spécifique au pays"
            },
            recyclingRate: {
                label: "Traitement Approprié",
                value: "<30%",
                sublabel: "Estimé continental"
            },
            majorSource: {
                label: "Sources Principales",
                value: "Industrie",
                sublabel: "Fabrication et mines"
            },
            environmentalImpact: {
                label: "Niveau de Risque",
                value: "Critique",
                sublabel: "Santé et écosystème"
            }
        },
        policySection: {
            title: "Paysage Politique et Réglementaire",
            content: `La gestion des déchets dangereux en Afrique fait face à des défis réglementaires importants. Bien que la plupart des pays aient adopté une législation sur les déchets dangereux alignée sur la Convention de Bâle <a class='cite-link' href='../references/#ref-basel-convention-on-the-control-of-transboundary-movements-of-hazardous-wastes-a' title='Source: UNEP – Basel Convention'>↗</a>, la capacité d'application et de surveillance reste limitée. L'Afrique du Sud possède le cadre le plus développé avec des décharges et des installations de traitement de déchets dangereux dédiées. <a class='cite-link' href='../references/#ref-national-environmental-management-waste-act' title='Source: DFFE – National Environmental Management: Waste Act'>↗</a> L'Égypte, le Nigeria et le Kenya renforcent leurs cadres réglementaires, mais les lacunes en infrastructure et le dumping illégal persistent. La coopération régionale sur les mouvements transfrontaliers et le renforcement des capacités s'intensifie.`
        },
        caseStudy: {
            title: "Étude de Cas : Gestion des Déchets Médicaux au Rwanda",
            content: `Le Rwanda a mis en œuvre un système complet de gestion des déchets médicaux qui sert de modèle pour la région. Le pays a établi des incinérateurs centralisés et des installations de traitement, une ségrégation obligatoire dans les établissements de santé et un système de suivi robuste. Cette approche systématique a considérablement réduit les risques environnementaux et sanitaires associés aux déchets médicaux, démontrant l'importance d'une infrastructure dédiée et de protocoles clairs pour la gestion des déchets dangereux.`
        },
        overview: `Les déchets dangereux et industriels comprennent les produits chimiques industriels, les déchets médicaux, les résidus miniers et les sous-produits toxiques. Ces flux de déchets posent des risques environnementaux et sanitaires graves lorsqu'ils sont mal gérés. À travers l'Afrique, les déchets dangereux sont souvent mélangés avec les déchets municipaux, les installations de traitement sont inadéquates et le dumping illégal est courant. Les systèmes de surveillance limités et l'application faible exacerbent les défis.`,
        challenges: [
            { title: "Systèmes de surveillance et d'élimination inadéquats", detail: "La plupart des pays africains manquent de systèmes complets de suivi des déchets dangereux. Sans systèmes de manifestes ou de registres numériques, les matières dangereuses circulent dans la chaîne des déchets sans surveillance, rendant impossible d'assurer une manipulation appropriée de la génération à l'élimination finale." },
            { title: "Dumping illégal et stockage inapproprié", detail: "Les coûts élevés d'élimination incitent au dumping illégal de déchets dangereux dans des sites non autorisés, les cours d'eau et les terrains vagues. Le stockage inapproprié dans des fûts qui fuient et des zones non couvertes entraîne une contamination des sols et des eaux souterraines pouvant persister pendant des décennies." },
            { title: "Infrastructure de traitement spécialisée limitée", detail: "Le traitement sûr des déchets dangereux nécessite des installations comme des incinérateurs à haute température, des usines de neutralisation chimique et des décharges sécurisées. Très peu de pays africains disposent d'une capacité suffisante, forçant le transport sur de longues distances ou une élimination locale inadéquate." },
            { title: "Mélange de déchets dangereux avec les déchets municipaux", detail: "En l'absence de protocoles de ségrégation, les matières dangereuses des ménages (piles, pesticides, peintures) et des petites entreprises se retrouvent dans les poubelles ordinaires. Cela contamine l'ensemble du flux de déchets, expose les travailleurs à des risques sanitaires et compromet les efforts de recyclage." },
            { title: "Coût élevé du traitement et de l'élimination appropriés", detail: "L'équipement spécialisé, le personnel formé, l'infrastructure de protection et la conformité réglementaire nécessaires à la gestion des déchets dangereux la rendent nettement plus coûteuse que la gestion des déchets municipaux. De nombreux générateurs, surtout les petites entreprises, ne peuvent pas se permettre les frais d'élimination appropriés." },
            { title: "Capacité technique et expertise limitées", detail: "La gestion sûre des déchets dangereux nécessite des connaissances spécialisées en chimie, toxicologie et génie environnemental. L'Afrique fait face à une pénurie de professionnels formés en déchets dangereux, de capacité de laboratoire et de connaissances institutionnelles pour l'application réglementaire." }
        ],
        solutions: [
            "Décharges de déchets dangereux dédiées avec revêtement approprié",
            "Installations d'incinération avec contrôle des émissions",
            "Surveillance réglementaire stricte et application",
            "Ségrégation à la source pour les déchets médicaux et industriels",
            "Formation pour les manipulateurs de déchets et les régulateurs",
            "Coopération régionale sur les mouvements transfrontaliers"
        ]
    },
    metals: {
        title: "Aperçu Détaillé : Déchets Métalliques",
        statistics: {
            annualGeneration: {
                label: "Contenu Métallique",
                value: "3-5%",
                sublabel: "Des déchets municipaux"
            },
            recyclingRate: {
                label: "Taux de Récupération",
                value: "45-60%",
                sublabel: "Informel et formel"
            },
            majorSource: {
                label: "Sources Principales",
                value: "Canettes et Ferraille",
                sublabel: "Construction, véhicules"
            },
            environmentalImpact: {
                label: "Valeur de Récupération",
                value: "Élevée",
                sublabel: "Incitation économique"
            }
        },
        policySection: {
            title: "Paysage Politique et Réglementaire",
            content: `Le recyclage des métaux en Afrique est principalement motivé par des incitations économiques plutôt que par des mandats politiques. Les métaux ferreux et non ferreux ont de bons prix sur le marché, conduisant à des taux de récupération informelle relativement élevés. L'Afrique du Sud possède l'industrie de ferraille la plus développée avec une infrastructure de recyclage formelle et des marchés d'exportation. D'autres pays développent des politiques pour formaliser le secteur, améliorer la sécurité des travailleurs et prévenir les exportations illégales. Le secteur informel joue un rôle crucial mais fait face à des défis liés à la volatilité des prix et au manque de protection réglementaire.`
        },
        caseStudy: {
            title: "Étude de Cas : L'industrie de la Ferraille au Kenya",
            content: `Le secteur de la ferraille du Kenya démontre à la fois les opportunités et les défis de la gestion des déchets métalliques. Un secteur informel florissant collecte et traite les déchets métalliques, créant des emplois et réduisant la charge des décharges. Cependant, les préoccupations concernant le vol d'infrastructure (lignes ferroviaires, câbles électriques) et les conditions de travail dangereuses ont incité l'intervention du gouvernement. Les nouvelles réglementations visent à formaliser le secteur, établir des chantiers de ferraille autorisés et mettre en œuvre des systèmes de traçabilité tout en préservant les moyens de subsistance et les avantages environnementaux.`
        },
        overview: `Les déchets métalliques comprennent les métaux ferreux (fer et acier) et non ferreux (aluminium, cuivre, laiton) provenant de diverses sources, notamment les emballages (canettes), les débris de construction, les véhicules et les appareils électroménagers. Les métaux représentent 3 à 5% des déchets municipaux mais ont une valeur de recyclage élevée. Le secteur informel africain collecte et recycle activement les métaux en raison des bons prix du marché, atteignant des taux de récupération de 45 à 60% dans certaines régions.`,
        challenges: [
            { title: "Volatilité des prix affecte l'économie de la collecte", detail: "Les prix mondiaux des matières premières pour les métaux comme l'aluminium, le cuivre et l'acier fluctuent considérablement. Lorsque les prix baissent, les collecteurs informels abandonnent la récupération des métaux car elle devient non rentable, entraînant une mise en décharge accrue et une perte de ressources précieuses." },
            { title: "Contamination avec d'autres matériaux", detail: "La ferraille collectée dans les flux de déchets mixtes contient souvent des plastiques, du caoutchouc, de la peinture et d'autres contaminants. Ces impuretés réduisent la qualité et la valeur du métal, nécessitant des étapes de traitement supplémentaires comme la séparation magnétique et le tri manuel avant la fusion." },
            { title: "Préoccupations de sécurité dans le recyclage informel", detail: "Les recycleurs informels de métaux travaillent sans équipement de protection, utilisant des chalumeaux, manipulant des bords tranchants et brûlant parfois les revêtements pour accéder aux métaux. Cela entraîne des taux élevés de coupures, brûlures, maladies respiratoires et empoisonnement aux métaux lourds." },
            { title: "Vol d'infrastructure pour la valeur de la ferraille", detail: "La valeur marchande élevée des métaux a entraîné un vol généralisé d'infrastructures publiques, notamment les lignes ferroviaires, les câbles électriques, les plaques d'égout et les conduites d'eau. Cela cause des perturbations de service, des dangers pour la sécurité et des coûts de remplacement énormes." },
            { title: "Capacité de traitement formel limitée", detail: "Bien que les collecteurs informels atteignent des taux de récupération impressionnants, le manque de fonderies et d'installations de raffinage formelles signifie que la plupart de la ferraille est exportée comme matière première. Cela limite la valeur ajoutée locale et le développement d'une industrie métallurgique secondaire nationale." },
            { title: "Exportation de matériaux précieux sans valeur ajoutée locale", detail: "Des volumes importants de ferraille quittent l'Afrique comme matière première pour les fonderies d'Asie et d'Europe. Cela représente une opportunité économique perdue — le traitement des métaux localement créerait des emplois dans la fabrication et conserverait plus de valeur économique sur le continent." }
        ],
        solutions: [
            "Formalisation du secteur de la ferraille",
            "Centres de collecte et de traitement autorisés",
            "Formation et équipement de sécurité des travailleurs",
            "Systèmes de traçabilité pour prévenir le vol",
            "Valeur ajoutée avant l'exportation",
            "Intégration avec les programmes de Responsabilité Élargie des Producteurs"
        ]
    },
    glass: {
        title: "Aperçu Détaillé : Déchets de Verre",
        statistics: {
            annualGeneration: {
                label: "Contenu en Verre",
                value: "2-4%",
                sublabel: "Des déchets municipaux"
            },
            recyclingRate: {
                label: "Taux de Récupération",
                value: "15-25%",
                sublabel: "Varie selon les pays"
            },
            majorSource: {
                label: "Sources Principales",
                value: "Bouteilles",
                sublabel: "Contenants de boissons"
            },
            environmentalImpact: {
                label: "Recyclabilité",
                value: "Infinie",
                sublabel: "Sans perte de qualité"
            }
        },
        policySection: {
            title: "Paysage Politique et Réglementaire",
            content: `Les politiques de gestion des déchets de verre en Afrique sont moins développées par rapport aux plastiques et aux métaux. L'Afrique du Sud a des programmes de consigne pour les bouteilles de boissons qui encouragent les retours et le recyclage. Le Kenya et le Rwanda explorent des systèmes similaires. L'accent politique principal est sur l'intégration du verre dans des programmes plus larges de Responsabilité Élargie des Producteurs (REP) et la promotion de contenants en verre réutilisables plutôt que des alternatives à usage unique. Les défis incluent la logistique de collecte, les problèmes de contamination et la capacité limitée de fabrication de verre pour l'utilisation de verre recyclé.`
        },
        caseStudy: {
            title: "Étude de Cas : L'industrie du Recyclage du Verre en Afrique du Sud",
            content: `L'Afrique du Sud a établi une industrie de recyclage du verre réussie avec plusieurs usines de fabrication de verre qui utilisent le calcin recyclé (verre broyé) comme matière première. La Glass Recycling Company, une initiative menée par l'industrie, a atteint des taux de recyclage dépassant 40% pour certains types de verre. Le système de consigne sur les bouteilles de boissons stimule des taux de retour élevés. Ce modèle démontre comment le leadership de l'industrie combiné à des incitations économiques peut créer des systèmes de recyclage viables même pour des matériaux de valeur relativement faible.`
        },
        overview: `Les déchets de verre se composent principalement de bouteilles de boissons, de contenants alimentaires et d'autres matériaux d'emballage. Bien que le verre soit recyclable à 100% sans perte de qualité, les taux de recyclage en Afrique restent relativement faibles (15-25%) en raison des défis de collecte, de la contamination et de l'infrastructure de traitement limitée. Le verre représente 2 à 4% des déchets municipaux en poids mais occupe un espace important dans les décharges.`,
        challenges: [
            { title: "Poids et coûts de transport", detail: "Le verre est nettement plus lourd que les matériaux d'emballage alternatifs, rendant la collecte et le transport vers les installations de recyclage coûteux — surtout dans les zones rurales avec de mauvais réseaux routiers. Le coût élevé par tonne de transport dépasse souvent la valeur du verre récupéré." },
            { title: "Contamination avec d'autres matériaux", detail: "Le verre collecté dans les flux de déchets mixtes est fréquemment contaminé par des céramiques, des pierres, des métaux et des résidus organiques. Même de petites quantités de verre résistant à la chaleur ou de céramiques peuvent compromettre un lot entier de verre recyclé, causant des défauts dans les nouveaux produits." },
            { title: "Exigences de séparation des couleurs", detail: "Le recyclage du verre nécessite une séparation par couleur (transparent, vert, ambré) car le calcin de couleurs mélangées produit un résultat de faible qualité. Le tri manuel est laborieux et l'équipement de tri optique est coûteux, créant un goulot d'étranglement que de nombreuses installations africaines ne peuvent surmonter." },
            { title: "Capacité de fabrication de verre limitée pour utiliser le verre recyclé", detail: "Le verre recyclé (calcin) est utilisé le plus efficacement par les fabricants de verre comme matière première. Cependant, l'Afrique compte relativement peu d'usines de fabrication de verre, limitant la demande locale de calcin et forçant les recycleurs à chercher des marchés d'exportation avec des rendements économiques moindres." },
            { title: "Concurrence des alternatives plastiques", detail: "Les industries des boissons et de l'alimentation passent de plus en plus du verre au plastique en raison du poids inférieur, de la réduction des bris et du transport moins cher. Ce changement réduit le volume de verre entrant dans le flux de déchets tout en compromettant l'économie des programmes de recyclage du verre." },
            { title: "Bris pendant la collecte et la manipulation", detail: "Les contenants en verre se brisent fréquemment pendant la collecte, le transport et le tri — surtout dans les systèmes de collecte informels. Le verre brisé crée des dangers pour la sécurité des travailleurs, contamine d'autres matériaux recyclables et réduit la valeur récupérable du matériau." }
        ],
        solutions: [
            "Systèmes de consigne pour les contenants de boissons",
            "Promotion de contenants en verre réutilisables",
            "Systèmes de collecte triés par couleur",
            "Soutien à la fabrication de verre utilisant du calcin recyclé",
            "Intégration avec les programmes REP",
            "Utilisations alternatives pour le verre broyé (construction, filtration)"
        ]
    }
};

// Track currently displayed stream
let currentStreamType = null;

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
    
    // Re-render detailed insights if currently displayed
    if (currentStreamType) {
        renderDetailedInsights(currentStreamType);
    }
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
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    const dataSource = savedLanguage === 'fr' ? wasteStreamDataFr : wasteStreamData;
    const data = dataSource[streamType];
    if (!data) return;

    const container = document.getElementById('detailed-insights');
    
    const currentTranslations = translations[savedLanguage];
    const backText = currentTranslations.insights.backToCategories;
    const statsTitle = savedLanguage === 'fr' ? 'Statistiques Clés' : 'Key Statistics';
    const statsSubtitle = savedLanguage === 'fr' 
        ? `Aperçu de la génération et de la gestion des déchets de ${streamType} en Afrique.`
        : `Snapshot of ${streamType} waste generation and management in Africa.`;
    const challengesTitle = savedLanguage === 'fr' ? 'Défis Clés' : 'Key Challenges';
    const solutionsTitle = savedLanguage === 'fr' ? 'Solutions Durables' : 'Sustainable Solutions';
    
    container.innerHTML = `
        <section class="detailed-insights-section">
            <div class="container">
                <button type="button" class="back-button" onclick="clearDetailedInsights()">
                    ${backText}
                </button>

                <h2 class="insights-title">${data.title}</h2>

                <!-- Overview -->
                <div class="stream-overview">
                    <p>${data.overview}</p>
                </div>

                <!-- Statistics -->
                <div class="statistics-section">
                    <h3>${statsTitle}</h3>
                    <p class="statistics-subtitle">${statsSubtitle}</p>
                    
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

                <!-- Challenges and Solutions -->
                <div class="challenges-solutions-grid">
                    <div class="challenges-card">
                        <h3>${challengesTitle}</h3>
                        <div class="challenges-accordion">
                            ${data.challenges.map(challenge => `
                                <div class="challenge-accordion-item">
                                    <button type="button" class="challenge-accordion-header">
                                        <span class="challenge-icon"></span>
                                        <span class="challenge-title">${challenge.title}</span>
                                        <span class="challenge-chevron">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                        </span>
                                    </button>
                                    <div class="challenge-accordion-body">
                                        <p>${challenge.detail}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="solutions-card">
                        <h3>${solutionsTitle}</h3>
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

    // Attach accordion toggle listeners
    container.querySelectorAll('.challenge-accordion-header').forEach(btn => {
        btn.addEventListener('click', function() {
            const expanded = this.closest('.challenge-accordion-item').classList.contains('active');
            // Close all siblings
            this.closest('.challenges-accordion').querySelectorAll('.challenge-accordion-item').forEach(item => {
                item.classList.remove('active');
            });
            // Toggle clicked item
            if (!expanded) {
                this.closest('.challenge-accordion-item').classList.add('active');
            }
        });
    });

    // Track current stream type
    currentStreamType = streamType;

    // Scroll to insights
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Clear detailed insights
function clearDetailedInsights() {
    const container = document.getElementById('detailed-insights');
    container.innerHTML = '';
    
    // Reset current stream type
    currentStreamType = null;
    
    // Scroll back to categories
    document.querySelector('.waste-categories-section').scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
    });
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
