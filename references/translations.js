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
            title: "The SHINE Model - Sustainable Cost-Efficient Waste Management",
            author: "GIZ (Deutsche Gesellschaft für Internationale Zusammenarbeit)",
            year: "2025",
            location: "Rwanda",
            category: "REPORT",
            countries: ["Rwanda"],
            link: "https://www.giz.de/en/downloads/giz2025-en-SHINE-model.pdf",
            accessed: "2026-02-09"
        },
        {
            title: "Innovative Waste Management in Rwanda",
            author: "The Borgen Project",
            year: "2024",
            location: "Rwanda",
            category: "REPORT",
            countries: ["Rwanda"],
            link: "https://borgenproject.org/waste-management-in-rwanda/",
            accessed: "2026-02-09"
        },
        {
            title: "Actively Engaging Rwanda's Private Sector in E-Waste Management",
            author: "International Telecommunication Union (ITU)",
            year: "2025",
            location: "Rwanda",
            category: "REPORT",
            countries: ["Rwanda"],
            link: "https://www.itu.int/itu-d/sites/digital-impact-unlocked/actively-engaging-rwandas-private-sector-in-e-waste-management/",
            accessed: "2026-02-09"
        },
        {
            title: "Rwanda Launches Campaign to Boost E-Waste Collection and Recycling",
            author: "Ministry of ICT and Innovation (MINICT), Rwanda",
            year: "2024",
            location: "Rwanda",
            category: "REPORT",
            countries: ["Rwanda"],
            link: "https://www.minict.gov.rw/news-detail/rwanda-launches-campaign-to-boost-e-waste-collection-and-recycling",
            accessed: "2026-02-09"
        },
        {
            title: "Rwanda Launches National Circular Economy Action Plan and Roadmap",
            author: "Ministry of Environment, Rwanda",
            year: "2024",
            location: "Rwanda",
            category: "REPORT",
            countries: ["Rwanda"],
            link: "https://www.environment.gov.rw/news-detail/rwanda-launches-national-circular-economy-action-plan-and-roadmap",
            accessed: "2026-02-09"
        },
        {
            title: "Rwanda Setting Example for Electronic Waste Recycling",
            author: "Enhanced Integrated Framework (EIF)",
            year: "2023",
            location: "Rwanda",
            category: "REPORT",
            countries: ["Rwanda"],
            link: "https://trade4devnews.enhancedif.org/en/impact-story/rwanda-setting-example-electronic-waste-recycling",
            accessed: "2026-02-09"
        },
        {
            title: "Promoting a Sustainable Waste and Circular Economy in Rwanda",
            author: "GIZ Rwanda",
            year: "2024",
            location: "Rwanda",
            category: "REPORT",
            countries: ["Rwanda"],
            link: "https://www.giz.de/en/projects/supporting-sustainable-waste-and-circular-economy-rwanda",
            accessed: "2026-02-09"
        },
        {
            title: "EPR Guidelines for Rwanda",
            author: "Manufacturing Africa",
            year: "2025",
            location: "Rwanda",
            category: "REPORT",
            countries: ["Rwanda"],
            link: "https://manufacturingafrica.org/wp-content/uploads/2025/10/Rwanda-EPR-final-report.pdf",
            accessed: "2026-02-09"
        },
        {
            title: "Championing Rwanda's Circular Food System: Meet the Second Cohort",
            author: "World Resources Institute (WRI)",
            year: "2025",
            location: "Rwanda",
            category: "REPORT",
            countries: ["Rwanda"],
            link: "https://www.wri.org/update/championing-rwandas-circular-food-system-meet-second-cohort-entrepreneurs-leading-change",
            accessed: "2026-02-09"
        },
        {
            title: "Africa's Innovations In Waste Management",
            author: "African Leadership Magazine",
            year: "2024",
            location: "Multiple African Countries",
            category: "REPORT",
            countries: ["Rwanda", "Kenya", "Nigeria", "South Africa"],
            link: "https://www.africanleadershipmagazine.co.uk/africas-innovations-in-waste-management/",
            accessed: "2026-02-09"
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
            title: "Draft National Waste Management Strategy 2026",
            author: "Department of Forestry, Fisheries and the Environment (DFFE)",
            year: "2025",
            location: "South Africa",
            category: "REPORT",
            countries: ["South Africa"],
            link: "https://www.gov.za/sites/default/files/gcis_document/202512/53894gon6972.pdf",
            accessed: "2026-02-09"
        },
        {
            title: "Advancing Circular Economy in South Africa",
            author: "CSIR (Council for Scientific and Industrial Research)",
            year: "2024",
            location: "South Africa",
            category: "REPORT",
            countries: ["South Africa"],
            link: "https://www.csir.co.za/sites/default/files/Documents/WB-CSIR_CE_FINAL%20REPORT_SINGLEPAGES_v6_LR.pdf",
            accessed: "2026-02-09"
        },
        {
            title: "Circular Economy in South Africa: Opportunities for Reusable Packaging Systems",
            author: "GIZ & ICLEI Africa",
            year: "2024",
            location: "South Africa",
            category: "REPORT",
            countries: ["South Africa"],
            link: "https://www.giz.de/de/downloads/iclei2024-en-south-africa-reusable-packaging-systems.pdf",
            accessed: "2026-02-09"
        },
        {
            title: "Trade and the Circular Economy: Plastics Action in South Africa",
            author: "World Economic Forum",
            year: "2024",
            location: "South Africa",
            category: "REPORT",
            countries: ["South Africa"],
            link: "https://www3.weforum.org/docs/WEF_GPAP_South_Africa_Trade_Study_2024.pdf",
            accessed: "2026-02-09"
        },
        {
            title: "Improving Solid Waste and Plastics Management in Lagos State: A Way Forward",
            author: "World Bank",
            year: "2024",
            location: "Nigeria",
            category: "REPORT",
            countries: ["Nigeria"],
            link: "https://documents1.worldbank.org/curated/en/099101824172020522/pdf/P1761781eb744507f184b01f525451f4014.pdf",
            accessed: "2026-02-09"
        },
        {
            title: "Wanted: Blueprint For Nigeria's Waste Management Crisis",
            author: "CAPPA Africa (Corporate Accountability and Public Participation Africa)",
            year: "2025",
            location: "Nigeria",
            category: "REPORT",
            countries: ["Nigeria"],
            link: "https://cappaafrica.org/2025/05/07/wanted-blueprint-for-nigerias-waste-management-crisis/",
            accessed: "2026-02-09"
        },
        {
            title: "Solid Waste Management in Nigeria: National Report",
            author: "NESREA (National Environmental Standards and Regulations Enforcement Agency)",
            year: "2025",
            location: "Nigeria",
            category: "REPORT",
            countries: ["Nigeria"],
            link: "https://nesrea.gov.ng/wp-content/uploads/2025/10/Full-draft-Report-Solid-Waste-Management-Edited-15102025-Revised_compressed.pdf",
            accessed: "2026-02-09"
        },
        {
            title: "Formalizing the Informal Waste Picker Economy for Inclusive Growth",
            author: "INCLUDE Platform",
            year: "2025",
            location: "Nigeria",
            category: "REPORT",
            countries: ["Nigeria"],
            link: "https://includeplatform.net/wp-content/uploads/2025/02/FINAL-INCLUDE-REPORT-2024-1.pdf",
            accessed: "2026-02-09"
        },
        {
            title: "Konza Technopolis Pneumatic Waste Collection System Project",
            author: "Envac Group",
            year: "2025",
            location: "Kenya",
            category: "REPORT",
            countries: ["Kenya"],
            link: "https://www.envacgroup.com/projects/konza-africa/",
            accessed: "2026-02-09"
        },
        {
            title: "Nairobi Waste-to-Energy Power Plant Initiative Review",
            author: "ENVACO (Environmental Advocacy Coalition)",
            year: "2024",
            location: "Kenya",
            category: "REPORT",
            countries: ["Kenya"],
            link: "https://envaco.org/a-review-of-nairobis-waste-to-energy-power-plant-initiative-2024-in-ruai/",
            accessed: "2026-02-09"
        },
        {
            title: "Wastepickers at the Dandora Dumpsite: Socio-economic Study",
            author: "Danish Environmental Protection Agency & SSC Kenya-Denmark",
            year: "2025",
            location: "Kenya",
            category: "REPORT",
            countries: ["Kenya"],
            link: "https://eng.mst.dk/media/zlba3iep/ssc-report-wastepickers-at-the-dandora-dumpsite-may-2025.pdf",
            accessed: "2026-02-09"
        },
        {
            title: "Egypt Accelerates Recycling and Waste Management Reforms",
            author: "CIO Bulletin",
            year: "2025",
            location: "Egypt",
            category: "REPORT",
            countries: ["Egypt"],
            link: "https://ciobulletin.com/recycling-and-waste-management/egypt-accelerates-recycling-and-waste-management",
            accessed: "2026-02-09"
        },
        {
            title: "Final Report Egypt - Sustainable Recycling Industries",
            author: "SRI (Sustainable Recycling Industries)",
            year: "2025",
            location: "Egypt",
            category: "REPORT",
            countries: ["Egypt"],
            link: "https://www.sustainable-recycling.org/wp-content/uploads/2025/10/250627_SRI_Final_reporting_Egypt_FINAL.pdf",
            accessed: "2026-02-09"
        },
        {
            title: "Egypt Plastic Recycling Market Report 2025-2030",
            author: "TechSci Research",
            year: "2024",
            location: "Egypt",
            category: "REPORT",
            countries: ["Egypt"],
            link: "https://www.techsciresearch.com/report/egypt-plastic-recycling-market/15445.html",
            accessed: "2026-02-09"
        },
        {
            title: "Waste Management in the Middle East and North Africa",
            author: "World Bank",
            year: "2025",
            location: "MENA Region",
            category: "REPORT",
            countries: ["Egypt", "Algeria", "Morocco", "Tunisia", "Lebanon", "Jordan"],
            link: "https://documents1.worldbank.org/curated/en/099012226144066731/pdf/P501760-3b7d1207-e3ae-4d74-b42b-62a4630738ec.pdf",
            accessed: "2026-02-09"
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
        },
        {
            title: "Draft National Waste Management Strategy 2026",
            author: "Department of Forestry, Fisheries and the Environment (DFFE), South Africa",
            year: "2025 (December)",
            location: "South Africa",
            category: "POLICY",
            countries: ["South Africa"],
            link: "https://www.dffe.gov.za",
            accessed: "2026-02-09"
        },
        {
            title: "Basel Convention on the Control of Transboundary Movements of Hazardous Wastes and Their Disposal",
            author: "United Nations Environment Programme",
            year: "1989 (Amended 2019)",
            location: "Global",
            category: "TREATY",
            countries: ["All"],
            link: "https://www.basel.int/",
            accessed: "2026-02-09"
        },
        {
            title: "Bamako Convention on the Ban of the Import into Africa and the Control of Transboundary Movement and Management of Hazardous Wastes within Africa",
            author: "African Union",
            year: "1991",
            location: "Africa",
            category: "TREATY",
            countries: ["Africa-wide"],
            link: "https://au.int/en/treaties/bamako-convention",
            accessed: "2026-02-09"
        },
        {
            title: "Lagos State Single-Use Plastic Ban Policy",
            author: "Lagos State Government",
            year: "2025",
            location: "Lagos, Nigeria",
            category: "POLICY",
            countries: ["Nigeria"],
            link: "https://lagosstate.gov.ng",
            accessed: "2026-02-09"
        },
        {
            title: "Sustainable Waste Management Act",
            author: "National Environment Management Authority (NEMA), Kenya",
            year: "2022",
            location: "Kenya",
            category: "POLICY",
            countries: ["Kenya"],
            link: "https://www.nema.go.ke",
            accessed: "2026-02-09"
        },
        {
            title: "Prime Ministerial Decree No. 662 of 2025 - EPR Implementation",
            author: "Government of Egypt",
            year: "2025",
            location: "Egypt",
            category: "POLICY",
            countries: ["Egypt"],
            link: "https://www.eeaa.gov.eg",
            accessed: "2026-02-09"
        },
        {
            title: "Rwanda Integrated Solid Waste Management Strategy 2022",
            author: "Rwanda Environment Management Authority (REMA)",
            year: "2022",
            location: "Rwanda",
            category: "POLICY",
            countries: ["Rwanda"],
            link: "https://www.rema.gov.rw",
            accessed: "2026-02-09"
        },
        {
            title: "National Circular Economy Action Plan",
            author: "Rwanda Environment Management Authority (REMA)",
            year: "2023",
            location: "Rwanda",
            category: "POLICY",
            countries: ["Rwanda"],
            link: "https://www.rema.gov.rw",
            accessed: "2026-02-09"
        },
        {
            title: "Africa Circular Economy Alliance (ACEA) Framework",
            author: "African Union, World Economic Forum, African Development Bank, World Bank",
            year: "2022",
            location: "Africa",
            category: "FRAMEWORK",
            countries: ["South Africa", "Africa-wide"],
            link: "https://www.aceaafrica.org/",
            accessed: "2026-02-09"
        },
        {
            title: "African Union Agenda 2063 - Environmental Sustainability Goals",
            author: "African Union Commission",
            year: "2015",
            location: "Africa",
            category: "FRAMEWORK",
            countries: ["Africa-wide"],
            link: "https://au.int/agenda2063",
            accessed: "2026-02-09"
        },
        {
            title: "East African Community Protocol on Environment and Natural Resources Management",
            author: "East African Community (EAC)",
            year: "2006",
            location: "East Africa",
            category: "PROTOCOL",
            countries: ["Kenya", "Rwanda", "Tanzania", "Uganda", "Burundi", "South Sudan", "DRC"],
            link: "https://www.eac.int",
            accessed: "2026-02-09"
        },
        {
            title: "ECOWAS Policy on Environment",
            author: "Economic Community of West African States (ECOWAS)",
            year: "2008",
            location: "West Africa",
            category: "POLICY",
            countries: ["Nigeria"],
            link: "https://www.ecowas.int",
            accessed: "2026-02-09"
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
        },
        {
            title: "Towards zero-waste cities: Leveraging circular economy strategies for municipal solid waste management and pollution mitigation in East Africa – A systematic review",
            author: "Multiple Authors",
            year: "2026",
            journal: "Next Sustainability, Volume 7, June 2026, 100228",
            category: "PEER-REVIEWED",
            countries: ["Kenya", "Rwanda", "Uganda", "Tanzania", "Ethiopia"],
            link: "https://www.sciencedirect.com/science/article/pii/S294982362500131X",
            accessed: "2026-02-09"
        },
        {
            title: "The Contribution of E-Waste Recycling in Promoting Green Growth: A Case of Enviroserve Rwanda Green Park",
            author: "Iraguha, A., & Uwimpuhwe, D.",
            year: "2025",
            journal: "International Journal of Advances in Engineering and Management (IJAEM), Volume 7, Issue 03, pp: 902-909",
            category: "PEER-REVIEWED",
            countries: ["Rwanda"],
            link: "https://ijaem.net/issue_dcp/The%20Contribution%20of%20E%20Waste%20Recycling%20in%20Promoting%20Green%20Growth.%20A%20Case%20of%20Enviroserve%20Rwanda%20Green%20Park.pdf",
            accessed: "2026-02-09"
        },
        {
            title: "Assessing Waste Management Services in Kigali",
            author: "Rajashekar et al.",
            year: "2019",
            journal: "International Growth Centre (IGC) Policy Paper",
            category: "PEER-REVIEWED",
            countries: ["Rwanda"],
            link: "https://www.theigc.org/sites/default/files/2019/11/Rajashekar-et-al-2019-paper.pdf",
            accessed: "2026-02-09"
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
                    ${ref.downloadLink ? `<a href="${ref.downloadLink}" target="_blank" rel="noopener noreferrer" class="reference-link">DOWNLOAD DATA</a>` : ''}
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
                    ${ref.link ? `<a href="${ref.link}" target="_blank" rel="noopener noreferrer" class="reference-link">VIEW SOURCE</a>` : ''}
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
                    ${ref.link ? `<a href="${ref.link}" target="_blank" rel="noopener noreferrer" class="reference-link">VIEW DOCUMENT</a>` : ''}
                    ${ref.accessed ? `<span class="reference-accessed">[ACCESSED: ${ref.accessed}]</span>` : ''}
                </div>
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
