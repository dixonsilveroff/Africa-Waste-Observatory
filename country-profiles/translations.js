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
            nigeria: "Nigeria",
            egypt: "Egypt",
            kenya: "Kenya",
            rwanda: "Rwanda",
            southAfrica: "South Africa"
        },
        sections: {
            overview: "Overview",
            snapshot: "Country Snapshot",
            generation: "Waste Generation Profile",
            collection: "Waste Collection & Informal Sector",
            treatment: "Treatment & Disposal Practices",
            policy: "Policy & Regulatory Framework",
            challenges: "Key Challenges",
            opportunities: "Opportunities & Future Outlook",
            references: "References & Data Sources",
            primarySources: "Primary Sources",
            supportingInstitutions: "Supporting Institutions"
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
            nigeria: "Nigéria",
            egypt: "Égypte",
            kenya: "Kenya",
            rwanda: "Rwanda",
            southAfrica: "Afrique du Sud"
        },
        sections: {
            overview: "Aperçu",
            snapshot: "Instantané du Pays",
            generation: "Profil de Génération des Déchets",
            collection: "Collecte des Déchets et Secteur Informel",
            treatment: "Pratiques de Traitement et d'Élimination",
            policy: "Cadre Politique et Réglementaire",
            challenges: "Défis Principaux",
            opportunities: "Opportunités et Perspectives d'Avenir",
            references: "Références et Sources de Données",
            primarySources: "Sources Principales",
            supportingInstitutions: "Institutions de Soutien"
        }
    }
};

// Country-specific data
const countryData = {
    "nigeria": {
        overviewText: "Nigeria is Africa's most populous nation (200+ million) and one of the continent's fastest-urbanizing economies, generating approximately 32 million metric tons of solid waste annually—a figure projected to reach 107 million tons by 2050. This rapid demographic and urban expansion has positioned the country at the center of Africa's waste management challenge, particularly in Lagos, where 13,000 tons of waste are generated daily with 60% remaining uncollected. The informal waste sector handles 59.3% of national waste disposal, employing millions of workers known as Baban Bola and Omo Gbonla, yet these essential workers remain largely unrecognized and unprotected. Recent landmark developments include the Lagos State single-use plastic ban (July 1, 2025), the $116 million Phoenix Edison waste-to-energy facility set to process 500 tons daily and create 1,144 jobs, and a comprehensive national roadmap (2025-2040) developed with the World Bank. As consumption patterns evolve and cities expand beyond existing infrastructure, waste management has become a critical issue linking environmental protection, public health, and economic development—while also presenting significant opportunities for circular economy growth and job creation.",
        snapshot: [
            { label: "Population", value: "200+ million" },
            { label: "Projected Urban Population (2040)", value: "199 million" },
            { label: "Lagos Daily Waste Generation", value: "13,000 tons/day (60% uncollected)" },
            { label: "National Collection Rate", value: "20-30% (Informal sector: 59.3%)" },
            { label: "Projected Waste by 2050", value: "107 million tons/year" },
            { label: "Environmental Performance Index (2024)", value: "Ranked 140th (up from 162nd in 2022)" }
        ],
        wasteGeneration: `<p>Nigeria generates approximately <strong>32 million metric tons</strong> of solid waste annually, with urban areas contributing about <strong>27.3 million tons</strong> per year. This figure is projected to rise to <strong>107 million tons by 2050</strong>.</p>
        <p><strong>Per capita generation:</strong> 0.51 kg/day</p>
        <p><strong>Lagos-specific data (2024-2026):</strong></p>
        <ul>
            <li><strong>13,000 tons/day</strong> generated (5.5 million tons annually)</li>
            <li><strong>60% remains uncollected</strong></li>
            <li>Only <strong>13% recycled</strong></li>
            <li>Lagos contributed <strong>870,000 tons</strong> to global plastic waste in 2024</li>
            <li><strong>34 kg plastic/person/year</strong> leaking into water systems</li>
        </ul>
        <p><strong>Dominant waste streams:</strong></p>
        <ul>
            <li>Organic waste</li>
            <li>Plastics (1.5 million tons/year nationally, <10% recycling rate)</li>
            <li>Textiles</li>
            <li>Electronic waste</li>
        </ul>
        <p>Plastic waste is a critical concern, making plastics a national environmental priority recognized through the 2025 Lagos State plastic ban.</p>`,
        wasteCollection: `<p>Waste collection efficiency remains low, averaging <strong>20–30% nationally</strong>, and reaching <strong>41% in optimized urban areas</strong>. This gap has led to the rise of a large informal waste ecosystem that handles <strong>59.3% of national waste disposal</strong>.</p>
        <p>Informal waste pickers, known locally as <strong>Baban Bola</strong> (North) and <strong>Omo Gbonla</strong> (Southwest), are the backbone of recycling activities, particularly in Lagos and Abuja. These workers collect, sort, and sell recyclable materials, contributing significantly to value recovery and sector knowledge. Recent studies (2024-2025) reveal that approximately <strong>40 million micro, small, and medium enterprises (MSMEs)</strong> operate in Nigeria, with 89.4% in the informal economy, including waste collectors who remain hidden and excluded from formal recognition.</p>
        <p>However, they face social exclusion, health risks, and limited legal recognition, highlighting the need for structured formalization policies such as those being piloted through partnerships like <strong>Taka Taka</strong>, which aims to achieve 90% recycling rates while creating jobs for women and youth in underserved communities.</p>`,
        treatment: `<p>Nigeria relies heavily on open dumping and uncontrolled burning, accounting for <strong>80–90%</strong> of waste disposal practices.</p>
        <p><strong>Environmental and health impacts include:</strong></p>
        <ul>
            <li>Groundwater contamination from leachate</li>
            <li>Increased incidence of waterborne diseases (cholera, typhoid)</li>
            <li>Air pollution from toxic emissions and black carbon</li>
            <li>Marine plastic leakage affecting coastal ecosystems</li>
            <li>Plastic waste from coastal cities contributes significantly to regional marine pollution and microplastic accumulation in food chains</li>
        </ul>`,
        policy: `<p>Nigeria has accelerated policy reforms in recent years to address waste and climate challenges.</p>
        <p><strong>Key instruments include:</strong></p>
        <ul>
            <li><strong>Climate Change Act (2021):</strong> Net-zero emissions target by 2060</li>
            <li><strong>National Policy on Plastic Waste Management (NPPWM):</strong> Circular economy framework</li>
            <li><strong>National Implementation Guidelines for Plastic Waste (2024):</strong> Developed with UNIDO and Japan</li>
            <li><strong>Lagos State Single-Use Plastic Ban (July 1, 2025):</strong> Prohibits styrofoam, straws, cutlery, and plates. Offenders risk business shutdown. This landmark policy addresses Lagos's contribution as one of the world's most plastics-polluted urban areas.</li>
            <li><strong>Gas-to-Waste Policy (2022):</strong> Methane capture and waste-to-energy initiatives</li>
            <li><strong>NESREA Act (2007):</strong> Main enforcement agency for environmental standards</li>
        </ul>
        <p><strong>National Roadmap (2025-2040) in collaboration with World Bank:</strong></p>
        <ul>
            <li><strong>2025 Quick Wins:</strong> National Solid Waste Sector Innovation Fund launched, boost at-source separation</li>
            <li><strong>2027 Short-term:</strong> Improve collection infrastructure and establish Material Recovery Facilities (MRFs)</li>
            <li><strong>2030 Medium-term:</strong> Specialized hazardous waste facilities in key cities</li>
            <li><strong>2040 Long-term:</strong> Fully integrated sustainable waste management system</li>
        </ul>
        <p>These policies aim to reduce environmental damage while unlocking economic value from waste streams. Data-driven decision-making has strengthened political will for enforcement.</p>`,
        challenges: [
            { title: "Weak enforcement capacity", detail: "Regulatory agencies such as NESREA lack adequate funding, personnel, and political backing to enforce existing waste management laws consistently across states, leading to widespread non-compliance and illegal dumping." },
            { title: "Limited waste processing infrastructure", detail: "Nigeria has very few Material Recovery Facilities (MRFs), transfer stations, or engineered sanitary landfills. Most waste ends up in open dumps, with only 20–30% of generated waste formally collected nationwide." },
            { title: "Corruption and resource constraints", detail: "Misallocation of public funds, procurement irregularities, and under-investment in the waste sector have undermined the development of modern collection, treatment, and disposal systems at all levels of government." },
            { title: "Low recycling rates", detail: "Formal recycling captures a negligible share of Nigeria's 32 million tons of annual waste. Limited sorting infrastructure, low public awareness of separation, and weak market linkages for recyclables keep recovery rates extremely low." },
            { title: "Health and safety risks for informal workers", detail: "Millions of informal waste workers (Baban Bola, Omo Gbonla) handle hazardous materials without protective equipment, training, or social protections, exposing them to respiratory diseases, injuries, and toxic contamination." },
            { title: "Implementation gap between policy and practice", detail: "Despite well-designed policies and national roadmaps, implementation remains Nigeria's greatest obstacle. Fragmented governance across federal, state, and local levels, combined with limited data systems, prevents coordinated action and accountability." }
        ],
        opportunities: `<p>Nigeria's waste sector holds strong potential for transformation through:</p>
        <ul>
            <li>Formal integration of informal waste workers</li>
            <li>Expansion of Extended Producer Responsibility (EPR) schemes</li>
            <li>Investment in gas-to-waste and recycling technologies</li>
            <li>Job creation through circular economy industries</li>
            <li><strong>Major Infrastructure Investment (2025-2027):</strong> Phoenix Edison Ltd. is constructing a <strong>$116 million waste-to-energy facility</strong> that will process <strong>500 tons of waste daily</strong>, generate <strong>12 MW of electricity</strong>, and create <strong>1,144 jobs</strong>. This landmark project represents the largest private sector investment in Nigeria's waste management infrastructure.</li>
        </ul>
        <p>With proper institutional support and private sector participation, waste could evolve from an environmental burden into a driver of inclusive economic growth.</p>`,
        primarySources: [
            "World Bank – What a Waste 2.0: A Global Snapshot of Solid Waste Management",
            "Nigeria National Bureau of Statistics (NBS) – Environmental & Urbanization Data",
            "Federal Ministry of Environment (Nigeria) – National Waste & Plastic Policies",
            "United Nations Environment Programme (UNEP) – Africa Waste Outlook",
            "Environmental Performance Index (EPI), Yale University (2022, 2024)",
            "UNIDO & Government of Japan – National Implementation Guidelines for Plastic Waste Management (2024)",
            "Climate Change Act of Nigeria (2021)"
        ],
        supportingInstitutions: [
            "Lagos Waste Management Authority (LAWMA)",
            "Abuja Environmental Protection Board (AEPB)"
        ]
    },
    "egypt": {
        overviewText: "Egypt has positioned waste management as a strategic pillar of its green economic transition under Egypt Vision 2030, generating approximately 100 million tons of total waste annually (including 22-28 million tons of municipal solid waste). Rather than viewing waste as a sanitation issue alone, the country integrates it into national industrial reform, energy diversification, and private-sector-led growth. Egypt's waste system is uniquely defined by the world-renowned Zabbaleen informal recycling community in Cairo, which processes 11,000 tons daily with an extraordinary 80% recovery rate—serving as the backbone of the nation's recycling supply chain. The country is undergoing ambitious transformation: recycling rates are climbing from 37% in 2024 toward a 60% target by 2027, while the groundbreaking Zero Carbon Green Planet (ZCGP) plant in Sharm El-Sheikh—set for 2027 completion—will process 400 tonnes of waste daily to produce high-value products including graphene and hydrogen. This shift from conventional waste-to-energy incineration to advanced material valorization positions Egypt as a regional leader in circular manufacturing. The National Solid Waste Management Programme (NSWMP) is formalizing informal workers, closing legacy dumpsites like Al-Salam, and expanding rural collection from 35% coverage through innovative financing mechanisms such as electricity-bill-linked waste fees.",
        snapshot: [
            { label: "Population", value: "110+ million" },
            { label: "Zabbaleen Daily Processing", value: "11,000 tons/day (80% recovery rate)" },
            { label: "Recycling Rate 2024", value: "37% (Target: 60% by 2027)" },
            { label: "Key Urban Hub", value: "Greater Cairo Region" },
            { label: "Development Focus", value: "Green economy & circular infrastructure" }
        ],
        wasteGeneration: `<p>Egypt generates approximately <strong>100 million tons</strong> of total waste annually, including municipal, agricultural, and industrial waste.</p>
        <ul>
            <li><strong>Municipal Solid Waste (MSW):</strong> 22–28 million tons/year</li>
            <li><strong>Urban Concentration:</strong> 40% in Greater Cairo</li>
        </ul>
        <p><strong>Waste Composition:</strong></p>
        <ul>
            <li>Organic waste: 50–60%</li>
            <li>Plastics: 10–15%</li>
            <li>Paper & cardboard: 10–25%</li>
        </ul>
        <p>Egypt is Africa's largest generator of e-waste, contributing over <strong>20% of the continent's electronic waste</strong>.</p>`,
        wasteCollection: `<p>Egypt's waste system is defined by a highly effective informal network, most notably the <strong>Zabbaleen community</strong> in Cairo.</p>
        <ul>
            <li>Collects up to <strong>60%</strong> of Cairo's waste</li>
            <li>Processes <strong>11,000 tons/day</strong> (2024-2026 data)</li>
            <li>Achieves <strong>80%</strong> recovery rates through manual sorting</li>
            <li>Forms the backbone of the national recycling supply chain</li>
        </ul>
        <p>Rural collection remains weak (as low as 35%), prompting government efforts to formally integrate informal workers through the National Solid Waste Management Programme (NSWMP). The <strong>Waste Management City</strong> initiative aims to modernize infrastructure while maintaining the Zabbaleen's critical role in the circular economy.</p>`,
        treatment: `<p>Egypt is transitioning away from open dumpsites toward modern infrastructure:</p>
        <ul>
            <li>Sanitary landfills and transfer stations established</li>
            <li>Legacy dumpsites closed (e.g., Al-Salam)</li>
            <li><strong>Waste-to-Energy (WtE) target:</strong> 1.5 million tons annually</li>
            <li><strong>Recycling Rate Progression:</strong> 37% in 2024, targeting <strong>60% by 2027</strong></li>
        </ul>
        <p><strong>Major Infrastructure Project (2024-2027):</strong> The <strong>Zero Carbon Green Planet (ZCGP) plant in Sharm El-Sheikh</strong> will process <strong>400 tonnes/day</strong> of non-recyclable waste, producing high-value products including graphene and hydrogen. This groundbreaking facility represents Egypt's transition to advanced waste valorization technologies.</p>
        <p>Industrial waste is addressed through programs like EPAP III, which supports cleaner production and emissions reduction.</p>`,
        policy: `<ul>
            <li><strong>Waste Management Regulation Law (Law No. 202 of 2020)</strong></li>
            <li>Polluter Pays Principle</li>
            <li>Extended Producer Responsibility (EPR) for plastics & electronics</li>
            <li>Single-Use Plastic Restrictions with green tax incentives</li>
        </ul>
        <p>This legal framework ended decades of fragmented regulation.</p>`,
        challenges: [
            { title: "Annual economic loss of ~0.2% of GDP from poor waste management", detail: "Inefficient waste collection, uncontrolled dumping, and missed recycling opportunities cost Egypt roughly 0.2% of GDP annually through environmental degradation, public health impacts, and lost material value that could otherwise fuel economic growth." },
            { title: "Egypt contributes 43% of plastic leakage into the Mediterranean", detail: "Inadequate coastal waste management infrastructure and poor collection coverage allow vast quantities of plastic waste to enter waterways and reach the Mediterranean Sea, making Egypt the single largest contributor of plastic pollution to the basin." },
            { title: "Health risks in informal e-waste recycling", detail: "Informal recyclers in areas like Manshiyat Naser process electronic waste using crude methods such as open burning and acid baths, releasing toxic heavy metals and fumes that cause severe respiratory, neurological, and reproductive health problems." }
        ],
        opportunities: `<p>Egypt's waste sector offers strong potential through:</p>
        <ul>
            <li>Industrial recycling expansion</li>
            <li>Waste-to-energy investments</li>
            <li>Formalization of informal recyclers</li>
            <li>Circular manufacturing value chains</li>
            <li><strong>Advanced Valorization Technologies:</strong> The ZCGP plant demonstrates Egypt's commitment to converting waste into high-value products (graphene, hydrogen) rather than simple incineration</li>
            <li><strong>Recycling Rate Target:</strong> Achieving 60% recycling by 2027 would position Egypt as a regional leader in material recovery</li>
        </ul>`,
        primarySources: [
            "Ministry of Environment, Egypt – Waste Management & Environmental Reports",
            "Law No. 202 of 2020 (Waste Management Regulation Law)",
            "World Bank – Egypt Solid Waste Management Program Documentation",
            "UNEP – Marine Plastic Pollution in the Mediterranean",
            "National Solid Waste Management Programme (NSWMP), Egypt",
            "International Telecommunication Union (ITU) – Global E-Waste Monitor",
            "EPAP III – Egypt Pollution Abatement Project"
        ],
        supportingInstitutions: [
            "Egyptian Environmental Affairs Agency (EEAA)",
            "European Bank for Reconstruction and Development (EBRD)"
        ]
    },
    "kenya": {
        overviewText: "Kenya is undergoing a radical shift toward a circular economy, driven by devolved governance, progressive legislation, and cutting-edge infrastructure investments. The country generates approximately 8 million tons of waste annually with a national collection rate of only 30%—a gap that has prompted ambitious transformation initiatives. Waste management is a county-level responsibility under Kenya's devolved governance structure (47 counties), supported by national oversight through the Sustainable Waste Management Act (2022), EPR Regulations (2024), and the 'Five R's' framework (Refuse, Reduce, Reuse, Repurpose, Recycle). Major 2025-2026 infrastructure breakthroughs position Kenya as East Africa's innovation leader: Konza Technopolis launched Africa's first pneumatic waste collection system with a $9 million investment featuring 15 kilometers of underground vacuum pipes, 50 intake points, and 40 tons/day capacity—eliminating traditional collection trucks entirely. Even more significantly, President William Ruto officially commissioned a 45 MW Waste-to-Energy plant at the notorious Dandora dumpsite on February 8, 2026, transforming East Africa's largest and most hazardous landfill into a clean energy generation hub. Combined with initiatives like HyaPak (converting invasive water hyacinth into biodegradable packaging) and textile take-back hubs addressing the 'mitumba crisis' (22.5 million kg of annual second-hand clothing imports), Kenya is demonstrating how technology, political will, and circular economy principles can revolutionize waste management.",
        snapshot: [
            { label: "Annual Waste Generation", value: "~8 million tons" },
            { label: "Daily Waste Output", value: "~5,000 tons" },
            { label: "Konza Smart City System", value: "40 tons/day capacity, 15km pneumatic pipes" },
            { label: "Governance Model", value: "Devolved (County Governments)" },
            { label: "National Vision", value: "Vision 2030 & Bottom-Up Economic Agenda" }
        ],
        wasteGeneration: `<ul>
            <li><strong>Urban waste (projected 2030):</strong> 5.5 million tons/year</li>
        </ul>
        <p><strong>Waste Composition:</strong></p>
        <ul>
            <li>Organic: 60%</li>
            <li>Plastics & metals</li>
            <li>E-waste (among East Africa's highest)</li>
            <li>Construction & demolition (C&D) waste</li>
        </ul>
        <p>Urban growth is the primary driver of rising waste volumes.</p>`,
        wasteCollection: `<ul>
            <li>National collection rate: <strong>~30%</strong></li>
            <li>Nairobi collection (2021): <strong>~77%</strong></li>
            <li>Recycling rate: <strong><10%</strong></li>
        </ul>
        <p>The <strong>Dandora dumpsite</strong>, East Africa's largest, remains unregulated and hazardous. However, major transformation is underway: a <strong>45 MW Waste-to-Energy plant</strong> was officially commissioned by President William Ruto on February 8, 2026, aiming to process Dandora's waste while generating clean electricity for Nairobi.</p>
        <p>The informal sector, largely women, plays a major role in plastic and metal recovery, often earning below US$2/day.</p>
        <p><strong>Konza Technopolis Smart City (Operational 2025):</strong> A <strong>$9 million pneumatic waste collection system</strong> featuring <strong>15km of underground pipes and 50 intake points</strong> with <strong>40 tons/day capacity</strong>, eliminating the need for traditional collection vehicles and reducing emissions.</p>`,
        treatment: `<p>Kenya is shifting from dumping to recovery-based systems:</p>
        <ul>
            <li>Material Recovery Facilities (MRFs) targeting <strong>95% waste recovery</strong></li>
            <li>Source segregation pilots</li>
            <li>C&D waste treatment strategy (2025–2030)</li>
            <li>Agricultural by-product reuse (bagasse, molasses)</li>
        </ul>`,
        policy: `<ul>
            <li>Sustainable Waste Management Act (2022)</li>
            <li>EPR Regulations (2024)</li>
            <li>Waste Management Regulations (2024)</li>
            <li>National Sanitation Management Policy (2024)</li>
        </ul>`,
        challenges: [
            { title: "Infrastructure deficits", detail: "Kenya's 47 counties lack sufficient collection vehicles, transfer stations, and engineered disposal facilities. Most counties rely on open dumpsites, and only a fraction of urban waste is collected through formal municipal systems." },
            { title: "Low public awareness", detail: "Many households and businesses have limited understanding of waste segregation, recycling, and responsible disposal practices, resulting in widespread mixed-waste dumping and low participation in source-separation programs." },
            { title: "Weak enforcement capacity", detail: "Despite progressive legislation like the Sustainable Waste Management Act (2022), county governments often lack the resources, technical expertise, and institutional capacity to monitor compliance and enforce regulations effectively." },
            { title: "Health risks near dumpsites", detail: "Communities living near sites like the former Dandora dumpsite face severe health hazards including respiratory illness, waterborne diseases, and exposure to toxic leachate that contaminates groundwater and soil." }
        ],
        opportunities: `<p>Kenya's circular economy transition presents opportunities in:</p>
        <ul>
            <li>Composting and biogas</li>
            <li>Plastic recovery systems</li>
            <li>Green jobs and women-led recycling enterprises</li>
            <li><strong>Smart City Infrastructure (2025-2026):</strong> Konza Technopolis demonstrates world-class pneumatic waste collection, positioning Kenya as a regional leader in smart urban systems</li>
            <li><strong>Waste-to-Energy at Scale:</strong> The 45 MW Dandora WtE plant commissioned in February 2026 represents a major shift from dumpsites to energy recovery, creating jobs while addressing Nairobi's longstanding waste crisis</li>
            <li><strong>Presidential Leadership:</strong> President Ruto's direct involvement signals high-level political commitment to waste transformation</li>
        </ul>`,
        primarySources: [
            "National Environment Management Authority (NEMA), Kenya",
            "Sustainable Waste Management Act (2022)",
            "Kenya National Bureau of Statistics (KNBS)",
            "World Bank – Kenya Urban Development & Waste Studies",
            "UNEP – East Africa Waste & Circular Economy Reports",
            "National Solid Waste Management Strategy (2024)",
            "National Construction Authority (NCA) – Construction Waste Strategy (2025–2030)"
        ],
        supportingInstitutions: [
            "County Governments of Nairobi, Mombasa, Kisumu",
            "Ministry of Environment, Climate Change & Forestry"
        ]
    },
    "rwanda": {
        overviewText: "Rwanda is widely regarded as Africa's model for waste prohibition and environmental discipline, driven by strong governance, public compliance, and ambitious circular economy targets that extend far beyond its pioneering 2008 plastic bag ban. With Kigali generating approximately 292,000 tons of waste annually (75% organic), Rwanda has developed comprehensive systems that other African nations study and replicate. The country's recent waste management achievements include the homegrown SHINE Model—a locally-developed, cost-efficient solid waste management framework created in 2024-2025 by GIZ in partnership with Rwanda's Ministry of Environment, successfully piloted in Bugesera, Rwamagana, and Muhanga districts. Rwanda operates Enviroserve Rwanda Green Park, Africa's second state-of-the-art e-waste dismantling facility, which has trained 70 young Rwandans and created 413 green jobs while providing services across Uganda, DRC, and Burundi. The country's innovative Plastic Waste Management Fund (established 2021) has collected nearly 1,500 tonnes from 24 drop-off points while creating 1,300 green jobs. Rwanda's streets feature plastic roads constructed from recycled waste, offering durable alternatives to traditional asphalt. The National Circular Economy Action Plan and Roadmap sets an ambitious vision: transforming Kigali into a zero-waste city by 2035 while achieving 100% Extended Producer Responsibility (EPR) compliance by 2030. With political will, community behavior change programs, and comprehensive e-waste management systems, Rwanda demonstrates how strong governance coupled with practical innovation can create world-class environmental outcomes.",
        snapshot: [
            { label: "Capital (Kigali) Waste Generation", value: "~292,000 tons/year" },
            { label: "Daily Waste (Kigali)", value: "~800 tons" },
            { label: "Per Capita Generation", value: "0.51–0.57 kg/day" },
            { label: "Environmental Authority", value: "Rwanda Environment Management Authority (REMA)" }
        ],
        wasteGeneration: `<ul>
            <li>Organic waste: 78%</li>
            <li>Paper & cardboard: 6.6%</li>
            <li>Plastics: 3.7% (post-ban impact)</li>
            <li>Growing stream: Industrial waste</li>
        </ul>
        <p>Plastic bans have fundamentally reshaped Rwanda's waste composition.</p>`,
        wasteCollection: `<ul>
            <li>Privatized, licensed collection system</li>
            <li>Waste transported to <strong>Nduba landfill</strong></li>
        </ul>
        <p>Nduba operates as an open dump pending upgrade to a Resource Recovery Center.</p>
        <p>Illegal dumping persists in low-income areas, especially during rainy seasons.</p>`,
        treatment: `<ul>
            <li>Integrated Solid Waste Management Strategy (2022)</li>
            <li>10-R Circular Economy Principles</li>
            <li>Urban recycling target: <strong>80%</strong></li>
            <li>Composting rate: <strong>35.5%</strong></li>
            <li>E-waste recycling target: <strong>50%</strong></li>
        </ul>
        <p>Waste-to-energy feasibility is under assessment, particularly for biogas in housing projects.</p>`,
        policy: `<ul>
            <li>Integrated Solid Waste Management Strategy (2022)</li>
            <li>10-R Circular Economy Principles</li>
            <li>Urban recycling target: 80%</li>
            <li>Composting rate: 35.5%</li>
            <li>E-waste recycling target: 50%</li>
        </ul>`,
        challenges: [
            { title: "Nduba landfill limitations", detail: "Kigali's primary Nduba landfill is nearing capacity and faces operational challenges including leachate management, limited methane capture, and encroachment by surrounding urban development, threatening the city's waste disposal continuity." },
            { title: "Illegal dumping", detail: "Despite Rwanda's strong governance culture, illegal waste dumping persists in peri-urban and rural areas where collection services are less frequent and enforcement resources are stretched thin, undermining public health and environmental gains." },
            { title: "Waste sector contributes ~12% of national GHG emissions", detail: "Organic waste decomposing in landfills produces significant methane emissions. With 75% of Kigali's waste being organic, the waste sector is a major contributor to Rwanda's greenhouse gas profile, complicating the country's climate commitments." }
        ],
        opportunities: `<p>Rwanda demonstrates how:</p>
        <ul>
            <li>Strong regulation</li>
            <li>Public compliance</li>
            <li>Clear bans can rapidly reshape national waste systems and attract green investment</li>
        </ul>`,
        primarySources: [
            "Rwanda Environment Management Authority (REMA)",
            "Integrated Solid Waste Management Strategy (2022)",
            "National Strategy for Transformation (NST2, 2024–2029)",
            "World Bank – Rwanda Urban & Environmental Performance Reports",
            "UNEP – Plastic Ban & Circular Economy Case Studies",
            "Kigali City Council – Waste Generation & Collection Data"
        ],
        supportingInstitutions: [
            "Rwanda Utilities Regulatory Authority (RURA)",
            "Ministry of Environment, Rwanda"
        ]
    },
    "south-africa": {
        overviewText: "South Africa has the most industrialized waste economy in Africa, generating approximately 54 million tons of waste annually, supported by advanced legislation including the National Environmental Management: Waste Act, Extended Producer Responsibility (EPR) frameworks, and comprehensive producer compliance schemes. The country boasts Africa's most sophisticated EPR systems—particularly for e-waste and polymers—with polymer recovery programs diverting over 430,000 tonnes of plastic from landfills annually. Yet despite these strengths, South Africa faces profound inequality: 37% of households (approximately 9.8 million people) lack access to refuse removal services, particularly in rural and informal settlements, revealing the stark divide between formal industrial capacity and grassroots service delivery. As a founding member of the Africa Circular Economy Alliance (ACEA) established in 2022 alongside the African Union, World Economic Forum, African Development Bank, and World Bank, South Africa holds continental leadership in shaping circular economy policy and investment frameworks. The recently released Draft National Waste Management Strategy (NWMS) 2026—now open for public comment—outlines next-generation targets addressing this service gap while strengthening waste diversion, circular economy integration, and equitable delivery. The country's 2025 National Determined Contributions (NDC) explicitly integrate informal waste pickers through 'pay-per-kg' incentive models and 'Just Transition' frameworks, formally recognizing their essential role. With smart waste monitoring using IoT technology reducing collection costs by 30%, waste-to-energy expansion, and regional policy leadership, South Africa exemplifies both the possibilities and persistent challenges of building inclusive, industrialized circular waste economies.",
        snapshot: [
            { label: "Population", value: "~60 million" },
            { label: "Annual Waste Generation", value: "~54 million tons" },
            { label: "Recycling Rate", value: "~10–12%" },
            { label: "Households Without Refuse Service", value: "37% (9.8 million people)" },
            { label: "Economic Status", value: "Upper-middle income" },
            { label: "Regional Leadership", value: "ACEA Founding Member (2022)" }
        ],
        wasteGeneration: `<ul>
            <li>Municipal solid waste: <strong>~34%</strong></li>
            <li>Industrial & mining waste: Major share</li>
            <li>Organic waste: <strong>~40%</strong></li>
            <li>Plastics, paper, metals: Well-developed recycling streams</li>
        </ul>`,
        wasteCollection: `<p>Formal municipal collection dominates urban areas, but deep inequalities persist.</p>
        <ul>
            <li><strong>37% of South African households</strong> (approximately <strong>9.8 million people</strong>) lack access to refuse removal services, revealing significant service delivery gaps particularly in rural and informal settlements</li>
            <li>Heavy reliance on landfills</li>
            <li>Advanced private recycling markets for paper, glass, metals</li>
            <li>Informal reclaimers remain critical to material recovery</li>
        </ul>`,
        treatment: `<ul>
            <li>Heavy reliance on landfills</li>
            <li>Advanced private recycling markets for paper, glass, metals</li>
            <li>Informal reclaimers remain critical to material recovery</li>
        </ul>`,
        policy: `<ul>
            <li>National Environmental Management: Waste Act</li>
            <li>Extended Producer Responsibility (EPR) Regulations</li>
            <li><strong>Draft National Waste Management Strategy (NWMS) 2026:</strong> Released for public comment, outlining next-generation targets for waste diversion, circular economy, and equitable service delivery</li>
            <li>Mandatory producer compliance schemes</li>
            <li><strong>Africa Circular Economy Alliance (ACEA) Founding Member (2022):</strong> South Africa co-leads regional circular economy initiatives alongside African Union, World Economic Forum, and World Bank</li>
        </ul>`,
        challenges: [
            { title: "Landfill dependence", detail: "Over 90% of South Africa's waste still ends up in landfills. Many municipal landfill sites are at or near capacity, with limited investment in alternative treatment technologies such as composting, anaerobic digestion, or material recovery." },
            { title: "Unequal service delivery", detail: "Approximately 37% of South African households (~9.8 million people) lack access to formal waste removal services, particularly in rural areas and informal settlements, creating significant environmental justice and public health disparities." },
            { title: "Rising hazardous & e-waste", detail: "Rapid industrialization and growing consumer electronics adoption are driving sharp increases in hazardous and electronic waste streams, outpacing the development of specialized treatment infrastructure and regulatory oversight." },
            { title: "Social exclusion of informal reclaimers", detail: "An estimated 60,000–90,000 informal waste pickers recover valuable recyclables yet remain largely excluded from formal waste management systems, EPR schemes, and social protection, despite their critical contribution to recycling rates." }
        ],
        opportunities: `<p>South Africa's strength lies in:</p>
        <ul>
            <li>Scalable recycling industries</li>
            <li>EPR-driven investment</li>
            <li>Waste-to-energy expansion</li>
            <li><strong>Regional Leadership:</strong> As a founding member of the Africa Circular Economy Alliance (ACEA, 2022), South Africa is positioned to shape continental policies and investments in circular economy infrastructure</li>
            <li><strong>Policy Evolution:</strong> The Draft NWMS 2026 aims to address the 37% service gap while strengthening waste diversion and circular economy targets</li>
            <li><strong>Industrial Capacity:</strong> Advanced recycling markets and producer responsibility systems provide a foundation for expanded circular value chains</li>
        </ul>`,
        primarySources: [
            "Department of Forestry, Fisheries and the Environment (DFFE), South Africa",
            "National Environmental Management: Waste Act",
            "National Waste Management Strategy (NWMS)",
            "South Africa Waste Information System (SAWIS)",
            "World Bank – South Africa Waste & Circular Economy Studies",
            "OECD – Extended Producer Responsibility (EPR) Reviews",
            "UNEP – Africa Circular Economy Alliance Reports"
        ],
        supportingInstitutions: [
            "Council for Scientific and Industrial Research (CSIR)",
            "Producer Responsibility Organisations (PROs)"
        ]
    }
};

// French country-specific data
const countryDataFr = {
    "nigeria": {
        overviewText: "Le Nigéria est la nation la plus peuplée d'Afrique (plus de 200 millions d'habitants) et l'une des économies à l'urbanisation la plus rapide du continent, générant environ 32 millions de tonnes métriques de déchets solides par an — un chiffre qui devrait atteindre 107 millions de tonnes d'ici 2050. Cette expansion démographique et urbaine rapide a placé le pays au centre du défi de la gestion des déchets en Afrique, notamment à Lagos, où 13 000 tonnes de déchets sont générées quotidiennement, dont 60 % restent non collectées. Le secteur informel des déchets gère 59,3 % de l'élimination nationale des déchets, employant des millions de travailleurs connus sous le nom de Baban Bola et Omo Gbonla, mais ces travailleurs essentiels restent largement non reconnus et non protégés. Les développements récents marquants incluent l'interdiction des plastiques à usage unique dans l'État de Lagos (1er juillet 2025), l'usine de valorisation énergétique Phoenix Edison d'un montant de 116 millions de dollars destinée à traiter 500 tonnes par jour et à créer 1 144 emplois, ainsi qu'une feuille de route nationale complète (2025-2040) élaborée avec la Banque mondiale. Alors que les modes de consommation évoluent et que les villes s'étendent au-delà des infrastructures existantes, la gestion des déchets est devenue un enjeu crucial reliant protection de l'environnement, santé publique et développement économique — tout en présentant des opportunités significatives pour la croissance de l'économie circulaire et la création d'emplois.",
        snapshot: [
            { label: "Population", value: "Plus de 200 millions" },
            { label: "Population Urbaine Projetée (2040)", value: "199 millions" },
            { label: "Production Quotidienne de Déchets à Lagos", value: "13 000 tonnes/jour (60 % non collectées)" },
            { label: "Taux de Collecte National", value: "20-30 % (Secteur informel : 59,3 %)" },
            { label: "Déchets Projetés d'ici 2050", value: "107 millions de tonnes/an" },
            { label: "Indice de Performance Environnementale (2024)", value: "Classé 140e (contre 162e en 2022)" }
        ],
        wasteGeneration: `<p>Le Nigéria génère environ <strong>32 millions de tonnes métriques</strong> de déchets solides par an, les zones urbaines contribuant pour environ <strong>27,3 millions de tonnes</strong> par an. Ce chiffre devrait atteindre <strong>107 millions de tonnes d'ici 2050</strong>.</p>
        <p><strong>Production par habitant :</strong> 0,51 kg/jour</p>
        <p><strong>Données spécifiques à Lagos (2024-2026) :</strong></p>
        <ul>
            <li><strong>13 000 tonnes/jour</strong> générées (5,5 millions de tonnes par an)</li>
            <li><strong>60 % restent non collectées</strong></li>
            <li>Seulement <strong>13 % recyclées</strong></li>
            <li>Lagos a contribué à <strong>870 000 tonnes</strong> de déchets plastiques mondiaux en 2024</li>
            <li><strong>34 kg de plastique/personne/an</strong> s'infiltrant dans les systèmes hydriques</li>
        </ul>
        <p><strong>Flux de déchets dominants :</strong></p>
        <ul>
            <li>Déchets organiques</li>
            <li>Plastiques (1,5 million de tonnes/an au niveau national, taux de recyclage inférieur à 10 %)</li>
            <li>Textiles</li>
            <li>Déchets électroniques</li>
        </ul>
        <p>Les déchets plastiques sont une préoccupation majeure, faisant du plastique une priorité environnementale nationale reconnue par l'interdiction du plastique de Lagos en 2025.</p>`,
        wasteCollection: `<p>L'efficacité de la collecte des déchets reste faible, avec une moyenne de <strong>20 à 30 % au niveau national</strong> et atteignant <strong>41 % dans les zones urbaines optimisées</strong>. Cet écart a conduit à l'émergence d'un vaste écosystème informel de déchets qui gère <strong>59,3 % de l'élimination nationale des déchets</strong>.</p>
        <p>Les ramasseurs informels de déchets, connus localement sous les noms de <strong>Baban Bola</strong> (Nord) et <strong>Omo Gbonla</strong> (Sud-Ouest), sont l'épine dorsale des activités de recyclage, particulièrement à Lagos et Abuja. Ces travailleurs collectent, trient et vendent des matériaux recyclables, contribuant de manière significative à la récupération de valeur et aux connaissances du secteur. Des études récentes (2024-2025) révèlent qu'environ <strong>40 millions de micro, petites et moyennes entreprises (MPME)</strong> opèrent au Nigéria, dont 89,4 % dans l'économie informelle.</p>
        <p>Cependant, ils font face à l'exclusion sociale, aux risques de santé et à une reconnaissance juridique limitée, soulignant le besoin de politiques de formalisation structurées telles que celles pilotées par des partenariats comme <strong>Taka Taka</strong>, qui vise à atteindre un taux de recyclage de 90 % tout en créant des emplois pour les femmes et les jeunes dans les communautés défavorisées.</p>`,
        treatment: `<p>Le Nigéria dépend fortement des décharges à ciel ouvert et de l'incinération non contrôlée, représentant <strong>80 à 90 %</strong> des pratiques d'élimination des déchets.</p>
        <p><strong>Les impacts environnementaux et sanitaires comprennent :</strong></p>
        <ul>
            <li>Contamination des eaux souterraines par les lixiviats</li>
            <li>Augmentation de l'incidence des maladies hydriques (choléra, typhoïde)</li>
            <li>Pollution atmosphérique due aux émissions toxiques et au carbone noir</li>
            <li>Fuite de plastique marin affectant les écosystèmes côtiers</li>
            <li>Les déchets plastiques des villes côtières contribuent significativement à la pollution marine régionale et à l'accumulation de microplastiques dans les chaînes alimentaires</li>
        </ul>`,
        policy: `<p>Le Nigéria a accéléré les réformes politiques ces dernières années pour relever les défis des déchets et du climat.</p>
        <p><strong>Les instruments clés comprennent :</strong></p>
        <ul>
            <li><strong>Loi sur le Changement Climatique (2021) :</strong> Objectif de zéro émission nette d'ici 2060</li>
            <li><strong>Politique Nationale sur la Gestion des Déchets Plastiques (NPPWM) :</strong> Cadre d'économie circulaire</li>
            <li><strong>Directives Nationales de Mise en Œuvre pour les Déchets Plastiques (2024) :</strong> Élaborées avec l'ONUDI et le Japon</li>
            <li><strong>Interdiction des Plastiques à Usage Unique de l'État de Lagos (1er juillet 2025) :</strong> Interdit le polystyrène, les pailles, les couverts et les assiettes. Les contrevenants risquent la fermeture de leur entreprise.</li>
            <li><strong>Politique de Gaz à partir de Déchets (2022) :</strong> Captage du méthane et initiatives de valorisation énergétique</li>
            <li><strong>Loi NESREA (2007) :</strong> Principale agence d'application des normes environnementales</li>
        </ul>
        <p><strong>Feuille de Route Nationale (2025-2040) en collaboration avec la Banque mondiale :</strong></p>
        <ul>
            <li><strong>2025 Gains Rapides :</strong> Lancement du Fonds National d'Innovation du Secteur des Déchets Solides, renforcement du tri à la source</li>
            <li><strong>2027 Court terme :</strong> Amélioration des infrastructures de collecte et création de Centres de Récupération de Matériaux (CRM)</li>
            <li><strong>2030 Moyen terme :</strong> Installations spécialisées de déchets dangereux dans les villes clés</li>
            <li><strong>2040 Long terme :</strong> Système de gestion intégrée et durable des déchets</li>
        </ul>
        <p>Ces politiques visent à réduire les dommages environnementaux tout en libérant la valeur économique des flux de déchets. La prise de décision basée sur les données a renforcé la volonté politique d'application.</p>`,
        challenges: [
            { title: "Faible capacité d'application", detail: "Les agences de réglementation comme la NESREA manquent de financement, de personnel et de soutien politique adéquats pour appliquer de manière cohérente les lois existantes sur la gestion des déchets dans tous les États, entraînant un non-respect généralisé et des décharges illégales." },
            { title: "Infrastructure limitée de traitement des déchets", detail: "Le Nigéria dispose de très peu de centres de récupération de matériaux, de stations de transfert ou de décharges sanitaires aménagées. La plupart des déchets finissent dans des décharges à ciel ouvert, avec seulement 20 à 30 % des déchets collectés formellement." },
            { title: "Corruption et contraintes de ressources", detail: "La mauvaise allocation des fonds publics, les irrégularités dans les marchés publics et le sous-investissement dans le secteur des déchets ont compromis le développement de systèmes modernes de collecte, de traitement et d'élimination." },
            { title: "Faibles taux de recyclage", detail: "Le recyclage formel ne capture qu'une part négligeable des 32 millions de tonnes de déchets annuels du Nigéria. L'infrastructure de tri limitée, la faible sensibilisation du public et les liens de marché faibles maintiennent les taux de récupération extrêmement bas." },
            { title: "Risques de santé et de sécurité pour les travailleurs informels", detail: "Des millions de travailleurs informels des déchets manipulent des matières dangereuses sans équipement de protection, formation ou protections sociales, les exposant à des maladies respiratoires, des blessures et une contamination toxique." },
            { title: "Écart de mise en œuvre entre politique et pratique", detail: "Malgré des politiques bien conçues, la mise en œuvre reste le plus grand obstacle du Nigéria. La gouvernance fragmentée entre les niveaux fédéral, étatique et local empêche une action coordonnée et la responsabilisation." }
        ],
        opportunities: `<p>Le secteur des déchets du Nigéria présente un fort potentiel de transformation grâce à :</p>
        <ul>
            <li>L'intégration formelle des travailleurs informels des déchets</li>
            <li>L'expansion des régimes de Responsabilité Élargie des Producteurs (REP)</li>
            <li>L'investissement dans les technologies de gaz à partir de déchets et de recyclage</li>
            <li>La création d'emplois par les industries de l'économie circulaire</li>
            <li><strong>Investissement Majeur en Infrastructure (2025-2027) :</strong> Phoenix Edison Ltd. construit une <strong>usine de valorisation énergétique de 116 millions de dollars</strong> qui traitera <strong>500 tonnes de déchets par jour</strong>, générera <strong>12 MW d'électricité</strong> et créera <strong>1 144 emplois</strong>.</li>
        </ul>
        <p>Avec un soutien institutionnel adéquat et la participation du secteur privé, les déchets pourraient évoluer d'un fardeau environnemental vers un moteur de croissance économique inclusive.</p>`,
        primarySources: [
            "Banque Mondiale – What a Waste 2.0 : Un Aperçu Mondial de la Gestion des Déchets Solides",
            "Bureau National des Statistiques du Nigéria (NBS) – Données Environnementales et d'Urbanisation",
            "Ministère Fédéral de l'Environnement (Nigéria) – Politiques Nationales sur les Déchets et le Plastique",
            "Programme des Nations Unies pour l'Environnement (PNUE) – Perspectives Africaines des Déchets",
            "Indice de Performance Environnementale (IPE), Université Yale (2022, 2024)",
            "ONUDI et Gouvernement du Japon – Directives Nationales de Mise en Œuvre pour la Gestion des Déchets Plastiques (2024)",
            "Loi sur le Changement Climatique du Nigéria (2021)"
        ],
        supportingInstitutions: [
            "Autorité de Gestion des Déchets de Lagos (LAWMA)",
            "Conseil de Protection de l'Environnement d'Abuja (AEPB)"
        ]
    },
    "egypt": {
        overviewText: "L'Égypte a positionné la gestion des déchets comme un pilier stratégique de sa transition économique verte dans le cadre de la Vision Égypte 2030, générant environ 100 millions de tonnes de déchets totaux par an (dont 22-28 millions de tonnes de déchets solides municipaux). Plutôt que de considérer les déchets comme un simple enjeu sanitaire, le pays les intègre dans la réforme industrielle nationale, la diversification énergétique et la croissance menée par le secteur privé. Le système de déchets de l'Égypte est uniquement défini par la communauté informelle de recyclage Zabbaleen, mondialement reconnue, au Caire, qui traite 11 000 tonnes par jour avec un taux de récupération extraordinaire de 80 % — servant de colonne vertébrale de la chaîne d'approvisionnement nationale en recyclage. Le pays connaît une transformation ambitieuse : les taux de recyclage passent de 37 % en 2024 vers un objectif de 60 % d'ici 2027, tandis que l'usine révolutionnaire Zero Carbon Green Planet (ZCGP) à Charm el-Cheikh — dont l'achèvement est prévu pour 2027 — traitera 400 tonnes de déchets par jour pour produire des produits à haute valeur ajoutée, notamment du graphène et de l'hydrogène. Ce passage de l'incinération conventionnelle à la valorisation avancée des matériaux positionne l'Égypte comme un leader régional dans la fabrication circulaire. Le Programme National de Gestion des Déchets Solides (NSWMP) formalise les travailleurs informels, ferme les décharges héritées comme Al-Salam, et étend la collecte rurale au-delà de la couverture de 35 % grâce à des mécanismes de financement innovants tels que les frais de gestion des déchets liés aux factures d'électricité.",
        snapshot: [
            { label: "Population", value: "Plus de 110 millions" },
            { label: "Traitement Quotidien des Zabbaleen", value: "11 000 tonnes/jour (taux de récupération de 80 %)" },
            { label: "Taux de Recyclage 2024", value: "37 % (Objectif : 60 % d'ici 2027)" },
            { label: "Principal Pôle Urbain", value: "Région du Grand Caire" },
            { label: "Axe de Développement", value: "Économie verte et infrastructure circulaire" }
        ],
        wasteGeneration: `<p>L'Égypte génère environ <strong>100 millions de tonnes</strong> de déchets totaux par an, incluant les déchets municipaux, agricoles et industriels.</p>
        <ul>
            <li><strong>Déchets Solides Municipaux (DSM) :</strong> 22-28 millions de tonnes/an</li>
            <li><strong>Concentration Urbaine :</strong> 40 % dans le Grand Caire</li>
        </ul>
        <p><strong>Composition des Déchets :</strong></p>
        <ul>
            <li>Déchets organiques : 50-60 %</li>
            <li>Plastiques : 10-15 %</li>
            <li>Papier et carton : 10-25 %</li>
        </ul>
        <p>L'Égypte est le plus grand générateur de déchets électroniques en Afrique, contribuant à plus de <strong>20 % des déchets électroniques du continent</strong>.</p>`,
        wasteCollection: `<p>Le système de déchets de l'Égypte est défini par un réseau informel très efficace, notamment la <strong>communauté Zabbaleen</strong> au Caire.</p>
        <ul>
            <li>Collecte jusqu'à <strong>60 %</strong> des déchets du Caire</li>
            <li>Traite <strong>11 000 tonnes/jour</strong> (données 2024-2026)</li>
            <li>Atteint des taux de récupération de <strong>80 %</strong> grâce au tri manuel</li>
            <li>Constitue la colonne vertébrale de la chaîne d'approvisionnement nationale en recyclage</li>
        </ul>
        <p>La collecte rurale reste faible (aussi basse que 35 %), incitant le gouvernement à intégrer formellement les travailleurs informels par le Programme National de Gestion des Déchets Solides (NSWMP). L'initiative <strong>Waste Management City</strong> vise à moderniser les infrastructures tout en maintenant le rôle crucial des Zabbaleen dans l'économie circulaire.</p>`,
        treatment: `<p>L'Égypte effectue une transition depuis les décharges à ciel ouvert vers des infrastructures modernes :</p>
        <ul>
            <li>Décharges sanitaires et stations de transfert établies</li>
            <li>Fermeture des décharges héritées (ex. : Al-Salam)</li>
            <li><strong>Objectif de Valorisation Énergétique :</strong> 1,5 million de tonnes par an</li>
            <li><strong>Progression du Taux de Recyclage :</strong> 37 % en 2024, objectif de <strong>60 % d'ici 2027</strong></li>
        </ul>
        <p><strong>Projet d'Infrastructure Majeur (2024-2027) :</strong> L'<strong>usine Zero Carbon Green Planet (ZCGP) à Charm el-Cheikh</strong> traitera <strong>400 tonnes/jour</strong> de déchets non recyclables, produisant des produits à haute valeur ajoutée, notamment du graphène et de l'hydrogène.</p>
        <p>Les déchets industriels sont traités par des programmes comme EPAP III, qui soutient la production plus propre et la réduction des émissions.</p>`,
        policy: `<ul>
            <li><strong>Loi de Réglementation de la Gestion des Déchets (Loi n° 202 de 2020)</strong></li>
            <li>Principe du Pollueur-Payeur</li>
            <li>Responsabilité Élargie des Producteurs (REP) pour les plastiques et l'électronique</li>
            <li>Restrictions sur les Plastiques à Usage Unique avec des incitations fiscales vertes</li>
        </ul>
        <p>Ce cadre juridique a mis fin à des décennies de réglementation fragmentée.</p>`,
        challenges: [
            { title: "Perte économique annuelle d'environ 0,2 % du PIB due à une mauvaise gestion des déchets", detail: "La collecte inefficace des déchets, les décharges incontrôlées et les opportunités de recyclage manquées coûtent à l'Égypte environ 0,2 % du PIB annuellement par la dégradation environnementale, les impacts sur la santé publique et la perte de valeur matérielle." },
            { title: "L'Égypte contribue à 43 % des fuites de plastique dans la Méditerranée", detail: "L'infrastructure inadéquate de gestion des déchets côtiers et la faible couverture de collecte permettent à de grandes quantités de plastique d'atteindre la mer Méditerranée, faisant de l'Égypte le plus grand contributeur de pollution plastique dans le bassin." },
            { title: "Risques sanitaires dans le recyclage informel des déchets électroniques", detail: "Les recycleurs informels traitent les déchets électroniques par des méthodes rudimentaires comme le brûlage à ciel ouvert et les bains d'acide, libérant des métaux lourds toxiques causant de graves problèmes de santé respiratoire, neurologique et reproductive." }
        ],
        opportunities: `<p>Le secteur des déchets de l'Égypte offre un fort potentiel grâce à :</p>
        <ul>
            <li>L'expansion du recyclage industriel</li>
            <li>Les investissements dans la valorisation énergétique</li>
            <li>La formalisation des recycleurs informels</li>
            <li>Les chaînes de valeur de fabrication circulaire</li>
            <li><strong>Technologies Avancées de Valorisation :</strong> L'usine ZCGP démontre l'engagement de l'Égypte à convertir les déchets en produits à haute valeur (graphène, hydrogène)</li>
            <li><strong>Objectif de Taux de Recyclage :</strong> Atteindre 60 % de recyclage d'ici 2027 positionnerait l'Égypte comme leader régional en récupération de matériaux</li>
        </ul>`,
        primarySources: [
            "Ministère de l'Environnement, Égypte – Rapports sur la Gestion des Déchets et l'Environnement",
            "Loi n° 202 de 2020 (Loi de Réglementation de la Gestion des Déchets)",
            "Banque Mondiale – Documentation du Programme de Gestion des Déchets Solides en Égypte",
            "PNUE – Pollution Plastique Marine en Méditerranée",
            "Programme National de Gestion des Déchets Solides (NSWMP), Égypte",
            "Union Internationale des Télécommunications (UIT) – Moniteur Mondial des Déchets Électroniques",
            "EPAP III – Projet de Réduction de la Pollution en Égypte"
        ],
        supportingInstitutions: [
            "Agence Égyptienne des Affaires Environnementales (EEAA)",
            "Banque Européenne pour la Reconstruction et le Développement (BERD)"
        ]
    },
    "kenya": {
        overviewText: "Le Kenya connaît un virage radical vers une économie circulaire, porté par une gouvernance décentralisée, une législation progressiste et des investissements d'infrastructure de pointe. Le pays génère environ 8 millions de tonnes de déchets par an avec un taux de collecte national de seulement 30 % — un écart qui a suscité des initiatives de transformation ambitieuses. La gestion des déchets relève de la responsabilité des comtés dans le cadre de la structure de gouvernance décentralisée du Kenya (47 comtés), soutenue par la supervision nationale à travers la Loi sur la Gestion Durable des Déchets (2022), les Règlements REP (2024) et le cadre des « Cinq R » (Refuser, Réduire, Réutiliser, Réaffecter, Recycler). Des avancées majeures en infrastructure en 2025-2026 positionnent le Kenya comme leader de l'innovation en Afrique de l'Est : Konza Technopolis a lancé le premier système pneumatique de collecte des déchets en Afrique avec un investissement de 9 millions de dollars, comprenant 15 kilomètres de conduites souterraines à vide, 50 points d'entrée et une capacité de 40 tonnes/jour. Le Président William Ruto a officiellement inauguré une usine de valorisation énergétique de 45 MW sur le site de la décharge de Dandora le 8 février 2026, transformant la plus grande et la plus dangereuse décharge d'Afrique de l'Est en un centre de production d'énergie propre.",
        snapshot: [
            { label: "Production Annuelle de Déchets", value: "~8 millions de tonnes" },
            { label: "Production Quotidienne de Déchets", value: "~5 000 tonnes" },
            { label: "Système de Ville Intelligente de Konza", value: "Capacité de 40 tonnes/jour, 15 km de conduites pneumatiques" },
            { label: "Modèle de Gouvernance", value: "Décentralisé (Gouvernements de Comté)" },
            { label: "Vision Nationale", value: "Vision 2030 et Programme Économique Ascendant" }
        ],
        wasteGeneration: `<ul>
            <li><strong>Déchets urbains (projetés 2030) :</strong> 5,5 millions de tonnes/an</li>
        </ul>
        <p><strong>Composition des Déchets :</strong></p>
        <ul>
            <li>Organique : 60 %</li>
            <li>Plastiques et métaux</li>
            <li>Déchets électroniques (parmi les plus élevés en Afrique de l'Est)</li>
            <li>Déchets de construction et de démolition (C&D)</li>
        </ul>
        <p>La croissance urbaine est le principal moteur de l'augmentation des volumes de déchets.</p>`,
        wasteCollection: `<ul>
            <li>Taux de collecte national : <strong>~30 %</strong></li>
            <li>Collecte à Nairobi (2021) : <strong>~77 %</strong></li>
            <li>Taux de recyclage : <strong>inférieur à 10 %</strong></li>
        </ul>
        <p>La <strong>décharge de Dandora</strong>, la plus grande d'Afrique de l'Est, reste non réglementée et dangereuse. Cependant, une transformation majeure est en cours : une <strong>usine de valorisation énergétique de 45 MW</strong> a été officiellement inaugurée par le Président William Ruto le 8 février 2026.</p>
        <p>Le secteur informel, composé principalement de femmes, joue un rôle majeur dans la récupération du plastique et du métal, gagnant souvent moins de 2 dollars US/jour.</p>
        <p><strong>Ville Intelligente de Konza Technopolis (Opérationnel 2025) :</strong> Un <strong>système pneumatique de collecte des déchets de 9 millions de dollars</strong> comprenant <strong>15 km de conduites souterraines et 50 points d'entrée</strong> avec une <strong>capacité de 40 tonnes/jour</strong>, éliminant le besoin de véhicules de collecte traditionnels.</p>`,
        treatment: `<p>Le Kenya passe de la mise en décharge à des systèmes de récupération :</p>
        <ul>
            <li>Centres de Récupération de Matériaux (CRM) visant une <strong>récupération de 95 % des déchets</strong></li>
            <li>Projets pilotes de tri à la source</li>
            <li>Stratégie de traitement des déchets de C&D (2025-2030)</li>
            <li>Réutilisation des sous-produits agricoles (bagasse, mélasse)</li>
        </ul>`,
        policy: `<ul>
            <li>Loi sur la Gestion Durable des Déchets (2022)</li>
            <li>Règlements REP (2024)</li>
            <li>Règlements sur la Gestion des Déchets (2024)</li>
            <li>Politique Nationale de Gestion de l'Assainissement (2024)</li>
        </ul>`,
        challenges: [
            { title: "Déficits d'infrastructure", detail: "Les 47 comtés du Kenya manquent de véhicules de collecte, de stations de transfert et d'installations d'élimination suffisants. La plupart des comtés dépendent de décharges à ciel ouvert, et seule une fraction des déchets urbains est collectée par les systèmes municipaux formels." },
            { title: "Faible sensibilisation du public", detail: "De nombreux ménages et entreprises ont une compréhension limitée de la ségrégation des déchets, du recyclage et des pratiques d'élimination responsable, entraînant un déversement généralisé de déchets mélangés et une faible participation aux programmes de tri à la source." },
            { title: "Faible capacité d'application", detail: "Malgré une législation progressiste comme la Loi sur la Gestion Durable des Déchets (2022), les gouvernements de comté manquent souvent de ressources, d'expertise technique et de capacité institutionnelle pour surveiller la conformité et appliquer efficacement les réglementations." },
            { title: "Risques sanitaires à proximité des décharges", detail: "Les communautés vivant près de sites comme l'ancienne décharge de Dandora font face à de graves risques sanitaires, notamment des maladies respiratoires, des maladies hydriques et une exposition au lixiviat toxique contaminant les eaux souterraines et le sol." }
        ],
        opportunities: `<p>La transition vers l'économie circulaire au Kenya présente des opportunités dans :</p>
        <ul>
            <li>Le compostage et le biogaz</li>
            <li>Les systèmes de récupération du plastique</li>
            <li>Les emplois verts et les entreprises de recyclage dirigées par des femmes</li>
            <li><strong>Infrastructure de Ville Intelligente (2025-2026) :</strong> Konza Technopolis démontre une collecte pneumatique des déchets de classe mondiale</li>
            <li><strong>Valorisation Énergétique à Grande Échelle :</strong> L'usine de 45 MW de Dandora inaugurée en février 2026 représente un changement majeur des décharges vers la récupération d'énergie</li>
            <li><strong>Leadership Présidentiel :</strong> L'implication directe du Président Ruto signale un engagement politique de haut niveau</li>
        </ul>`,
        primarySources: [
            "Autorité Nationale de Gestion de l'Environnement (NEMA), Kenya",
            "Loi sur la Gestion Durable des Déchets (2022)",
            "Bureau National des Statistiques du Kenya (KNBS)",
            "Banque Mondiale – Études sur le Développement Urbain et les Déchets au Kenya",
            "PNUE – Rapports sur les Déchets et l'Économie Circulaire en Afrique de l'Est",
            "Stratégie Nationale de Gestion des Déchets Solides (2024)",
            "Autorité Nationale de la Construction (NCA) – Stratégie des Déchets de Construction (2025-2030)"
        ],
        supportingInstitutions: [
            "Gouvernements de Comté de Nairobi, Mombasa, Kisumu",
            "Ministère de l'Environnement, du Changement Climatique et de la Foresterie"
        ]
    },
    "rwanda": {
        overviewText: "Le Rwanda est largement considéré comme le modèle africain en matière d'interdiction des déchets et de discipline environnementale, porté par une gouvernance forte, la conformité publique et des objectifs ambitieux d'économie circulaire qui vont bien au-delà de son interdiction pionnière des sacs plastiques de 2008. Avec Kigali générant environ 292 000 tonnes de déchets par an (75 % organiques), le Rwanda a développé des systèmes complets que d'autres nations africaines étudient et reproduisent. Les réalisations récentes du pays en matière de gestion des déchets incluent le Modèle SHINE local — un cadre de gestion des déchets solides développé localement, rentable, créé en 2024-2025 par la GIZ en partenariat avec le Ministère de l'Environnement du Rwanda, testé avec succès dans les districts de Bugesera, Rwamagana et Muhanga. Le Rwanda exploite Enviroserve Rwanda Green Park, la deuxième installation de démantèlement de déchets électroniques de pointe en Afrique, qui a formé 70 jeunes Rwandais et créé 413 emplois verts. Le Fonds de Gestion des Déchets Plastiques (créé en 2021) a collecté près de 1 500 tonnes provenant de 24 points de dépôt tout en créant 1 300 emplois verts.",
        snapshot: [
            { label: "Production de Déchets de la Capitale (Kigali)", value: "~292 000 tonnes/an" },
            { label: "Déchets Quotidiens (Kigali)", value: "~800 tonnes" },
            { label: "Production par Habitant", value: "0,51-0,57 kg/jour" },
            { label: "Autorité Environnementale", value: "Autorité de Gestion de l'Environnement du Rwanda (REMA)" }
        ],
        wasteGeneration: `<ul>
            <li>Déchets organiques : 78 %</li>
            <li>Papier et carton : 6,6 %</li>
            <li>Plastiques : 3,7 % (impact post-interdiction)</li>
            <li>Flux croissant : Déchets industriels</li>
        </ul>
        <p>Les interdictions de plastique ont fondamentalement remodelé la composition des déchets du Rwanda.</p>`,
        wasteCollection: `<ul>
            <li>Système de collecte privatisé et agréé</li>
            <li>Déchets transportés vers la <strong>décharge de Nduba</strong></li>
        </ul>
        <p>Nduba fonctionne comme une décharge à ciel ouvert en attendant sa mise à niveau vers un Centre de Récupération des Ressources.</p>
        <p>Le déversement illégal persiste dans les zones à faibles revenus, surtout pendant les saisons des pluies.</p>`,
        treatment: `<ul>
            <li>Stratégie Intégrée de Gestion des Déchets Solides (2022)</li>
            <li>Principes d'Économie Circulaire des 10-R</li>
            <li>Objectif de recyclage urbain : <strong>80 %</strong></li>
            <li>Taux de compostage : <strong>35,5 %</strong></li>
            <li>Objectif de recyclage des déchets électroniques : <strong>50 %</strong></li>
        </ul>
        <p>La faisabilité de la valorisation énergétique est en cours d'évaluation, en particulier pour le biogaz dans les projets de logement.</p>`,
        policy: `<ul>
            <li>Stratégie Intégrée de Gestion des Déchets Solides (2022)</li>
            <li>Principes d'Économie Circulaire des 10-R</li>
            <li>Objectif de recyclage urbain : 80 %</li>
            <li>Taux de compostage : 35,5 %</li>
            <li>Objectif de recyclage des déchets électroniques : 50 %</li>
        </ul>`,
        challenges: [
            { title: "Limitations de la décharge de Nduba", detail: "La principale décharge de Nduba à Kigali approche de sa capacité maximale et fait face à des défis opérationnels incluant la gestion du lixiviat, la capture limitée du méthane et l'empiétement du développement urbain environnant." },
            { title: "Déversement illégal", detail: "Malgré la culture de gouvernance forte du Rwanda, le déversement illégal de déchets persiste dans les zones périurbaines et rurales où les services de collecte sont moins fréquents et les ressources d'application sont limitées." },
            { title: "Le secteur des déchets contribue à environ 12 % des émissions nationales de GES", detail: "Les déchets organiques se décomposant dans les décharges produisent des émissions significatives de méthane. Avec 75 % des déchets de Kigali étant organiques, le secteur des déchets est un contributeur majeur au profil de gaz à effet de serre du Rwanda." }
        ],
        opportunities: `<p>Le Rwanda démontre comment :</p>
        <ul>
            <li>Une réglementation forte</li>
            <li>La conformité publique</li>
            <li>Des interdictions claires peuvent rapidement remodeler les systèmes nationaux de déchets et attirer des investissements verts</li>
        </ul>`,
        primarySources: [
            "Autorité de Gestion de l'Environnement du Rwanda (REMA)",
            "Stratégie Intégrée de Gestion des Déchets Solides (2022)",
            "Stratégie Nationale de Transformation (NST2, 2024-2029)",
            "Banque Mondiale – Rapports sur la Performance Urbaine et Environnementale du Rwanda",
            "PNUE – Études de Cas sur l'Interdiction du Plastique et l'Économie Circulaire",
            "Conseil Municipal de Kigali – Données sur la Production et la Collecte des Déchets"
        ],
        supportingInstitutions: [
            "Autorité de Régulation des Services Publics du Rwanda (RURA)",
            "Ministère de l'Environnement, Rwanda"
        ]
    },
    "south-africa": {
        overviewText: "L'Afrique du Sud possède l'économie des déchets la plus industrialisée d'Afrique, générant environ 54 millions de tonnes de déchets par an, soutenue par une législation avancée comprenant la Loi Nationale sur la Gestion de l'Environnement : Déchets, les cadres de Responsabilité Élargie des Producteurs (REP) et des régimes complets de conformité des producteurs. Le pays dispose des systèmes REP les plus sophistiqués d'Afrique — en particulier pour les déchets électroniques et les polymères — avec des programmes de récupération de polymères détournant plus de 430 000 tonnes de plastique des décharges chaque année. Pourtant, malgré ces atouts, l'Afrique du Sud fait face à de profondes inégalités : 37 % des ménages (environ 9,8 millions de personnes) n'ont pas accès à des services d'enlèvement des ordures, en particulier dans les zones rurales et les établissements informels. En tant que membre fondateur de l'Alliance Africaine pour l'Économie Circulaire (ACEA) créée en 2022 aux côtés de l'Union Africaine, du Forum Économique Mondial, de la Banque Africaine de Développement et de la Banque Mondiale, l'Afrique du Sud détient un leadership continental dans l'élaboration des politiques et des cadres d'investissement de l'économie circulaire.",
        snapshot: [
            { label: "Population", value: "~60 millions" },
            { label: "Production Annuelle de Déchets", value: "~54 millions de tonnes" },
            { label: "Taux de Recyclage", value: "~10-12 %" },
            { label: "Ménages Sans Service d'Ordures", value: "37 % (9,8 millions de personnes)" },
            { label: "Statut Économique", value: "Revenu intermédiaire supérieur" },
            { label: "Leadership Régional", value: "Membre Fondateur de l'ACEA (2022)" }
        ],
        wasteGeneration: `<ul>
            <li>Déchets solides municipaux : <strong>~34 %</strong></li>
            <li>Déchets industriels et miniers : Part majeure</li>
            <li>Déchets organiques : <strong>~40 %</strong></li>
            <li>Plastiques, papier, métaux : Filières de recyclage bien développées</li>
        </ul>`,
        wasteCollection: `<p>La collecte municipale formelle domine les zones urbaines, mais de profondes inégalités persistent.</p>
        <ul>
            <li><strong>37 % des ménages sud-africains</strong> (environ <strong>9,8 millions de personnes</strong>) n'ont pas accès à des services d'enlèvement des ordures, révélant des écarts significatifs dans la prestation de services, en particulier dans les zones rurales et les établissements informels</li>
            <li>Forte dépendance aux décharges</li>
            <li>Marchés privés de recyclage avancés pour le papier, le verre, les métaux</li>
            <li>Les récupérateurs informels restent essentiels à la récupération des matériaux</li>
        </ul>`,
        treatment: `<ul>
            <li>Forte dépendance aux décharges</li>
            <li>Marchés privés de recyclage avancés pour le papier, le verre, les métaux</li>
            <li>Les récupérateurs informels restent essentiels à la récupération des matériaux</li>
        </ul>`,
        policy: `<ul>
            <li>Loi Nationale sur la Gestion de l'Environnement : Déchets</li>
            <li>Règlements sur la Responsabilité Élargie des Producteurs (REP)</li>
            <li><strong>Projet de Stratégie Nationale de Gestion des Déchets (NWMS) 2026 :</strong> Publié pour commentaires publics, décrivant des objectifs de nouvelle génération pour le détournement des déchets, l'économie circulaire et la prestation équitable de services</li>
            <li>Régimes obligatoires de conformité des producteurs</li>
            <li><strong>Membre Fondateur de l'Alliance Africaine pour l'Économie Circulaire (ACEA) (2022) :</strong> L'Afrique du Sud co-dirige les initiatives régionales d'économie circulaire</li>
        </ul>`,
        challenges: [
            { title: "Dépendance aux décharges", detail: "Plus de 90 % des déchets de l'Afrique du Sud finissent encore dans des décharges. De nombreux sites municipaux sont à capacité ou proche de leur capacité, avec un investissement limité dans les technologies de traitement alternatives." },
            { title: "Prestation de services inégale", detail: "Environ 37 % des ménages sud-africains (~9,8 millions de personnes) n'ont pas accès à des services formels d'enlèvement des déchets, en particulier dans les zones rurales et les établissements informels, créant d'importantes disparités de justice environnementale." },
            { title: "Augmentation des déchets dangereux et électroniques", detail: "L'industrialisation rapide et l'adoption croissante de l'électronique grand public entraînent de fortes augmentations des flux de déchets dangereux et électroniques, dépassant le développement des infrastructures de traitement spécialisées." },
            { title: "Exclusion sociale des récupérateurs informels", detail: "On estime que 60 000 à 90 000 récupérateurs informels de déchets récupèrent des matériaux recyclables de valeur mais restent largement exclus des systèmes formels de gestion des déchets et des protections sociales, malgré leur contribution critique aux taux de recyclage." }
        ],
        opportunities: `<p>La force de l'Afrique du Sud réside dans :</p>
        <ul>
            <li>Des industries de recyclage extensibles</li>
            <li>Des investissements portés par la REP</li>
            <li>L'expansion de la valorisation énergétique</li>
            <li><strong>Leadership Régional :</strong> En tant que membre fondateur de l'ACEA (2022), l'Afrique du Sud est positionnée pour façonner les politiques et investissements continentaux en infrastructure d'économie circulaire</li>
            <li><strong>Évolution des Politiques :</strong> Le Projet NWMS 2026 vise à combler l'écart de service de 37 % tout en renforçant les objectifs de détournement des déchets et d'économie circulaire</li>
            <li><strong>Capacité Industrielle :</strong> Les marchés de recyclage avancés et les systèmes de responsabilité des producteurs fournissent une base pour des chaînes de valeur circulaires élargies</li>
        </ul>`,
        primarySources: [
            "Département de la Foresterie, de la Pêche et de l'Environnement (DFFE), Afrique du Sud",
            "Loi Nationale sur la Gestion de l'Environnement : Déchets",
            "Stratégie Nationale de Gestion des Déchets (NWMS)",
            "Système d'Information sur les Déchets d'Afrique du Sud (SAWIS)",
            "Banque Mondiale – Études sur les Déchets et l'Économie Circulaire en Afrique du Sud",
            "OCDE – Examens de la Responsabilité Élargie des Producteurs (REP)",
            "PNUE – Rapports de l'Alliance Africaine pour l'Économie Circulaire"
        ],
        supportingInstitutions: [
            "Conseil pour la Recherche Scientifique et Industrielle (CSIR)",
            "Organisations de Responsabilité des Producteurs (ORP)"
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
        updateCountryData(countrySelector.value);
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

// Country switching functionality
function updateCountryData(countryKey) {
    const lang = localStorage.getItem('selectedLanguage') || 'en';
    const dataSource = (lang === 'fr' && countryDataFr && countryDataFr[countryKey]) ? countryDataFr : countryData;
    const data = dataSource[countryKey];
    if (!data) return;

    // Update simple text fields
    const textElements = document.querySelectorAll('[data-country]');
    textElements.forEach(element => {
        const field = element.getAttribute('data-country');
        
        // Handle snapshot grid specially
        if (field === 'snapshot' && data.snapshot) {
            element.innerHTML = '';
            data.snapshot.forEach(item => {
                const card = document.createElement('div');
                card.className = 'snapshot-card';
                card.innerHTML = `
                    <h4>${item.label}</h4>
                    <p>${item.value}</p>
                `;
                element.appendChild(card);
            });
        }
        // Handle HTML content sections
        else if (field === 'wasteGeneration' || field === 'wasteCollection' || 
                 field === 'treatment' || field === 'policy' || field === 'opportunities') {
            if (data[field]) {
                element.innerHTML = data[field];
            }
        }
        // Handle challenges accordion
        else if (field === 'challenges' && data.challenges) {
            element.innerHTML = '';
            data.challenges.forEach((challenge, index) => {
                const item = document.createElement('div');
                item.className = 'challenge-accordion-item';
                item.innerHTML = `
                    <button class="challenge-accordion-header" aria-expanded="false" aria-controls="challenge-detail-${index}">
                        <span class="challenge-icon"></span>
                        <span class="challenge-title">${challenge.title}</span>
                        <span class="challenge-chevron">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </span>
                    </button>
                    <div class="challenge-accordion-body" id="challenge-detail-${index}" role="region">
                        <p>${challenge.detail}</p>
                    </div>
                `;
                element.appendChild(item);
            });

            // Attach accordion toggle listeners
            element.querySelectorAll('.challenge-accordion-header').forEach(btn => {
                btn.addEventListener('click', function() {
                    const expanded = this.getAttribute('aria-expanded') === 'true';
                    // Close all siblings
                    this.closest('.challenges-accordion').querySelectorAll('.challenge-accordion-header').forEach(other => {
                        other.setAttribute('aria-expanded', 'false');
                        other.closest('.challenge-accordion-item').classList.remove('active');
                    });
                    // Toggle clicked item
                    if (!expanded) {
                        this.setAttribute('aria-expanded', 'true');
                        this.closest('.challenge-accordion-item').classList.add('active');
                    }
                });
            });
        }
        // Handle primary sources list
        else if (field === 'primarySources' && data.primarySources) {
            element.innerHTML = '';
            data.primarySources.forEach(source => {
                const li = document.createElement('li');
                li.textContent = source;
                element.appendChild(li);
            });
        }
        // Handle supporting institutions list
        else if (field === 'supportingInstitutions' && data.supportingInstitutions) {
            element.innerHTML = '';
            data.supportingInstitutions.forEach(institution => {
                const li = document.createElement('li');
                li.textContent = institution;
                element.appendChild(li);
            });
        }
        // Handle simple text content
        else if (data[field] && typeof data[field] === 'string') {
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

    const savedCountry = localStorage.getItem('selectedCountry') || 'nigeria';
    
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
