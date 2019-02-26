// water is a data in the form of an array which you can iterrate through, future additions to the code are using a markov chain based text generator to create more questions for all of the tarot cards 
// In that case the data for the 10 questions might be place holders for questions which are generated
const water = [
    {
        id: 0,
        question: "The Fool card symbolizes what?", 
        answer: [
            "true innocence, a perfect state of joy and freedom", 
            "competition between your left and right brain", 
            "that feeling you get when you start a new project",
            "a simple court jester and nothing more"
            ],
        correctAnswer: "true innocence, a perfect state of joy and freedom",
        icon: 'art/fool.png',
        alt: 'fool icon',
        score: 10

    },
    {
        id: 1,
        question: "Which of the Major Arcana represents change and the cycle of new life and creation that can be brought about by it?",
        answer: [
            "High Preistess",
            "Chariot",
            "Hanged Man",
            "Death"
            ],
        correctAnswer: "Death",
        icon: 'art/death.png',
        alt: 'death icon',
        score: 10
    },
    {
        
        id: 2,
        question: "Hanged Man is a card that represents which of the following?",
        answer: ["No pressing need to make a decision, instead a time to sit and reflect on the best course of action", 
            "Indecision because of too much pressure",
            "That you probably shouldn't have stolen that cookie from the cookie jar",
            "A perfect storm of geometric madness. Where you somehow ended up in a scene from hellraiser 2, there are strange creatures chaising you in your nightmares."
            ],
        correctAnswer: "No pressing need to make a decision, instead a time to sit and reflect on the best course of action",
        icon: 'art/hangedman.png',
        alt: 'hangedman icon',
        score: 10
    },
    {
        id: 3,
        question: "This is a card which just can't seem to stop spinning with the ups and downs of destiny it might even be thought of as a wheel?",
        answer: [
            "Heirophant",
            "Tower",
            "Fortune",
            "Ten of Sceptres"
            ],
        correctAnswer: "Fortune",
        icon:'art/fortune.png',
        alt: 'fortune icon',
        score: 10

    },
    {
        id: 4,
        question: "This card can be summed up in the follow statement. In order to move forward one must sometimes...",
        answer:[
            "Jump onto a train with a stranger", 
            "Eat ice cream, lots and lots of ice cream", 
            "Endure the trials of life because of what they have to teach you",
            "look both ways before crossing the road"
            ],
        correctAnswer: "Endure the trials of life because of what they have to teach you",
        icon: 'art/tower.png',
        alt: 'tower icon',
        score: 10
    },
    {
        id: 5,
        question: "This card has a strong focus on inner-self, self reflection and is always caring the coolest geometric latterns. Avoiding the parties and creating their own light is this cards motto.",
        answer: [
            "Sun",
            "Death",
            "Hermit",
            "Star"
        ],
        correctAnswer: "Hermit",
        icon: 'art/hermit.png',
        alt: 'hermit icon',
        score: 10
    },
    {
        id: 6,
        question: "This card is a represents conscious, action and creation. It symbolises the possibilty of making an idea come true. As well as being a reminder that emotional and creative powers of our soul must have a physical basis to be of real use.",
        answer: [
            "Justice", 
            "Strength",
            "Emperor",
            "Magician"
        ],
        correctAnswer: "Magician",
        icon: 'art/magician.png',
        alt: 'magician icon',
        score: 10
    },
    {
        id: 7,
        question: "What is the focus of the Star card?",
        answer: [
            "It's bright and shiny",
            "finally discovering your inner creative light",
            "hydrogen and helium",
            "misdirected use of energy"
        ],
        correctAnswer: "finally discovering your inner creative light",
        icon: 'art/star.png',
        alt: 'star icon',
        score: 10
    },
    {
        id: 8,
        question: "This card can not only represent the optimism of life and light in it's all encompassing dance off, it also has the power to burn tiny ants when used with a magnifying glass.",
        answer: [
            "Devil", 
            "Emperor",
            "Star", 
            "Sun"
        ],
        correctAnswer: "Sun",
        icon: 'art/sun.png',
        alt: 'sun icon',
        score: 10
    },
    {
        id: 9,
        question: "Which card tells us to go ahead with whatever we want and push towards your creative goals without worrying about wheather or not the results  the results won't be comfortable?",
        answer: [
            "Chariot",
            "Devil",
            "Empress",
            "Hermit"
        ],
        correctAnswer: "Devil",
        icon: 'art/devil.png',
        alt: 'devil icon',
        score: 10   
    }
    
]