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
            "Weak enforcement capacity",
            "Limited waste processing infrastructure",
            "Corruption and resource constraints",
            "Low recycling rates",
            "Health and safety risks for informal workers",
            "Despite well-designed policies, implementation remains Nigeria's greatest obstacle"
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
            "Annual economic loss of ~0.2% of GDP from poor waste management",
            "Egypt contributes 43% of plastic leakage into the Mediterranean",
            "Health risks in informal e-waste recycling"
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
            "Infrastructure deficits",
            "Low public awareness",
            "Weak enforcement capacity",
            "Health risks near dumpsites"
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
            "Nduba landfill limitations",
            "Illegal dumping",
            "Waste sector contributes ~12% of national GHG emissions"
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
            "Landfill dependence",
            "Unequal service delivery",
            "Rising hazardous & e-waste",
            "Social exclusion of informal reclaimers"
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
        // Handle challenges list
        else if (field === 'challenges' && data.challenges) {
            element.innerHTML = '';
            data.challenges.forEach(challenge => {
                const li = document.createElement('li');
                li.textContent = challenge;
                element.appendChild(li);
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
