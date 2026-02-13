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
            nigeria: "Nigeria",
            rwanda: "Rwanda"
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
            nigeria: "Nigéria",
            rwanda: "Rwanda"
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
        overviewText: "South Africa leads the continent in waste management innovation with a strong focus on smart technologies, Extended Producer Responsibility (EPR) frameworks, and circular economy transitions. <a class='cite-link' href='../references/#ref-national-environmental-management-waste-act' title='Source: DFFE – National Environmental Management: Waste Act'>↗</a> The country is advancing IoT-enabled waste systems, recycling startups, and waste-to-energy solutions—all underpinned by a commitment to inclusive, 'Just Transition' policies that formally integrate informal waste pickers.",
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
                title: "Africa Circular Economy Alliance (ACEA) Founding Member",
                description: "South Africa co-founded the Africa Circular Economy Alliance (ACEA) in 2022 alongside the African Union, World Economic Forum, African Development Bank, and World Bank. <a class='cite-link' href='../references/#ref-africa-circular-economy-alliance-acea-framework' title='Source: ACEA Framework'>↗</a> As a founding member, South Africa shapes continental circular economy policy, investment frameworks, and knowledge sharing. This leadership position enables the country to influence regional waste management transitions and attract green economy investments."
            },
            {
                title: "Draft National Waste Management Strategy (NWMS) 2026",
                description: "Released for public comment in 2026, this next-generation strategy outlines ambitious targets for waste diversion, circular economy integration, and equitable service delivery. The draft NWMS addresses the critical challenge that 37% of South African households (9.8 million people) lack access to refuse removal services, particularly in rural and informal settlements. The strategy emphasizes closing service gaps while strengthening recycling infrastructure and EPR enforcement."
            },
            {
                title: "Separation-at-Source Initiatives",
                description: "Government-backed programs encourage households and businesses to segregate waste at the point of generation. This reduces contamination, improves recycling efficiency, and supports decentralized organic waste processing to reduce methane emissions."
            }
        ],
        impact: [
            "Over 430,000 tonnes of plastics recovered annually through EPR schemes",
            "30% reduction in waste collection costs through smart routing",
            "Founding member of Africa Circular Economy Alliance (ACEA) in 2022, shaping continental policy",
            "Draft NWMS 2026 addresses 37% household service gap (9.8 million people without refuse removal)",
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
                description: "Africa's first underground pneumatic waste collection network, operational since 2025 with a $9 million investment. <a class='cite-link' href='../references/#ref-konza-technopolis-pneumatic-waste-collection-system-project' title='Source: Envac Group – Konza Technopolis'>↗</a> The system features 15 kilometers of underground pipes and 50 intake points with 40 tons/day processing capacity. Users deposit waste into intake points, and it's automatically transported via vacuum tubes to central sorting facilities. This innovative system eliminates the need for waste trucks, reduces traffic congestion, lowers emissions, and ensures hygienic, odor-free waste management in urban areas. The system showcases Kenya's vision for smart city development and positions the country as a regional leader in advanced urban infrastructure."
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
                title: "Dandora 45 MW Waste-to-Energy Plant",
                description: "A landmark 45 MW Waste-to-Energy facility officially commissioned by President William Ruto on February 8, 2026. <a class='cite-link' href='../references/#ref-nairobi-waste-to-energy-power-plant-initiative-review' title='Source: ENVACO – Nairobi WtE Review'>↗</a> This plant aims to transform the notorious Dandora dumpsite, East Africa's largest and most hazardous landfill, into a clean energy generation hub. The facility will process thousands of tons of waste daily while generating clean electricity for Nairobi's grid, representing a major shift in Kenya's waste management paradigm from dumping to energy recovery."
            },
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
            "Africa's first pneumatic waste collection network operational (Konza Technopolis, $9M investment, 15km pipes, 40 tons/day capacity)",
            "45 MW Dandora Waste-to-Energy plant commissioned by President Ruto (Feb 8, 2026)",
            "Targeting 50% waste collection coverage nationwide (up from 30%) by 2027",
            "Major diversion of water hyacinth waste into commercial packaging via HyaPak",
            "Planned 10 MW waste-to-energy capacity from Kakamega plant",
            "Progressive closure of Dandora dumpsite and transition to engineered landfills with WtE",
            "Establishment of textile take-back hubs to combat 'mitumba' waste crisis (22.5M kg/year imports)"
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
                title: "Zero Carbon Green Planet (ZCGP) Plant – Sharm El-Sheikh",
                description: "A groundbreaking waste valorization facility processing 400 tonnes/day of non-recyclable waste to produce high-value products including graphene and hydrogen. Set to be completed in 2027, this plant represents Egypt's transition from conventional waste-to-energy incineration to advanced material recovery. By extracting valuable compounds from waste streams, the ZCGP plant positions Egypt as a regional leader in waste-based circular manufacturing and green chemistry."
            },
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
            "Zabbaleen processes 11,000 tons/day with up to 80% waste recovery rate",
            "Recycling rate progression: 37% (2024) targeting 60% by 2027",
            "ZCGP plant in Sharm El-Sheikh (400 tonnes/day, graphene & hydrogen production, 2027 completion)",
            "65+ composting facilities modernized to process organic waste (50-60% of total)",
            "Successful closure of major legacy dumpsites (e.g., Al-Salam)",
            "Waste Management City initiative modernizing infrastructure while integrating informal sector",
            "Electricity-bill-linked fees piloted to expand collection to underserved rural areas (from 35%)"
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
                description: "A landmark USD 116 million investment representing the largest private sector infrastructure project in Nigeria's waste management sector. This facility will process 500 tons of waste daily, generate 12 MW of electricity, and create 1,144 jobs. Expected to be operational by 2027, the project aligns with Nigeria's Climate Change Act (2021) and Gas-to-Waste Policy (2022), targeting methane capture and renewable energy generation from waste streams while addressing Lagos's massive waste challenge."
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
                title: "Lagos State Single-Use Plastic Ban (July 2025)",
                description: "The July 1, 2025 ban on styrofoam, single-use plastic straws, cutlery, and plates marks a turning point for Nigeria's plastic reduction strategy. <a class='cite-link' href='../references/#ref-lagos-state-single-use-plastic-ban-policy' title='Source: Lagos State Government – Single-Use Plastic Ban Policy'>↗</a> This landmark policy addresses Lagos's contribution as one of the world's most plastics-polluted urban areas, where 13,000 tons/day of waste is generated with 60% uncollected. Offenders risk business shutdown. Enforcement is being backed by awareness campaigns, alternative product promotion, and strict penalties for non-compliance."
            }
        ],
        impact: [
            "Wecyclers has diverted over 5,000 tonnes of waste from landfills",
            "Salubata has repurposed thousands of kilograms of plastic into footwear",
            "USD 116M Phoenix Edison WtE facility (500 tons/day capacity, 12 MW, 1,144 jobs) operational by 2027",
            "Lagos State plastic ban (July 1, 2025) targets styrofoam, straws, cutlery, plates",
            "Expansion of MRFs targeting Lagos's 60% uncollected waste stream (7,800 tons/day)",
            "National roadmap 2025-2040 launched with World Bank to achieve integrated waste management",
            "Informal sector recognized as handling 59.3% of national waste disposal",
            "Points-based systems engaging tens of thousands of low-income households in recycling"
        ]
    },
    "rwanda": {
        overviewText: "Rwanda has established itself as Africa's green innovation champion, pioneering groundbreaking waste management solutions that serve as a model for the continent. From banning plastic bags in 2008 to developing the homegrown SHINE Model for circular waste management, Rwanda combines strong political will with practical innovation. The country's approach integrates cutting-edge e-waste recycling, plastic-to-infrastructure projects, and community-driven circular economy initiatives—all supported by a comprehensive National Circular Economy Action Plan targeting zero-waste cities by 2035.",
        smartTech: [
            {
                title: "SHINE Model for Sustainable Waste Management",
                description: "Developed in 2024-2025 by GIZ in partnership with Rwanda's Ministry of Environment, the SHINE Model is a locally-developed, cost-efficient solid waste management framework grounded in life-cycle thinking and full-cost accounting. <a class='cite-link' href='../references/#ref-the-shine-model-sustainable-cost-efficient-waste-management' title='Source: GIZ – The SHINE Model'>↗</a> Successfully piloted in Bugesera, Rwamagana, and Muhanga, the model emphasizes household-level source separation (organics, recyclables, residuals), integrated logistics solutions tailored to local terrain and infrastructure, and behavior change communication. The SHINE Model fully aligns with Rwanda's Integrated Solid Waste Management Strategy and National Circular Economy Action Plan, positioning Rwanda as a regional leader in circular waste systems."
            },
            {
                title: "Digital E-Waste Tracking and Management Systems",
                description: "Rwanda has implemented data-driven e-waste management systems in partnership with the International Telecommunication Union (ITU) and Saudi Arabia's Communications, Space, and Technology Commission (CST). These digital platforms track e-waste flows from generation to recycling, ensuring compliance with Extended Producer Responsibility (EPR) regulations. The system manages approximately 2,500 electronics producers (importers and distributors) and supports the Producer Responsibility Organization (PRO) established under the Business Research Council."
            }
        ],
        recycling: [
            {
                title: "Enviroserve Rwanda Green Park",
                description: "Rwanda's state-of-the-art e-waste dismantling and recycling facility—the second of its kind in Africa—has trained 70 young Rwandans in electronics repair, maintenance, and recycling. <a class='cite-link' href='../references/#ref-the-contribution-of-e-waste-recycling-in-promoting-green-growth-a-case-of-enviro' title='Source: Iraguha & Uwimpuhwe – E-Waste Recycling in Rwanda'>↗</a> The facility has created 413 green jobs with expansion expected as nationwide collection points become fully operational. Enviroserve provides e-waste collection services not only in Rwanda but also in Uganda, the Democratic Republic of Congo, and Burundi. The facility offers data-wiping services, refurbishment, and responsible dismantling, ensuring hazardous materials like heavy metals are safely processed."
            },
            {
                title: "Plastic Roads Infrastructure",
                description: "Kigali's streets feature innovative roads constructed with recycled plastic, offering a durable, cost-effective alternative to traditional asphalt. These plastic roads address Rwanda's plastic waste challenge while providing weather-resistant, long-lasting infrastructure. The technology repurposes thousands of tonnes of plastic waste that would otherwise end up in landfills or the environment."
            },
            {
                title: "Quality Composting from Source-Separated Organics",
                description: "Rwanda has established local composting facilities that convert source-separated organic waste (75% of Rwanda's 1.5 million tonnes of annual waste) into high-quality compost meeting RSB standards. These facilities, particularly the pilot in Bugesera District, use nature-based bio-cycles and continuous laboratory quality control. The compost supports Rwanda's agricultural sector, which employs over 70% of the population and contributes 33% to GDP."
            },
            {
                title: "Rwanda BioSolutions",
                description: "This social enterprise transforms waste into affordable, high-quality compost using a blend of rabbit manure, household waste, and local dumpsite materials. By accelerating decomposition with microorganisms, they produce compost in a fraction of the usual time. This provides farmers with an affordable alternative to inorganic fertilizers, improving yields while supporting soil health. The initiative includes 2 permanent staff, 4 part-time staff, and 30 casual workers."
            }
        ],
        wasteToEnergy: [
            {
                title: "Biogas from Organic Waste",
                description: "Rwanda is developing biogas technology for municipal solid waste management in Kigali and other urban centers. Given that three-quarters of Rwanda's waste is biodegradable, biogas technology offers significant potential for renewable energy generation while reducing methane emissions from open dumping. These projects align with Rwanda's Vision 2050 goal of achieving net-zero carbon secondary cities."
            }
        ],
        community: [
            {
                title: "Gikondo Wetland Transformation",
                description: "The Gikondo wetland in Kigali, once heavily polluted by plastic waste, is being transformed into a recreational area similar to the Nyandungu Eco-tourism Park. The government actively engaged youth in removing plastic waste from the wetland, turning an environmental challenge into an opportunity for community involvement and job creation. This project demonstrates Rwanda's commitment to restoring degraded ecosystems while creating green employment."
            },
            {
                title: "Plastic Waste Management Fund",
                description: "Established in 2021 in partnership with the Private Sector Federation, this fund has collected nearly 1,500 tonnes of plastic waste from approximately 24 drop-off points across Rwanda. The program has created 1,300 green jobs, demonstrating the potential for environmental initiatives to drive economic growth and employment. Collected plastics are diverted from landfills to recycling facilities and road construction projects."
            },
            {
                title: "Community Behavior Change Programs",
                description: "Rwanda's waste management strategy emphasizes Information, Education, and Communication (IEC) activities to promote household waste sorting. Communities that successfully sort waste receive incentives through lower waste management fees. The approach includes sharing success stories, social norming, and making sorting simple and accessible through clear instructions and tools. Political will and local government buy-in ensure long-term sustainability and community trust."
            },
            {
                title: "Nationwide E-Waste Collection Campaign",
                description: "Launched by the Ministry of ICT and Innovation, Ministry of Environment, and RURA in partnership with UNEP and ITU, this campaign raises awareness about proper e-waste management and encourages Rwandans to return old electronics to dedicated collection points across the country. The campaign includes training for general waste collection companies to separate e-waste and deliver it to certified recycling facilities."
            }
        ],
        circular: [
            {
                title: "National Circular Economy Action Plan and Roadmap",
                description: "Launched to position circular economy at the core of Rwanda's economic decision-making by 2035, this comprehensive plan ensures resource retention, waste elimination, and sustainable production. The roadmap addresses waste management, sustainable agriculture, green manufacturing, and circular business models. It aligns with Vision 2050's goals of achieving high-income status and net-zero carbon cities while sustaining a diverse, inclusive green economy."
            },
            {
                title: "Extended Producer Responsibility (EPR) System",
                description: "Rwanda has established comprehensive EPR guidelines for plastics and electronics with phased targets from 2022-2030. The Business Research Council, housed under the Private Sector Federation, serves as Rwanda's Producer Responsibility Organization (PRO), mobilizing approximately 2,500 producers (importers and distributors) of electronics. The EPR system targets 30% collection by 2024, 50% by 2026, 70% by 2028, and 100% by 2030. It includes penalties for non-compliance and incentives for waste sorting."
            },
            {
                title: "Plastic Ban and Global Leadership",
                description: "Rwanda banned plastic bags in 2008, becoming one of the first African countries to take decisive action against plastic pollution. In 2024, Rwanda and Peru jointly submitted a proposal at U.N. talks in Ottawa to reduce global plastic production by 40% by 2040, demonstrating Rwanda's leadership in international environmental policy and commitment to protecting human health and the environment."
            },
            {
                title: "Integrated Solid Waste Management Strategy",
                description: "Rwanda's national strategy emphasizes minimizing waste and promoting resource recovery through prevention, source separation, and targeted organic waste management. The strategy ensures access to waste services by improving collection, logistics, and behavior change while protecting public health and working toward a zero-waste, circular economy through stronger regulations and private sector innovation."
            }
        ],
        impact: [
            "Successfully piloted SHINE Model in 3 satellite cities (Bugesera, Rwamagana, Muhanga)",
            "413 green jobs created at Enviroserve e-waste facility, with expansion ongoing",
            "1,500 tonnes of plastic waste collected through Plastic Waste Management Fund",
            "1,300 green jobs created through plastic waste collection programs",
            "70 young Rwandans trained in e-waste repair, maintenance, and recycling",
            "E-waste recycling services extended to Uganda, DRC, and Burundi",
            "Gikondo wetland transformation creating recreational space and community jobs",
            "EPR system managing ~2,500 electronics producers with phased compliance targets",
            "Innovative plastic roads providing durable, cost-effective infrastructure in Kigali",
            "Global leadership: Co-proposed 40% reduction in plastic production by 2040 at U.N. talks",
            "National Circular Economy Action Plan positioning Rwanda for net-zero cities by 2035"
        ]
    }
};

// French country-specific innovation data
const countryDataFr = {
    "south-africa": {
        overviewText: "L'Afrique du Sud est à la pointe de l'innovation en gestion des déchets sur le continent, avec un accent particulier sur les technologies intelligentes, les cadres de Responsabilité Élargie des Producteurs (REP) et les transitions vers l'économie circulaire. <a class='cite-link' href='../references/#ref-national-environmental-management-waste-act' title='Source: DFFE – National Environmental Management: Waste Act'>↗</a> Le pays développe des systèmes de déchets connectés par l'IoT, des startups de recyclage et des solutions de valorisation énergétique — le tout soutenu par un engagement en faveur de politiques inclusives de « Transition Juste » intégrant formellement les ramasseurs informels de déchets.",
        smartTech: [
            {
                title: "Surveillance Intelligente des Déchets et Technologie IoT",
                description: "Des capteurs IoT et des poubelles intelligentes sont déployés dans les grandes villes pour surveiller les niveaux de déchets en temps réel. Cette technologie optimise les itinéraires de collecte, réduit la consommation de carburant et améliore l'efficacité opérationnelle. Le routage intelligent réduit les coûts de collecte jusqu'à 30 % tout en minimisant les émissions de carbone des véhicules de collecte."
            }
        ],
        recycling: [
            {
                title: "Regenize",
                description: "Une plateforme numérique qui encourage le recyclage en récompensant les ménages et les ramasseurs informels de déchets grâce à la technologie mobile. Les utilisateurs gagnent des points pour les matériaux recyclables, échangeables contre des biens ou des services. Cette innovation comble le fossé formel-informel et augmente les taux de détournement."
            },
            {
                title: "Boomba.mobi",
                description: "Une plateforme mobile reliant la collecte des déchets à l'échange de nourriture et de produits essentiels. Elle comprend des systèmes de traitement organique à petite échelle tels que des fermes de vers pour le vermicompostage, réduisant les déchets organiques envoyés aux décharges tout en produisant des amendements de sol riches en nutriments."
            }
        ],
        wasteToEnergy: [
            {
                title: "Centrale Thermique Kibo Gauteng",
                description: "Cette installation prévue vise à convertir les déchets plastiques en énergie par technologie de pyrolyse, produisant du gaz de synthèse et de l'électricité. Elle représente une étape significative vers le détournement des plastiques non recyclables des décharges tout en contribuant à la production d'énergie renouvelable. Le projet s'aligne sur les objectifs climatiques 2025 de l'Afrique du Sud pour la réduction du méthane."
            }
        ],
        community: [
            {
                title: "Cadre de Transition Juste",
                description: "Les Contributions Déterminées au niveau National (CDN) 2025 de l'Afrique du Sud intègrent explicitement les ramasseurs informels de déchets dans les systèmes formels de déchets par des modèles d'incitation « paiement au kilogramme », des programmes de santé et de sécurité, et la reconnaissance au sein des Modèles de Développement de District. Ce cadre assure l'équité sociale et l'inclusion économique dans le secteur des déchets."
            }
        ],
        circular: [
            {
                title: "Systèmes de Responsabilité Élargie des Producteurs (REP)",
                description: "L'Afrique du Sud dispose des cadres REP les plus avancés d'Afrique, en particulier pour les déchets électroniques et les polymères. La nouvelle Politique Nationale des Déchets Électroniques 2025 établit des programmes de reprise pour l'électronique, tandis que les programmes de récupération de polymères ont récemment détourné plus de 430 000 tonnes de plastique des décharges."
            },
            {
                title: "Membre Fondateur de l'Alliance Africaine pour l'Économie Circulaire (ACEA)",
                description: "L'Afrique du Sud a cofondé l'Alliance Africaine pour l'Économie Circulaire (ACEA) en 2022 aux côtés de l'Union Africaine, du Forum Économique Mondial, de la Banque Africaine de Développement et de la Banque Mondiale. <a class='cite-link' href='../references/#ref-africa-circular-economy-alliance-acea-framework' title='Source: ACEA Framework'>↗</a> En tant que membre fondateur, l'Afrique du Sud façonne les politiques, cadres d'investissement et partage de connaissances en économie circulaire continentale."
            },
            {
                title: "Projet de Stratégie Nationale de Gestion des Déchets (NWMS) 2026",
                description: "Publié pour commentaires publics en 2026, cette stratégie de nouvelle génération décrit des objectifs ambitieux pour le détournement des déchets, l'intégration de l'économie circulaire et la prestation équitable de services. Le projet NWMS aborde le défi crucial que 37 % des ménages sud-africains (9,8 millions de personnes) n'ont pas accès aux services d'enlèvement des ordures."
            },
            {
                title: "Initiatives de Tri à la Source",
                description: "Des programmes soutenus par le gouvernement encouragent les ménages et les entreprises à trier les déchets au point de production. Cela réduit la contamination, améliore l'efficacité du recyclage et soutient le traitement décentralisé des déchets organiques pour réduire les émissions de méthane."
            }
        ],
        impact: [
            "Plus de 430 000 tonnes de plastiques récupérées annuellement grâce aux régimes REP",
            "Réduction de 30 % des coûts de collecte des déchets grâce au routage intelligent",
            "Membre fondateur de l'Alliance Africaine pour l'Économie Circulaire (ACEA) en 2022",
            "Le projet NWMS 2026 aborde l'écart de service de 37 % des ménages (9,8 millions de personnes)",
            "Première politique nationale intégrant les ramasseurs informels dans les engagements climatiques (CDN 2025)",
            "Progrès significatifs vers les objectifs de réduction du méthane via le captage du gaz de décharge",
            "Expansion des systèmes décentralisés de déchets organiques"
        ]
    },
    "kenya": {
        overviewText: "Le Kenya est à l'avant-garde de l'innovation en matière de déchets en Afrique de l'Est, combinant des projets d'infrastructure de pointe avec des initiatives d'économie circulaire de base. Les Règles de Gestion Durable des Déchets 2024 du pays et l'engagement envers les « Cinq R » (Refuser, Réduire, Réutiliser, Réaffecter, Recycler) portent des initiatives ambitieuses allant des systèmes pneumatiques de déchets à l'upcycling textile et aux solutions d'emballage biodégradable.",
        smartTech: [
            {
                title: "Collecte Pneumatique des Déchets – Konza Technopolis",
                description: "Le premier réseau souterrain de collecte pneumatique des déchets en Afrique, opérationnel depuis 2025 avec un investissement de 9 millions de dollars. <a class='cite-link' href='../references/#ref-konza-technopolis-pneumatic-waste-collection-system-project' title='Source: Envac Group – Konza Technopolis'>↗</a> Le système comprend 15 kilomètres de conduites souterraines et 50 points d'entrée avec une capacité de traitement de 40 tonnes/jour. Les utilisateurs déposent les déchets dans des points d'entrée, et ils sont automatiquement transportés par tubes à vide vers des installations de tri centrales. Ce système innovant élimine le besoin de camions de déchets, réduit la congestion routière, diminue les émissions et assure une gestion hygiénique et sans odeur des déchets."
            }
        ],
        recycling: [
            {
                title: "HyaPak",
                description: "Convertit la jacinthe d'eau invasive — un problème écologique persistant dans le lac Victoria — en matériaux d'emballage biodégradables. Cette innovation aborde à la fois la pollution environnementale et les déchets plastiques en fournissant une alternative durable aux emballages conventionnels tout en créant des emplois dans les communautés rurales."
            },
            {
                title: "EcoPost",
                description: "Traite les déchets plastiques mixtes en produits de construction durables, notamment des clôtures écologiques et des matériaux de construction. EcoPost détourne des milliers de tonnes de plastiques des décharges chaque année tout en fournissant des matériaux d'infrastructure abordables et résistants aux intempéries."
            },
            {
                title: "Mr. Green Africa",
                description: "Une plateforme de recyclage de plastiques assistée par la technologie qui formalise les chaînes d'approvisionnement informelles de récupération des déchets. La plateforme connecte les ramasseurs de déchets, les agrégateurs et les installations de recyclage grâce au suivi numérique, à des prix équitables et à des accords d'achat constants."
            }
        ],
        wasteToEnergy: [
            {
                title: "Usine de Valorisation Énergétique de Dandora 45 MW",
                description: "Une installation historique de valorisation énergétique de 45 MW officiellement inaugurée par le Président William Ruto le 8 février 2026. Cette usine vise à transformer la décharge de Dandora, la plus grande et la plus dangereuse d'Afrique de l'Est, en un centre de production d'énergie propre. L'installation traitera des milliers de tonnes de déchets quotidiennement tout en générant de l'électricité propre pour le réseau de Nairobi."
            },
            {
                title: "Usine de Valorisation Énergétique de Kakamega",
                description: "Actuellement en construction, cette installation incinérera les déchets solides pour générer environ 10 MW d'électricité, suffisamment pour alimenter des milliers de foyers. Le projet représente la poussée du Kenya vers l'élimination durable des déchets tout en contribuant aux objectifs d'énergie renouvelable."
            }
        ],
        community: [
            {
                title: "Systèmes de Gestion des Déchets au Niveau des Comtés",
                description: "La structure de gouvernance décentralisée du Kenya habilite 47 comtés à concevoir des solutions localisées de déchets. Les règlements récents de 2024 obligent les comtés à fournir des « chambres à ordures » désignées et des services de collecte triée, avec des projets pilotes à Murang'a et Taita Taveta montrant des résultats prometteurs."
            },
            {
                title: "Centres de Reprise Textile",
                description: "Pour gérer la « crise mitumba » (22,5 millions de kg d'importations annuelles de vêtements d'occasion), le Kenya établit des centres de reprise où les textiles usagés sont collectés, triés et transformés en nouveaux produits de mode circulaire. Cette innovation réduit les déchets textiles dans les décharges et soutient l'entrepreneuriat de la mode durable."
            }
        ],
        circular: [
            {
                title: "Cadre des Cinq R",
                description: "La stratégie nationale du Kenya met l'accent sur les principes Refuser, Réduire, Réutiliser, Réaffecter et Recycler. Cette approche globale encourage le changement de comportement, la reconception des produits et les modèles commerciaux circulaires dans toutes les industries."
            },
            {
                title: "Loi sur la Gestion Durable des Déchets (2022)",
                description: "Fournit le socle juridique des transitions vers l'économie circulaire, imposant la conformité REP, le tri des déchets et les Centres de Récupération de Matériaux (CRM) au niveau des comtés pour capturer les flux de déchets non collectés."
            }
        ],
        impact: [
            "Premier réseau de collecte pneumatique des déchets en Afrique opérationnel (Konza Technopolis, investissement de 9 M$, 15 km de conduites, capacité de 40 tonnes/jour)",
            "Usine de valorisation énergétique de 45 MW à Dandora inaugurée par le Président Ruto (8 février 2026)",
            "Objectif de 50 % de couverture de collecte des déchets au niveau national (contre 30 %) d'ici 2027",
            "Détournement majeur des déchets de jacinthe d'eau vers l'emballage commercial via HyaPak",
            "Capacité prévue de 10 MW de valorisation énergétique à l'usine de Kakamega",
            "Fermeture progressive de la décharge de Dandora et transition vers des décharges contrôlées avec valorisation énergétique",
            "Création de centres de reprise textile pour lutter contre la crise mitumba (22,5 M kg/an d'importations)"
        ]
    },
    "egypt": {
        overviewText: "Le paysage de l'innovation en matière de déchets en Égypte est profondément enraciné dans le système informel de recyclage des Zabbaleen, mondialement reconnu, tout en intégrant progressivement des plateformes numériques, des réformes d'infrastructure menées par le gouvernement et des initiatives avancées d'économie circulaire. Le pays développe sa capacité à produire des engrais organiques, de l'hydrogène et des matériaux avancés comme le graphène à partir de flux de déchets, se positionnant comme un leader régional en valorisation des déchets.",
        smartTech: [
            {
                title: "Systèmes de Crédit Numérique pour les Collecteurs Informels",
                description: "Les plateformes numériques récompensent les collecteurs informels de déchets avec des crédits pour les déchets plastiques livrés aux centres d'agrégation. Ces systèmes formalisent les transactions financières, améliorent la traçabilité et fournissent aux travailleurs informels des flux de revenus sécurisés tout en augmentant les taux de récupération du plastique."
            }
        ],
        recycling: [
            {
                title: "Système de Recyclage Informel des Zabbaleen",
                description: "La communauté Zabbaleen au Caire exploite l'un des systèmes de recyclage informel les plus efficaces au monde, récupérant jusqu'à 80 % des déchets collectés grâce à un tri manuel et semi-mécanisé hautement qualifié. Ce système constitue la colonne vertébrale de la chaîne de valeur des déchets en Égypte. Des efforts sont en cours pour formaliser et améliorer les conditions de travail tout en préservant l'efficacité opérationnelle."
            },
            {
                title: "Modernisation des Installations de Compostage Gouvernementales",
                description: "L'Égypte modernise plus de 65 installations de compostage gouvernementales pour traiter la fraction de déchets organiques du pays (50-60 %). Les installations modernisées produisent des engrais organiques de haute qualité, réduisent les émissions de méthane et soutiennent la productivité agricole."
            }
        ],
        wasteToEnergy: [
            {
                title: "Usine Zero Carbon Green Planet (ZCGP) – Charm el-Cheikh",
                description: "Une installation révolutionnaire de valorisation des déchets traitant 400 tonnes/jour de déchets non recyclables pour produire des produits à haute valeur ajoutée, notamment du graphène et de l'hydrogène. Prévue pour être achevée en 2027, cette usine représente la transition de l'Égypte de l'incinération conventionnelle vers la récupération avancée de matériaux, positionnant l'Égypte comme leader régional en fabrication circulaire et chimie verte."
            },
            {
                title: "Secteur Intégré de Gestion des Déchets Solides (ISWMS)",
                description: "Des Partenariats Public-Privé (PPP) à grande échelle établissent des usines de valorisation énergétique et des décharges sanitaires contrôlées pour remplacer les décharges héritées. Ces installations convertiront les déchets solides municipaux en électricité et chaleur, soutenant les objectifs d'énergie renouvelable de l'Égypte dans le cadre de la Vision 2030."
            }
        ],
        community: [
            {
                title: "Programmes d'Intégration du Secteur Informel",
                description: "Les programmes gouvernementaux fournissent formation, soutien logistique et équipements de sécurité aux travailleurs traditionnels Zabbaleen. Les initiatives de formalisation comprennent l'assurance santé, la reconnaissance juridique et l'intégration dans les contrats municipaux de déchets, assurant la protection sociale sans perturber les systèmes de récupération éprouvés."
            },
            {
                title: "Frais de Déchets Liés aux Factures d'Électricité",
                description: "Pour combler le déficit de financement de 35 % dans la gestion des déchets, l'Égypte pilote un système où les frais de déchets sont liés aux factures d'électricité, assurant des flux de revenus constants pour les services municipaux de déchets tout en étendant la couverture de collecte rurale de 35 % vers les objectifs nationaux."
            }
        ],
        circular: [
            {
                title: "Production de Matériaux Avancés à partir de Déchets",
                description: "L'Égypte investit dans des installations qui produisent de l'hydrogène, du graphène et d'autres matériaux avancés à partir de matières premières issues de déchets. Ces innovations transforment les déchets d'un défi d'élimination en une ressource à haute valeur pour les applications industrielles, soutenant la croissance industrielle verte."
            },
            {
                title: "Programme National de Gestion des Déchets Solides (NSWMP)",
                description: "Ce programme de réforme complet conduit une refonte institutionnelle, éloignant l'Égypte de la mise en décharge vers des systèmes de déchets intégrés. Le NSWMP promeut le tri des déchets, les CRM, le compostage et les marchés formels de recyclage, visant une augmentation du taux national de recyclage de 2-4 % à des chiffres à deux digits."
            }
        ],
        impact: [
            "Les Zabbaleen traitent 11 000 tonnes/jour avec un taux de récupération allant jusqu'à 80 %",
            "Progression du taux de recyclage : 37 % (2024) visant 60 % d'ici 2027",
            "Usine ZCGP à Charm el-Cheikh (400 tonnes/jour, production de graphène et d'hydrogène, achèvement en 2027)",
            "Plus de 65 installations de compostage modernisées pour traiter les déchets organiques (50-60 % du total)",
            "Fermeture réussie de grandes décharges héritées (ex. : Al-Salam)",
            "Initiative Waste Management City modernisant l'infrastructure tout en intégrant le secteur informel",
            "Frais liés aux factures d'électricité pilotés pour étendre la collecte aux zones rurales sous-desservies (à partir de 35 %)"
        ]
    },
    "nigeria": {
        overviewText: "L'écosystème d'innovation du Nigéria est porté par des entreprises sociales et des plateformes de technologie mobile qui démocratisent l'accès aux services de recyclage, en particulier pour les ménages urbains à faibles revenus. Des systèmes de points par SMS aux modèles de collecte par vélo-cargo et aux entreprises de transformation des déchets en produits, les innovateurs nigérians relèvent les défis massifs de déchets du pays avec des solutions évolutives et centrées sur la communauté.",
        smartTech: [
            {
                title: "Plateformes de Recyclage par SMS et Applications Mobiles",
                description: "Les startups nigérianes utilisent les SMS et les applications mobiles pour connecter les ménages aux services de recyclage. Les utilisateurs s'inscrivent par SMS, planifient des collectes et gagnent des points pour les recyclables — rendant le recyclage accessible même dans les zones avec une connectivité internet limitée. Cette approche abaisse les barrières à la participation et formalise les marchés informels."
            }
        ],
        recycling: [
            {
                title: "Wecyclers",
                description: "Une entreprise sociale pionnière utilisant des vélos-cargos à faible coût (Wecycles) pour collecter les déchets recyclables des ménages dans les quartiers à faibles revenus. Les participants gagnent des points via un système SMS, échangeables contre des articles ménagers, de la nourriture ou de l'argent. Wecyclers a détourné des milliers de tonnes de déchets des décharges et fourni des opportunités économiques aux collecteurs de déchets."
            },
            {
                title: "Vicfold Recyclers",
                description: "Convertit les déchets plastiques en résines utilisées dans l'industrie manufacturière. L'entreprise traite les plastiques post-consommation en matières premières pour les industries, réduisant la dépendance aux importations de plastique vierge tout en répondant à la crise des déchets plastiques du Nigéria."
            },
            {
                title: "Salubata",
                description: "Transforme les déchets plastiques en chaussures modulaires et à la mode. Cette entreprise d'upcycling aborde la pollution plastique tout en créant des chaussures abordables et durables pour les marchés locaux, démontrant le potentiel du design circulaire dans les biens de consommation."
            }
        ],
        wasteToEnergy: [
            {
                title: "Installation de Valorisation Énergétique Phoenix Edison",
                description: "Un investissement historique de 116 millions de dollars US représentant le plus grand projet d'infrastructure du secteur privé dans la gestion des déchets au Nigéria. Cette installation traitera 500 tonnes de déchets par jour, générera 12 MW d'électricité et créera 1 144 emplois. Prévue opérationnelle d'ici 2027, le projet s'aligne sur la Loi sur le Changement Climatique (2021) et la Politique de Gaz à partir de Déchets (2022) du Nigéria."
            }
        ],
        community: [
            {
                title: "Systèmes de Points Communautaires",
                description: "Les programmes de recyclage de base utilisent des incitations à base de points pour encourager les ménages à trier et collecter les recyclables. Ces programmes développent la sensibilisation environnementale, réduisent les fuites de déchets dans les systèmes de drainage et créent des opportunités de micro-entrepreneuriat pour les agrégateurs de déchets."
            },
            {
                title: "Expansion des Centres de Récupération de Matériaux (CRM)",
                description: "De nouveaux CRM sont établis à Lagos et dans d'autres grandes villes pour capturer le flux de 60 % de déchets non collectés. Ces installations trient, traitent et préparent les recyclables pour le marché, soutenant l'objectif du Nigéria d'augmenter les taux de recyclage au-delà de 10 %."
            }
        ],
        circular: [
            {
                title: "Initiatives de Responsabilité Élargie des Producteurs (REP)",
                description: "Le Nigéria déploie des régimes REP pour les emballages, les plastiques et l'électronique. Les producteurs sont tenus de financer les systèmes de reprise et de recyclage, transférant la responsabilité en amont et encourageant la conception durable des produits."
            },
            {
                title: "Interdiction des Plastiques à Usage Unique de l'État de Lagos (Juillet 2025)",
                description: "L'interdiction du 1er juillet 2025 du polystyrène, des pailles, couverts et assiettes en plastique à usage unique marque un tournant pour la stratégie de réduction du plastique du Nigéria. Cette politique historique aborde la contribution de Lagos en tant que l'une des zones urbaines les plus polluées par les plastiques au monde, où 13 000 tonnes/jour de déchets sont générées dont 60 % non collectées."
            }
        ],
        impact: [
            "Wecyclers a détourné plus de 5 000 tonnes de déchets des décharges",
            "Salubata a réutilisé des milliers de kilogrammes de plastique en chaussures",
            "Installation de valorisation énergétique Phoenix Edison de 116 M$ (capacité de 500 tonnes/jour, 12 MW, 1 144 emplois) opérationnelle d'ici 2027",
            "Interdiction du plastique dans l'État de Lagos (1er juillet 2025) ciblant polystyrène, pailles, couverts, assiettes",
            "Expansion des CRM ciblant le flux de 60 % de déchets non collectés à Lagos (7 800 tonnes/jour)",
            "Feuille de route nationale 2025-2040 lancée avec la Banque mondiale pour une gestion intégrée des déchets",
            "Le secteur informel reconnu comme gérant 59,3 % de l'élimination nationale des déchets",
            "Les systèmes de points engagent des dizaines de milliers de ménages à faibles revenus dans le recyclage"
        ]
    },
    "rwanda": {
        overviewText: "Le Rwanda s'est imposé comme le champion africain de l'innovation verte, pionnier de solutions révolutionnaires de gestion des déchets servant de modèle pour le continent. De l'interdiction des sacs plastiques en 2008 au développement du Modèle SHINE local pour la gestion circulaire des déchets, le Rwanda combine une forte volonté politique avec une innovation pratique. L'approche du pays intègre le recyclage de pointe des déchets électroniques, les projets de plastique-infrastructure et les initiatives communautaires d'économie circulaire — le tout soutenu par un Plan d'Action National pour l'Économie Circulaire visant des villes zéro déchet d'ici 2035.",
        smartTech: [
            {
                title: "Modèle SHINE pour la Gestion Durable des Déchets",
                description: "Développé en 2024-2025 par la GIZ en partenariat avec le Ministère de l'Environnement du Rwanda, le Modèle SHINE est un cadre de gestion des déchets solides développé localement, rentable, fondé sur la pensée du cycle de vie et la comptabilité des coûts complets. <a class='cite-link' href='../references/#ref-the-shine-model-sustainable-cost-efficient-waste-management' title='Source: GIZ – The SHINE Model'>↗</a> Testé avec succès à Bugesera, Rwamagana et Muhanga, le modèle met l'accent sur le tri à la source au niveau des ménages (organiques, recyclables, résidus), les solutions logistiques intégrées adaptées au terrain local et le changement de comportement."
            },
            {
                title: "Systèmes Numériques de Suivi et de Gestion des Déchets Électroniques",
                description: "Le Rwanda a mis en place des systèmes de gestion des déchets électroniques basés sur les données en partenariat avec l'Union Internationale des Télécommunications (UIT) et la Commission des Communications, de l'Espace et de la Technologie (CST) d'Arabie Saoudite. Ces plateformes numériques suivent les flux de déchets électroniques de la production au recyclage, assurant la conformité avec les règlements REP. Le système gère environ 2 500 producteurs d'électronique (importateurs et distributeurs)."
            }
        ],
        recycling: [
            {
                title: "Enviroserve Rwanda Green Park",
                description: "L'installation de démantèlement et de recyclage de déchets électroniques de pointe du Rwanda — la deuxième de ce type en Afrique — a formé 70 jeunes Rwandais en réparation, maintenance et recyclage d'électronique. <a class='cite-link' href='../references/#ref-the-contribution-of-e-waste-recycling-in-promoting-green-growth-a-case-of-enviro' title='Source: Iraguha & Uwimpuhwe – E-Waste Recycling in Rwanda'>↗</a> L'installation a créé 413 emplois verts avec une expansion prévue. Enviroserve fournit des services de collecte de déchets électroniques non seulement au Rwanda mais aussi en Ouganda, en République Démocratique du Congo et au Burundi."
            },
            {
                title: "Routes en Plastique",
                description: "Les rues de Kigali présentent des routes innovantes construites avec du plastique recyclé, offrant une alternative durable et économique à l'asphalte traditionnel. Ces routes en plastique répondent au défi des déchets plastiques du Rwanda tout en fournissant une infrastructure résistante aux intempéries et durable."
            },
            {
                title: "Compostage de Qualité à partir de Matières Organiques Triées à la Source",
                description: "Le Rwanda a établi des installations de compostage locales qui convertissent les déchets organiques triés à la source (75 % des 1,5 million de tonnes de déchets annuels du Rwanda) en compost de haute qualité répondant aux normes RSB. Ces installations soutiennent le secteur agricole du Rwanda, qui emploie plus de 70 % de la population et contribue à 33 % du PIB."
            },
            {
                title: "Rwanda BioSolutions",
                description: "Cette entreprise sociale transforme les déchets en compost abordable et de haute qualité en utilisant un mélange de fumier de lapin, de déchets ménagers et de matériaux de décharge locaux. En accélérant la décomposition avec des micro-organismes, ils produisent du compost en une fraction du temps habituel, fournissant aux agriculteurs une alternative abordable aux engrais inorganiques."
            }
        ],
        wasteToEnergy: [
            {
                title: "Biogaz à partir de Déchets Organiques",
                description: "Le Rwanda développe la technologie du biogaz pour la gestion des déchets solides municipaux à Kigali et dans d'autres centres urbains. Étant donné que les trois quarts des déchets du Rwanda sont biodégradables, la technologie du biogaz offre un potentiel significatif pour la production d'énergie renouvelable tout en réduisant les émissions de méthane des décharges à ciel ouvert. Ces projets s'alignent sur l'objectif de la Vision 2050 du Rwanda d'atteindre des villes secondaires à zéro émission de carbone."
            }
        ],
        community: [
            {
                title: "Transformation de la Zone Humide de Gikondo",
                description: "La zone humide de Gikondo à Kigali, autrefois fortement polluée par les déchets plastiques, est en cours de transformation en espace récréatif similaire au Parc d'Écotourisme de Nyandungu. Le gouvernement a activement engagé les jeunes dans l'enlèvement des déchets plastiques de la zone humide, transformant un défi environnemental en opportunité d'engagement communautaire et de création d'emplois."
            },
            {
                title: "Fonds de Gestion des Déchets Plastiques",
                description: "Créé en 2021 en partenariat avec la Fédération du Secteur Privé, ce fonds a collecté près de 1 500 tonnes de déchets plastiques provenant d'environ 24 points de dépôt à travers le Rwanda. Le programme a créé 1 300 emplois verts, démontrant le potentiel des initiatives environnementales à stimuler la croissance économique et l'emploi."
            },
            {
                title: "Programmes de Changement de Comportement Communautaire",
                description: "La stratégie de gestion des déchets du Rwanda met l'accent sur les activités d'Information, d'Éducation et de Communication (IEC) pour promouvoir le tri des déchets ménagers. Les communautés qui trient avec succès les déchets reçoivent des incitations grâce à des frais de gestion des déchets réduits. La volonté politique et l'adhésion des gouvernements locaux assurent la durabilité à long terme et la confiance de la communauté."
            },
            {
                title: "Campagne Nationale de Collecte des Déchets Électroniques",
                description: "Lancée par le Ministère des TIC et de l'Innovation, le Ministère de l'Environnement et RURA en partenariat avec le PNUE et l'UIT, cette campagne sensibilise à la gestion appropriée des déchets électroniques et encourage les Rwandais à retourner les anciens appareils électroniques aux points de collecte dédiés à travers le pays."
            }
        ],
        circular: [
            {
                title: "Plan d'Action et Feuille de Route pour l'Économie Circulaire Nationale",
                description: "Lancé pour positionner l'économie circulaire au cœur de la prise de décision économique du Rwanda d'ici 2035, ce plan complet assure la rétention des ressources, l'élimination des déchets et la production durable. La feuille de route aborde la gestion des déchets, l'agriculture durable, la fabrication verte et les modèles commerciaux circulaires."
            },
            {
                title: "Système de Responsabilité Élargie des Producteurs (REP)",
                description: "Le Rwanda a établi des directives REP complètes pour les plastiques et l'électronique avec des objectifs échelonnés de 2022 à 2030. Le système REP vise une collecte de 30 % d'ici 2024, 50 % d'ici 2026, 70 % d'ici 2028 et 100 % d'ici 2030. Il comprend des sanctions pour non-conformité et des incitations pour le tri des déchets."
            },
            {
                title: "Interdiction du Plastique et Leadership Mondial",
                description: "Le Rwanda a interdit les sacs plastiques en 2008, devenant l'un des premiers pays africains à agir de manière décisive contre la pollution plastique. En 2024, le Rwanda et le Pérou ont conjointement soumis une proposition aux pourparlers de l'ONU à Ottawa pour réduire la production mondiale de plastique de 40 % d'ici 2040, démontrant le leadership du Rwanda en politique environnementale internationale."
            },
            {
                title: "Stratégie Intégrée de Gestion des Déchets Solides",
                description: "La stratégie nationale du Rwanda met l'accent sur la minimisation des déchets et la promotion de la récupération des ressources par la prévention, le tri à la source et la gestion ciblée des déchets organiques. La stratégie assure l'accès aux services de déchets en améliorant la collecte, la logistique et le changement de comportement."
            }
        ],
        impact: [
            "Modèle SHINE testé avec succès dans 3 villes satellites (Bugesera, Rwamagana, Muhanga)",
            "413 emplois verts créés à l'installation de déchets électroniques Enviroserve, avec expansion en cours",
            "1 500 tonnes de déchets plastiques collectées grâce au Fonds de Gestion des Déchets Plastiques",
            "1 300 emplois verts créés grâce aux programmes de collecte de déchets plastiques",
            "70 jeunes Rwandais formés en réparation, maintenance et recyclage de déchets électroniques",
            "Services de recyclage de déchets électroniques étendus à l'Ouganda, la RDC et le Burundi",
            "Transformation de la zone humide de Gikondo créant espace récréatif et emplois communautaires",
            "Système REP gérant environ 2 500 producteurs d'électronique avec des objectifs de conformité échelonnés",
            "Routes en plastique innovantes fournissant une infrastructure durable et économique à Kigali",
            "Leadership mondial : Co-proposition de réduction de 40 % de la production de plastique d'ici 2040 lors des pourparlers de l'ONU",
            "Plan d'Action National pour l'Économie Circulaire positionnant le Rwanda pour des villes à zéro émission d'ici 2035"
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
            if (translation) translation = translation[key];
        });
        
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // Save language preference
    localStorage.setItem('selectedLanguage', lang);
    
    // Reload country data in the selected language
    const countrySelector = document.getElementById('country-selector');
    if (countrySelector) {
        loadCountryData(countrySelector.value);
    }
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

// Function to load country-specific data
function loadCountryData(countryCode) {
    const lang = localStorage.getItem('selectedLanguage') || 'en';
    const dataSource = (lang === 'fr' && countryDataFr && countryDataFr[countryCode]) ? countryDataFr : countryData;
    const data = dataSource[countryCode];
    if (!data) return;

    // Update overview text
    const overviewText = document.querySelector('.overview-text');
    if (overviewText) {
        overviewText.innerHTML = data.overviewText;
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
