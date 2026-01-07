// ===== Global Variables =====
let currentPage = 'homePage';
let selectedSubject = null;
let selectedCharacter = null;
let storyProgress = 0;
let currentQuestion = 0;
let score = 0;
let answers = [];

// ===== Data =====
const subjects = [
    { id: 1, name: 'Science', icon: '🔬', color: '#3b82f6' },
    { id: 2, name: 'History', icon: '📜', color: '#f59e0b' },
    { id: 3, name: 'Mathematics', icon: '🔢', color: '#10b981' },
    { id: 4, name: 'Literature', icon: '📚', color: '#8b5cf6' },
    { id: 5, name: 'Programming', icon: '💻', color: '#06b6d4' },
    { id: 6, name: 'Communications', icon: '📡', color: '#f43f5e' },
    { id: 7, name: 'Networks', icon: '🌐', color: '#84cc16' },
    { id: 8, name: 'Physics', icon: '⚛️', color: '#6366f1' }
];

const characters = [
    // Science Characters
    { id: 1, name: 'Ahmed the Explorer', type: 'Scientist', desc: 'Loves experiments and discoveries', img: '🧑‍🔬', subject: 'Science' },
    { id: 2, name: 'Dr. Maya Chen', type: 'Biologist', desc: 'Expert in biology and life sciences', img: '👩‍🔬', subject: 'Science' },
    
    // History Characters
    { id: 3, name: 'Sarah the Historian', type: 'Historian', desc: 'Loves history and civilizations', img: '👩‍🏫', subject: 'History' },
    { id: 4, name: 'Professor James', type: 'Archaeologist', desc: 'Discovers ancient civilizations', img: '👨‍🏫', subject: 'History' },
    
    // Mathematics Characters
    { id: 5, name: 'Omar the Mathematician', type: 'Math Genius', desc: 'Solves complex equations with ease', img: '🧮', subject: 'Mathematics' },
    { id: 6, name: 'Sophie Numbers', type: 'Statistician', desc: 'Loves numbers and data analysis', img: '👩‍💼', subject: 'Mathematics' },
    
    // Literature Characters
    { id: 7, name: 'Layla the Writer', type: 'Author', desc: 'Loves reading and creative writing', img: '👩‍💻', subject: 'Literature' },
    { id: 8, name: 'Marcus the Poet', type: 'Poet', desc: 'Creates beautiful poetry and stories', img: '🧑‍🎨', subject: 'Literature' },
    
    // Programming Characters
    { id: 9, name: 'Alex the Developer', type: 'Software Engineer', desc: 'Expert in coding and app development', img: '👨‍💻', subject: 'Programming' },
    { id: 10, name: 'Nina Code', type: 'Full Stack Developer', desc: 'Builds amazing web applications', img: '👩‍💻', subject: 'Programming' },
    { id: 11, name: 'Ryan Debug', type: 'Game Developer', desc: 'Creates exciting video games', img: '🎮', subject: 'Programming' },
    
    // Communications Characters
    { id: 12, name: 'Emma the Signal Expert', type: 'Communications Engineer', desc: 'Specialist in signal processing', img: '👩‍🔧', subject: 'Communications' },
    { id: 13, name: 'Jack Frequency', type: 'Radio Engineer', desc: 'Works with radio waves and transmission', img: '👨‍🔧', subject: 'Communications' },
    { id: 14, name: 'Zara Satellite', type: 'Satellite Engineer', desc: 'Expert in satellite communications', img: '🛰️', subject: 'Communications' },
    
    // Networks Characters
    { id: 15, name: 'David the Network Admin', type: 'Network Administrator', desc: 'Manages complex network systems', img: '👨‍💼', subject: 'Networks' },
    { id: 16, name: 'Cara Connect', type: 'Network Security Expert', desc: 'Protects networks from cyber threats', img: '🔒', subject: 'Networks' },
    { id: 17, name: 'Tom Router', type: 'Network Engineer', desc: 'Designs and builds network infrastructure', img: '🌐', subject: 'Networks' },
    
    // Physics Characters
    { id: 18, name: 'Lisa the Physicist', type: 'Quantum Physicist', desc: 'Explores the mysteries of quantum mechanics', img: '👩‍🔬', subject: 'Physics' },
    { id: 19, name: 'Dr. Einstein Jr', type: 'Theoretical Physicist', desc: 'Studies the laws of the universe', img: '👨‍🔬', subject: 'Physics' },
    { id: 20, name: 'Nova Star', type: 'Astrophysicist', desc: 'Passionate about space and stars', img: '🌟', subject: 'Physics' }
];

const storyContent = {
    'Science': [
        {
            text: 'On a bright morning, Ahmed the Explorer decided to go to the laboratory to conduct a new experiment about water.',
            choices: [
                { text: 'Go to the laboratory immediately', correct: true },
                { text: 'Postpone the experiment to another day', correct: false }
            ]
        },
        {
            text: 'In the laboratory, Ahmed found that water consists of two hydrogen atoms and one oxygen atom.',
            choices: [
                { text: 'Record the observations and continue', correct: true },
                { text: 'Ignore the details', correct: false }
            ]
        },
        {
            text: 'He heated the water and noticed that it turns into vapor at 100 degrees Celsius.',
            choices: [
                { text: 'Document the temperature accurately', correct: true },
                { text: 'Not care about the temperature', correct: false }
            ]
        }
    ],
    'History': [
        {
            text: 'Sarah discovered an ancient map leading to a lost civilization in Egypt.',
            choices: [
                { text: 'Study the map carefully and plan the journey', correct: true },
                { text: 'Ignore the map and continue regular work', correct: false }
            ]
        },
        {
            text: 'At the excavation site, she found hieroglyphics from 3000 BC.',
            choices: [
                { text: 'Document and photograph everything', correct: true },
                { text: 'Take artifacts without recording', correct: false }
            ]
        },
        {
            text: 'The hieroglyphics revealed information about ancient Egyptian pharaohs.',
            choices: [
                { text: 'Compare with existing historical records', correct: true },
                { text: 'Make assumptions without verification', correct: false }
            ]
        }
    ],
    'Mathematics': [
        {
            text: 'Omar received a complex equation to solve for an engineering project.',
            choices: [
                { text: 'Break down the equation step by step', correct: true },
                { text: 'Guess the answer randomly', correct: false }
            ]
        },
        {
            text: 'He discovered that the equation involves quadratic formula.',
            choices: [
                { text: 'Apply the formula: x = (-b ± √(b²-4ac)) / 2a', correct: true },
                { text: 'Skip the formula and estimate', correct: false }
            ]
        },
        {
            text: 'The solution required understanding of algebra and calculus.',
            choices: [
                { text: 'Review the mathematical principles first', correct: true },
                { text: 'Proceed without understanding basics', correct: false }
            ]
        }
    ],
    'Literature': [
        {
            text: 'Layla started writing a novel about a magical adventure.',
            choices: [
                { text: 'Create detailed character profiles first', correct: true },
                { text: 'Write randomly without planning', correct: false }
            ]
        },
        {
            text: 'She needed to develop the plot with rising action and climax.',
            choices: [
                { text: 'Outline the story structure', correct: true },
                { text: 'Skip plot development', correct: false }
            ]
        },
        {
            text: 'The story required vivid descriptions and strong dialogue.',
            choices: [
                { text: 'Use literary devices and figurative language', correct: true },
                { text: 'Write plain sentences only', correct: false }
            ]
        }
    ],
    'Programming': [
        {
            text: 'Alex started building a new mobile application for students.',
            choices: [
                { text: 'Plan the app structure and features first', correct: true },
                { text: 'Start coding without a plan', correct: false }
            ]
        },
        {
            text: 'He needed to choose between React Native and Flutter frameworks.',
            choices: [
                { text: 'Research both frameworks and compare features', correct: true },
                { text: 'Pick randomly without research', correct: false }
            ]
        },
        {
            text: 'A bug appeared during testing phase causing app crashes.',
            choices: [
                { text: 'Debug systematically using console logs', correct: true },
                { text: 'Ignore the bug and publish anyway', correct: false }
            ]
        }
    ],
    'Communications': [
        {
            text: 'Emma was tasked with designing a new wireless communication system.',
            choices: [
                { text: 'Study signal propagation and frequency bands', correct: true },
                { text: 'Skip the technical analysis', correct: false }
            ]
        },
        {
            text: 'She needed to calculate the signal-to-noise ratio for optimal performance.',
            choices: [
                { text: 'Use proper formulas and measurement tools', correct: true },
                { text: 'Estimate without calculations', correct: false }
            ]
        },
        {
            text: 'The system required modulation technique selection: AM, FM, or Digital.',
            choices: [
                { text: 'Compare advantages of each modulation type', correct: true },
                { text: 'Choose randomly without analysis', correct: false }
            ]
        }
    ],
    'Networks': [
        {
            text: 'David discovered unusual traffic patterns in the company network.',
            choices: [
                { text: 'Analyze logs and investigate immediately', correct: true },
                { text: 'Ignore the unusual activity', correct: false }
            ]
        },
        {
            text: 'He found that the network needed better security protocols.',
            choices: [
                { text: 'Implement firewall rules and encryption', correct: true },
                { text: 'Leave network as is without security', correct: false }
            ]
        },
        {
            text: 'A new subnet needed to be configured for the IT department.',
            choices: [
                { text: 'Calculate IP addresses using CIDR notation', correct: true },
                { text: 'Assign random IP addresses', correct: false }
            ]
        }
    ],
    'Physics': [
        {
            text: 'Lisa was conducting an experiment on quantum entanglement.',
            choices: [
                { text: 'Set up precise measurement instruments', correct: true },
                { text: 'Conduct experiment without proper setup', correct: false }
            ]
        },
        {
            text: 'She observed wave-particle duality in photon behavior.',
            choices: [
                { text: 'Record data and verify with quantum theory', correct: true },
                { text: 'Ignore theoretical predictions', correct: false }
            ]
        },
        {
            text: 'The experiment required understanding of Heisenberg uncertainty principle.',
            choices: [
                { text: 'Apply the principle: Δx · Δp ≥ ℏ/2', correct: true },
                { text: 'Assume perfect precision is possible', correct: false }
            ]
        }
    ]
};

const questions = {
    'Science': [
        {
            question: 'What is water made of?',
            options: [
                'Two hydrogen atoms and one oxygen atom',
                'One hydrogen atom and two oxygen atoms',
                'Three hydrogen atoms',
                'Two carbon atoms and one oxygen atom'
            ],
            correct: 0
        },
        {
            question: 'At what temperature does water turn into vapor?',
            options: ['50 degrees Celsius', '75 degrees Celsius', '100 degrees Celsius', '125 degrees Celsius'],
            correct: 2
        },
        {
            question: 'What is the correct method for scientific research?',
            options: [
                'Experimenting without recording',
                'Observation and accurate documentation',
                'Only guessing',
                'Ignoring results'
            ],
            correct: 1
        }
    ],
    'History': [
        {
            question: 'When were the Great Pyramids of Giza built?',
            options: ['Around 1000 BC', 'Around 2500 BC', 'Around 500 AD', 'Around 3000 AD'],
            correct: 1
        },
        {
            question: 'What is hieroglyphics?',
            options: [
                'Ancient Egyptian writing system',
                'A type of pyramid',
                'Egyptian currency',
                'A pharaoh name'
            ],
            correct: 0
        },
        {
            question: 'Why is archaeological documentation important?',
            options: [
                'It is not important',
                'To preserve historical accuracy and context',
                'Only for photography',
                'To sell artifacts'
            ],
            correct: 1
        }
    ],
    'Mathematics': [
        {
            question: 'What is the quadratic formula?',
            options: [
                'x = -b ± √(b² - 4ac) / 2a',
                'x = b ± √(b² + 4ac) / 2a',
                'x = a + b + c',
                'x = √(a² + b²)'
            ],
            correct: 0
        },
        {
            question: 'What is 15% of 200?',
            options: ['20', '25', '30', '35'],
            correct: 2
        },
        {
            question: 'What is the value of π (pi) approximately?',
            options: ['2.14', '3.14', '4.14', '5.14'],
            correct: 1
        }
    ],
    'Literature': [
        {
            question: 'What is a protagonist?',
            options: [
                'The villain of the story',
                'The main character of the story',
                'The setting of the story',
                'The theme of the story'
            ],
            correct: 1
        },
        {
            question: 'What is a metaphor?',
            options: [
                'A direct comparison using "like" or "as"',
                'A figure of speech comparing two unlike things',
                'A rhyming pattern',
                'A type of poem'
            ],
            correct: 1
        },
        {
            question: 'What are the main elements of a story?',
            options: [
                'Only characters',
                'Plot, characters, setting, conflict, theme',
                'Only dialogue',
                'Only descriptions'
            ],
            correct: 1
        }
    ],
    'Programming': [
        {
            question: 'What is a variable in programming?',
            options: [
                'A fixed value that never changes',
                'A container for storing data values',
                'A type of loop',
                'An error message'
            ],
            correct: 1
        },
        {
            question: 'What does debugging mean?',
            options: [
                'Writing new code',
                'Deleting all code',
                'Finding and fixing errors in code',
                'Running code faster'
            ],
            correct: 2
        },
        {
            question: 'What is the purpose of a function?',
            options: [
                'To make code look pretty',
                'To reuse code and organize logic',
                'To slow down programs',
                'To create errors'
            ],
            correct: 1
        }
    ],
    'Communications': [
        {
            question: 'What does SNR stand for?',
            options: [
                'Signal Noise Ratio',
                'Signal-to-Noise Ratio',
                'System Network Radio',
                'Standard Noise Regulation'
            ],
            correct: 1
        },
        {
            question: 'What is AM modulation?',
            options: [
                'Amplitude Modulation',
                'Audio Manipulation',
                'Advanced Messaging',
                'Automatic Mode'
            ],
            correct: 0
        },
        {
            question: 'Why is frequency band selection important?',
            options: [
                'It is not important',
                'To avoid interference and optimize transmission',
                'Only for decoration',
                'To make signals slower'
            ],
            correct: 1
        }
    ],
    'Networks': [
        {
            question: 'What is an IP address?',
            options: [
                'A physical network cable',
                'A unique identifier for devices on a network',
                'A type of computer',
                'A software program'
            ],
            correct: 1
        },
        {
            question: 'What does a firewall do?',
            options: [
                'Increases internet speed',
                'Protects network from unauthorized access',
                'Stores files',
                'Creates websites'
            ],
            correct: 1
        },
        {
            question: 'What is a subnet?',
            options: [
                'A type of internet cable',
                'A smaller network within a larger network',
                'A web browser',
                'An email service'
            ],
            correct: 1
        }
    ],
    'Physics': [
        {
            question: 'What is quantum entanglement?',
            options: [
                'A type of rope',
                'When particles become connected and affect each other',
                'A mathematical equation',
                'A chemical reaction'
            ],
            correct: 1
        },
        {
            question: 'What is wave-particle duality?',
            options: [
                'Light behaving as both wave and particle',
                'Two different types of waves',
                'A physics textbook',
                'A laboratory instrument'
            ],
            correct: 0
        },
        {
            question: 'What does the Heisenberg uncertainty principle state?',
            options: [
                'Everything is certain in physics',
                'We can know position and momentum perfectly',
                'Cannot simultaneously know exact position and momentum',
                'Physics is easy to understand'
            ],
            correct: 2
        }
    ]
};

// ===== Navigation Functions =====
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
        currentPage = pageId;
        window.scrollTo(0, 0);
    }
}

function goToHome() {
    resetGame();
    showPage('homePage');
}

function goToSubjects() {
    showPage('subjectsPage');
    renderSubjects();
}

function goToCharacters() {
    showPage('charactersPage');
    renderCharacters();
}

function goToStory() {
    showPage('storyPage');
    renderStory();
}

function goToQuiz() {
    showPage('quizPage');
    renderQuiz();
}

function goToResults() {
    showPage('resultsPage');
    renderResults();
}

function tryNewLesson() {
    resetGame();
    goToSubjects();
}

function resetGame() {
    selectedSubject = null;
    selectedCharacter = null;
    storyProgress = 0;
    currentQuestion = 0;
    score = 0;
    answers = [];
}

// ===== Render Functions =====
function renderSubjects() {
    const grid = document.getElementById('subjectsGrid');
    grid.innerHTML = '';
    
    subjects.forEach(subject => {
        const card = document.createElement('div');
        card.className = 'subject-card';
        card.style.background = subject.color;
        card.onclick = () => selectSubject(subject);
        
        card.innerHTML = `
            <div class="subject-icon">${subject.icon}</div>
            <h3>${subject.name}</h3>
        `;
        
        grid.appendChild(card);
    });
}

function renderCharacters() {
    const grid = document.getElementById('charactersGrid');
    grid.innerHTML = '';
    
    const filteredCharacters = selectedSubject 
        ? characters.filter(char => char.subject === selectedSubject.name)
        : characters;
    
    filteredCharacters.forEach(character => {
        const card = document.createElement('div');
        card.className = 'character-card';
        card.onclick = () => selectCharacter(character);
        
        card.innerHTML = `
            <div class="character-img">${character.img}</div>
            <h3>${character.name}</h3>
            <p class="character-type">${character.type}</p>
            <p class="character-desc">${character.desc}</p>
        `;
        
        grid.appendChild(card);
    });
}

function renderStory() {
    const currentStoryArray = storyContent[selectedSubject.name];
    const currentStory = currentStoryArray[storyProgress];
    
    document.getElementById('storyHeader').innerHTML = `
        <div style="font-size: 4rem;">${selectedCharacter.img}</div>
        <div>
            <h3>${selectedCharacter.name}</h3>
            <p>Adventure in ${selectedSubject.name}</p>
        </div>
    `;
    
    document.getElementById('storyText').textContent = currentStory.text;
    
    const progress = ((storyProgress + 1) / currentStoryArray.length) * 100;
    document.getElementById('storyProgress').style.width = progress + '%';
    document.getElementById('progressText').textContent = 
        `Part ${storyProgress + 1} of ${currentStoryArray.length}`;
    
    const choicesContainer = document.getElementById('choicesContainer');
    choicesContainer.innerHTML = '';
    
    currentStory.choices.forEach(choice => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = choice.text;
        btn.onclick = () => handleChoice(choice.correct);
        choicesContainer.appendChild(btn);
    });
}

function renderQuiz() {
    const questionsArray = questions[selectedSubject.name];
    const question = questionsArray[currentQuestion];
    
    document.getElementById('quizCounter').textContent = 
        `Question ${currentQuestion + 1} of ${questionsArray.length}`;
    document.getElementById('quizScore').textContent = `Score: ${score}`;
    
    const progress = ((currentQuestion + 1) / questionsArray.length) * 100;
    document.getElementById('quizProgress').style.width = progress + '%';
    
    document.getElementById('quizQuestion').textContent = question.question;
    
    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.onclick = () => handleAnswer(index);
        optionsContainer.appendChild(btn);
    });
}

function renderResults() {
    const currentStoryArray = storyContent[selectedSubject.name];
    const questionsArray = questions[selectedSubject.name];
    const totalQuestions = questionsArray.length + currentStoryArray.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    const passed = percentage >= 60;
    
    document.getElementById('resultIcon').textContent = passed ? '✅' : '❌';
    document.getElementById('resultTitle').textContent = 
        passed ? 'Well Done! 🎉' : 'Try Again! 💪';
    document.getElementById('scorePercentage').textContent = percentage + '%';
    document.getElementById('scoreText').textContent = 
        `You got ${score} out of ${totalQuestions} points`;
    document.getElementById('correctCount').textContent = score;
    document.getElementById('wrongCount').textContent = totalQuestions - score;
}

// ===== Event Handlers =====
function selectSubject(subject) {
    selectedSubject = subject;
    goToCharacters();
}

function selectCharacter(character) {
    selectedCharacter = character;
    goToStory();
}

function handleChoice(isCorrect) {
    if (isCorrect) {
        score++;
    }
    
    const currentStoryArray = storyContent[selectedSubject.name];
    if (storyProgress < currentStoryArray.length - 1) {
        storyProgress++;
        renderStory();
    } else {
        goToQuiz();
    }
}

function handleAnswer(selectedIndex) {
    const questionsArray = questions[selectedSubject.name];
    const question = questionsArray[currentQuestion];
    const isCorrect = selectedIndex === question.correct;
    
    if (isCorrect) {
        score++;
    }
    
    answers.push({ question: currentQuestion, correct: isCorrect });
    
    if (currentQuestion < questionsArray.length - 1) {
        currentQuestion++;
        renderQuiz();
    } else {
        goToResults();
    }
}

// ===== Mobile Menu Toggle =====
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
});

// ===== Initialize =====
window.addEventListener('load', function() {
    showPage('homePage');
});