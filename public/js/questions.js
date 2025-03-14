const questions = [
    {
        question: "How has social media affected mental health in teenagers?",
        options: [
            "Improved self-esteem and social connections",
            "Increased anxiety and depression rates",
            "No significant impact on mental health",
            "Only affected physical health"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "What is the main impact of artificial intelligence on healthcare?",
        options: [
            "Reduced doctor-patient relationships",
            "Improved disease diagnosis and treatment planning",
            "Increased healthcare costs",
            "Decreased medical accuracy"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "How has remote work technology changed family dynamics?",
        options: [
            "Decreased work-life balance",
            "Improved work-life integration",
            "No impact on family life",
            "Increased commuting time"
        ],
        correct: 1,
        difficulty: "easy"
    },
    {
        question: "What is the primary environmental impact of cryptocurrency mining?",
        options: [
            "Reduced carbon emissions",
            "Significant energy consumption",
            "Improved air quality",
            "Decreased electronic waste"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "How has educational technology affected learning outcomes?",
        options: [
            "Decreased student engagement",
            "Enabled personalized learning experiences",
            "Eliminated traditional teaching methods",
            "Reduced academic performance"
        ],
        correct: 1,
        difficulty: "easy"
    },
    {
        question: "What is the main privacy concern with smart home devices?",
        options: [
            "High electricity costs",
            "Collection and sharing of personal data",
            "Complex installation process",
            "Limited functionality"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "How has streaming technology impacted traditional media?",
        options: [
            "Increased cable TV subscriptions",
            "Transformed content consumption habits",
            "Improved traditional TV ratings",
            "Reduced internet usage"
        ],
        correct: 1,
        difficulty: "easy"
    },
    {
        question: "What is the primary impact of automation on employment?",
        options: [
            "Created more jobs than replaced",
            "Eliminated all manual labor",
            "Only affected manufacturing",
            "No impact on job market"
        ],
        correct: 0,
        difficulty: "hard"
    },
    {
        question: "How has mobile technology affected social interactions?",
        options: [
            "Increased face-to-face communication",
            "Changed communication patterns and etiquette",
            "Eliminated social media use",
            "Improved physical activity"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "What is the main impact of virtual reality on education?",
        options: [
            "Replaced all traditional classrooms",
            "Enabled immersive learning experiences",
            "Reduced student engagement",
            "Increased textbook sales"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "How has e-commerce affected local businesses?",
        options: [
            "Increased local shopping",
            "Created both challenges and opportunities",
            "Eliminated all local stores",
            "No impact on local economy"
        ],
        correct: 1,
        difficulty: "easy"
    },
    {
        question: "What is the primary impact of social media on political discourse?",
        options: [
            "Improved political understanding",
            "Polarized public opinion",
            "Reduced political engagement",
            "Eliminated fake news"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "How has technology affected human attention spans?",
        options: [
            "Increased focus duration",
            "Decreased sustained attention",
            "No impact on attention",
            "Improved memory retention"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "What is the main impact of ride-sharing apps on transportation?",
        options: [
            "Increased public transit use",
            "Transformed urban mobility patterns",
            "Reduced car ownership",
            "Improved traffic congestion"
        ],
        correct: 1,
        difficulty: "easy"
    },
    {
        question: "How has digital technology affected traditional art forms?",
        options: [
            "Eliminated traditional art",
            "Created new artistic possibilities",
            "Reduced artistic creativity",
            "Decreased art appreciation"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "What is the primary impact of 5G technology on society?",
        options: [
            "Decreased internet speeds",
            "Enabled new applications like remote surgery",
            "Reduced mobile connectivity",
            "Increased energy consumption"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "How has cloud computing transformed business operations?",
        options: [
            "Increased physical storage needs",
            "Reduced flexibility and scalability",
            "Enabled remote work and global collaboration",
            "Decreased data security"
        ],
        correct: 2,
        difficulty: "medium"
    },
    {
        question: "What is the main impact of artificial intelligence on creative industries?",
        options: [
            "Eliminated human creativity",
            "Enhanced creative possibilities",
            "Reduced artistic quality",
            "Decreased job opportunities"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "How has technology affected human memory?",
        options: [
            "Improved long-term memory",
            "Changed how we store and retrieve information",
            "Eliminated the need for memory",
            "Reduced cognitive abilities"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "What is the primary impact of wearable technology on health?",
        options: [
            "Decreased physical activity",
            "Enabled better health monitoring",
            "Increased healthcare costs",
            "Reduced doctor visits"
        ],
        correct: 1,
        difficulty: "easy"
    },
    {
        question: "What is the primary function of blockchain technology?",
        options: [
            "Social media management",
            "Decentralized and secure record-keeping",
            "Video game development",
            "Email encryption"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "How has IoT (Internet of Things) transformed smart cities?",
        options: [
            "Increased pollution",
            "Reduced efficiency",
            "Enhanced urban services and resource management",
            "Eliminated public transportation"
        ],
        correct: 2,
        difficulty: "hard"
    },
    {
        question: "What is the impact of digital payments on financial inclusion?",
        options: [
            "Reduced access to banking",
            "Increased banking accessibility for underserved populations",
            "No effect on banking access",
            "Eliminated traditional banking"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "How has machine learning affected data analysis?",
        options: [
            "Simplified pattern recognition",
            "Reduced accuracy",
            "Eliminated human analysts",
            "Increased data errors"
        ],
        correct: 0,
        difficulty: "hard"
    },
    {
        question: "What is the primary benefit of 3D printing in manufacturing?",
        options: [
            "Reduced customization options",
            "Slower production times",
            "Rapid prototyping and customization",
            "Increased material waste"
        ],
        correct: 2,
        difficulty: "medium"
    },
    {
        question: "How has facial recognition technology impacted privacy?",
        options: [
            "Enhanced personal privacy",
            "Created new privacy concerns",
            "No impact on privacy",
            "Improved online security"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "What is the main advantage of renewable energy technology?",
        options: [
            "Higher costs",
            "Sustainable power generation",
            "Increased pollution",
            "Limited availability"
        ],
        correct: 1,
        difficulty: "easy"
    },
    {
        question: "How has digital marketing changed consumer behavior?",
        options: [
            "Reduced online shopping",
            "Personalized shopping experiences",
            "Eliminated traditional retail",
            "Decreased product awareness"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "What is the impact of cybersecurity breaches on businesses?",
        options: [
            "Improved customer trust",
            "Financial and reputational damage",
            "Enhanced data security",
            "No significant impact"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "How has voice recognition technology improved accessibility?",
        options: [
            "Limited device interaction",
            "Enhanced access for differently-abled users",
            "Reduced communication options",
            "Increased complexity"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "What is the main benefit of cloud gaming?",
        options: [
            "Higher hardware requirements",
            "Device-independent gaming access",
            "Increased game prices",
            "Limited game selection"
        ],
        correct: 1,
        difficulty: "easy"
    },
    {
        question: "How has augmented reality impacted retail shopping?",
        options: [
            "Reduced product visualization",
            "Enhanced try-before-buy experience",
            "Eliminated online shopping",
            "Decreased sales"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "What is the primary advantage of biometric authentication?",
        options: [
            "Reduced security",
            "Enhanced security and convenience",
            "Slower access times",
            "Increased password use"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "How has drone technology affected delivery services?",
        options: [
            "Slower delivery times",
            "Automated and efficient delivery options",
            "Eliminated delivery jobs",
            "Increased delivery costs"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "What is the impact of digital twins in industry?",
        options: [
            "Reduced efficiency",
            "Enhanced monitoring and optimization",
            "Increased maintenance costs",
            "Limited data analysis"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "How has edge computing improved data processing?",
        options: [
            "Increased latency",
            "Reduced processing speed",
            "Enhanced real-time processing",
            "Limited data storage"
        ],
        correct: 2,
        difficulty: "hard"
    },
    {
        question: "What is the main advantage of quantum sensors?",
        options: [
            "Lower accuracy",
            "Enhanced measurement precision",
            "Reduced applications",
            "Increased cost"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "How has robotics transformed manufacturing?",
        options: [
            "Reduced precision",
            "Automated repetitive tasks",
            "Eliminated all jobs",
            "Increased production time"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "What is the impact of smart agriculture technology?",
        options: [
            "Reduced crop yields",
            "Optimized resource usage",
            "Increased water waste",
            "Limited farming options"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "How has 3D bioprinting affected medical research?",
        options: [
            "Limited tissue testing",
            "Enhanced organ modeling",
            "Reduced medical advances",
            "Increased research costs"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "What is the main benefit of smart grids?",
        options: [
            "Increased power outages",
            "Efficient power distribution",
            "Reduced renewable integration",
            "Higher energy costs"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "How has digital transformation affected business models?",
        options: [
            "Limited innovation",
            "Enhanced operational efficiency",
            "Reduced competitiveness",
            "Increased costs"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "What is the impact of autonomous vehicles on transportation?",
        options: [
            "Increased accidents",
            "Enhanced safety and efficiency",
            "Reduced mobility options",
            "Higher transportation costs"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "How has artificial intelligence improved customer service?",
        options: [
            "Reduced response times",
            "Eliminated human support",
            "24/7 automated assistance",
            "Increased service costs"
        ],
        correct: 2,
        difficulty: "medium"
    },
    {
        question: "What is the main advantage of smart home automation?",
        options: [
            "Increased energy use",
            "Enhanced comfort and efficiency",
            "Reduced control options",
            "Higher maintenance costs"
        ],
        correct: 1,
        difficulty: "easy"
    },
    {
        question: "How has digital currency affected traditional banking?",
        options: [
            "Eliminated digital transactions",
            "Transformed payment systems",
            "Reduced financial options",
            "Increased transaction fees"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "What is the impact of quantum encryption?",
        options: [
            "Reduced security",
            "Enhanced data protection",
            "Limited applications",
            "Increased vulnerability"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "How has 5G technology improved mobile connectivity?",
        options: [
            "Slower data speeds",
            "Enhanced bandwidth and reliability",
            "Reduced coverage",
            "Increased latency"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "What is the main benefit of digital twins in healthcare?",
        options: [
            "Reduced treatment options",
            "Personalized treatment planning",
            "Increased medical errors",
            "Limited patient data"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "How has machine vision improved quality control?",
        options: [
            "Reduced accuracy",
            "Enhanced defect detection",
            "Increased production errors",
            "Limited inspection capacity"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "What is the impact of smart materials in construction?",
        options: [
            "Reduced durability",
            "Enhanced building performance",
            "Increased maintenance",
            "Limited applications"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "How has digital health monitoring improved patient care?",
        options: [
            "Reduced health tracking",
            "Enhanced preventive care",
            "Increased medical costs",
            "Limited data access"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "What is the main advantage of smart traffic systems?",
        options: [
            "Increased congestion",
            "Optimized traffic flow",
            "Reduced safety",
            "Higher operating costs"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "How has augmented reality enhanced training?",
        options: [
            "Limited learning options",
            "Interactive skill development",
            "Reduced effectiveness",
            "Increased training time"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "What is the impact of predictive maintenance?",
        options: [
            "Increased downtime",
            "Enhanced equipment reliability",
            "Reduced efficiency",
            "Higher maintenance costs"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "How has digital identity verification improved security?",
        options: [
            "Reduced authentication options",
            "Enhanced fraud prevention",
            "Increased identity theft",
            "Limited access control"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "What is the main benefit of smart energy management?",
        options: [
            "Increased energy waste",
            "Optimized energy consumption",
            "Reduced control options",
            "Higher utility costs"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "How has robotics improved healthcare delivery?",
        options: [
            "Reduced precision",
            "Enhanced surgical accuracy",
            "Increased medical errors",
            "Limited applications"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "What is the impact of smart waste management?",
        options: [
            "Increased pollution",
            "Optimized collection efficiency",
            "Reduced recycling",
            "Higher operational costs"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "How has digital learning transformed education?",
        options: [
            "Limited access to education",
            "Enhanced learning flexibility",
            "Reduced interaction",
            "Increased costs"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "What is the main advantage of smart farming?",
        options: [
            "Reduced crop yields",
            "Enhanced agricultural efficiency",
            "Increased resource waste",
            "Limited farming options"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "How has blockchain improved supply chain management?",
        options: [
            "Reduced transparency",
            "Enhanced traceability",
            "Increased complexity",
            "Limited tracking options"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "What is the impact of smart building technology?",
        options: [
            "Increased energy waste",
            "Enhanced building efficiency",
            "Reduced comfort",
            "Higher maintenance costs"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "How has digital twin technology improved manufacturing?",
        options: [
            "Reduced optimization",
            "Enhanced process simulation",
            "Increased production errors",
            "Limited applications"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "What is the main benefit of smart water management?",
        options: [
            "Increased water waste",
            "Optimized water distribution",
            "Reduced water quality",
            "Higher utility costs"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "How has artificial intelligence improved weather forecasting?",
        options: [
            "Reduced accuracy",
            "Enhanced prediction precision",
            "Increased errors",
            "Limited applications"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "What is the impact of digital twins in urban planning?",
        options: [
            "Reduced efficiency",
            "Enhanced city modeling",
            "Increased complexity",
            "Limited applications"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "How has quantum computing affected cryptography?",
        options: [
            "Reduced security concerns",
            "Created new security challenges",
            "No significant impact",
            "Eliminated encryption"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "What is the main advantage of smart retail?",
        options: [
            "Reduced customer experience",
            "Enhanced shopping convenience",
            "Increased costs",
            "Limited product selection"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "How has digital transformation affected healthcare delivery?",
        options: [
            "Reduced access to care",
            "Enhanced patient care coordination",
            "Increased medical errors",
            "Limited treatment options"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "What is the impact of smart transportation systems?",
        options: [
            "Increased congestion",
            "Enhanced mobility efficiency",
            "Reduced safety",
            "Higher operational costs"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "How has artificial intelligence improved financial services?",
        options: [
            "Reduced accuracy",
            "Enhanced risk assessment",
            "Increased errors",
            "Limited applications"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "What is the main benefit of smart manufacturing?",
        options: [
            "Reduced efficiency",
            "Enhanced production optimization",
            "Increased errors",
            "Limited flexibility"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "How has digital transformation affected energy management?",
        options: [
            "Increased energy waste",
            "Enhanced energy efficiency",
            "Reduced control",
            "Higher costs"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "What is the impact of smart city technologies?",
        options: [
            "Reduced urban services",
            "Enhanced city operations",
            "Increased complexity",
            "Limited applications"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "How has artificial intelligence improved cybersecurity?",
        options: [
            "Reduced threat detection",
            "Enhanced security monitoring",
            "Increased vulnerabilities",
            "Limited protection"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "What is the main advantage of digital supply chains?",
        options: [
            "Reduced visibility",
            "Enhanced logistics efficiency",
            "Increased complexity",
            "Limited tracking"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "How has blockchain affected financial transactions?",
        options: [
            "Reduced security",
            "Enhanced transaction transparency",
            "Increased fraud",
            "Limited applications"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "What is the impact of smart grid technology?",
        options: [
            "Reduced reliability",
            "Enhanced power distribution",
            "Increased outages",
            "Limited control"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "How has digital transformation improved customer experience?",
        options: [
            "Reduced personalization",
            "Enhanced service delivery",
            "Increased complexity",
            "Limited options"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "What is the main benefit of smart agriculture?",
        options: [
            "Reduced productivity",
            "Enhanced farming efficiency",
            "Increased resource waste",
            "Limited applications"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "How has artificial intelligence improved product development?",
        options: [
            "Reduced innovation",
            "Enhanced design optimization",
            "Increased errors",
            "Limited creativity"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "What is the impact of digital transformation on sustainability?",
        options: [
            "Increased environmental impact",
            "Enhanced resource efficiency",
            "Reduced conservation",
            "Limited benefits"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "How has quantum technology affected computing?",
        options: [
            "Reduced processing power",
            "Enhanced computational capabilities",
            "No significant impact",
            "Limited applications"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "What is the main advantage of digital healthcare?",
        options: [
            "Reduced access",
            "Enhanced patient care",
            "Increased costs",
            "Limited services"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "How has artificial intelligence improved education?",
        options: [
            "Reduced learning options",
            "Enhanced personalized learning",
            "Increased complexity",
            "Limited applications"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "What is the impact of smart manufacturing on sustainability?",
        options: [
            "Increased waste",
            "Enhanced resource efficiency",
            "Reduced environmental benefits",
            "Limited impact"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "How has digital transformation affected work culture?",
        options: [
            "Reduced collaboration",
            "Enhanced workplace flexibility",
            "Increased isolation",
            "Limited communication"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "What is the main benefit of smart cities?",
        options: [
            "Reduced services",
            "Enhanced urban living",
            "Increased complexity",
            "Limited improvements"
        ],
        correct: 1,
        difficulty: "medium"
    },
    {
        question: "How has artificial intelligence improved transportation?",
        options: [
            "Reduced efficiency",
            "Enhanced traffic management",
            "Increased congestion",
            "Limited applications"
        ],
        correct: 1,
        difficulty: "hard"
    }
];

// Add wild card questions - mix of very easy and very challenging
const wildCardQuestions = [
    {
        question: "What is the most basic form of digital data?",
        options: [
            "Binary (1s and 0s)",
            "Text files",
            "Images",
            "Sound waves"
        ],
        correct: 0,
        difficulty: "easy"
    },
    {
        question: "What complex ethical implications arise from the development of autonomous weapons systems powered by AI?",
        options: [
            "Only maintenance costs matter",
            "The intersection of machine decision-making in warfare, accountability, and human rights",
            "Just the technical specifications",
            "Only the manufacturing process"
        ],
        correct: 1,
        difficulty: "hard"
    },
    {
        question: "What does 'www' stand for in a website address?",
        options: [
            "World Wide Web",
            "World Web Width",
            "Wide World Web",
            "Web World Wide"
        ],
        correct: 0,
        difficulty: "easy"
    },
    {
        question: "Analyze the potential societal implications of quantum computing on current cryptography and data security.",
        options: [
            "Only affects computer speed",
            "No significant impact",
            "Could render current encryption methods obsolete and reshape digital security paradigms",
            "Just makes computers smaller"
        ],
        correct: 2,
        difficulty: "hard"
    }
];

// Keep track of used questions
let usedQuestions = [];
let usedWildCardQuestions = [];

// Modified function to get random question
function getRandomQuestion(isWildCard = false, difficulty = null) {
    const questionSet = isWildCard ? wildCardQuestions : questions;
    let availableQuestions = questionSet;

    // Filter questions by difficulty if specified
    if (difficulty) {
        availableQuestions = questionSet.filter(q => q.difficulty === difficulty);
    }

    // Filter out used questions
    const usedSet = isWildCard ? usedWildCardQuestions : usedQuestions;
    availableQuestions = availableQuestions.filter(q => !usedSet.includes(q));

    // If all questions have been used, reset the used questions array
    if (availableQuestions.length === 0) {
        if (isWildCard) {
            usedWildCardQuestions = [];
        } else {
            usedQuestions = [];
        }
        availableQuestions = difficulty ? 
            questionSet.filter(q => q.difficulty === difficulty) : 
            questionSet;
    }

    // Get random question
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const selectedQuestion = availableQuestions[randomIndex];

    // Add to used questions
    if (isWildCard) {
        usedWildCardQuestions.push(selectedQuestion);
    } else {
        usedQuestions.push(selectedQuestion);
    }

    return selectedQuestion;
}