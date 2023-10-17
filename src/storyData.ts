export type Answer = {
    text: string;
    nextPrompt?: Prompt;
    feedback?: string;
};

export type Prompt = {
    question: string;
    answers: Answer[];
};

// Declare all prompts first
const welcomeToTwistervillePrompt: Prompt = {
    question: "Welcome to Twisterville!\n\nHi Jenny, Welcome to the neighborhood! Throughout the game, we'll present you with different tornado scenarios & you'll be given 3 options. Choose the best option on the first try for the most points. If you choose wrong, don't worry! You'll get the chance to try again, but earn less points.",
    answers: [
        { text: "Start the simulation!" }
    ]
};

const earlyWarningPrompt: Prompt = {
    question: "You're settling into your new home and unpacking your last few boxes when you notice something unusual. Outside the sky is turning a dark greenish color, and the wind starts picking up. What do you do next?",
    answers: [
        { text: "Go outside to take a photo." },
        { text: "Turn on the radio or TV for weather updates." }, //correct answer
        { text: "Ignore it; it might just be a regular storm." }
    ]
};

const tornadoWatchPrompt: Prompt = {
    question: "You hear on the radio that a tornado watch has been issued for your area. This means:",
    answers: [
        { 
            text: "A tornado has been spotted, and you should run to it immediately.", 
        },
        { 
            text: "Conditions are right for a tornado, but one hasn't been spotted yet.", //correct answer
        },
        { 
            text: "There's a slight possibility of a hurricane today."
        }
    ]
};

export const preparingHomePrompt: Prompt = {
    question: "You have some time before the storm hits. What is the best way to prepare your home?",
    answers: [
        { text: "Open all windows to equalize pressure." },
        { text: "Secure outdoor furniture and move your car inside the garage." },//correct answer
        { text: "Start cleaning your yard." }
    ]
};

const takingShelterPrompt: Prompt = {
    question: "The warning sirens are blaring. Where is the safest place to take shelter in your home?",
    answers: [
        { text: "In the southwest corner of your basement." },//correct answer
        { text: "In a hallway with windows." },
        { text: "In your upstairs bedroom." }
    ]
};

const protectingYourselfPrompt: Prompt = {
    question: "You're in the basement, and you can hear the tornado approaching. What should you do to protect yourself?",
    answers: [
        { text: "Stand near a window to watch the tornado's path."},
        { text: "Get under something sturdy like a workbench or stairs and protect your head and neck." },//correct answer
        { text: "Scream and run outside!!!" }
    ]
};

const postTornadoPrompt: Prompt = {
    question: "The tornado has passed, but you're unsure of the situation outside. What's the safest thing to do next?",
    answers: [
        { text: "Go outside immediately to check the damage." },
        { text: "Listen to the radio or your emergency weather app for updates before deciding." }//correct answer
    ]
};

const helpingNeighborsPrompt: Prompt = {
    question: "Your neighbors' house has been severely damaged, and they need assistance. What should you do first?",
    answers: [
        { text: "Stare off into the distance and daydream" },
        { text: "Ensure it's safe outside and take an emergency kit with you."}, //correct answer
        { text: "Chase the tornado!" }
    ]
};

// Game Over Prompt
const gameOverPrompt: Prompt = {
    question: "Game Over! 🌪️\n\nThanks for playing the Twisterville Tornado Simulation! Remember, always prioritize safety during severe weather. Want to play again?",
    answers: [
        { text: "Yes, let's go again!", nextPrompt: welcomeToTwistervillePrompt },
        { text: "No, I've had enough tornadoes for one day.", nextPrompt: welcomeToTwistervillePrompt }
    ]
};

// Feedback prompts for wrong answers

const Congrats: Prompt = {
    question: "Awesome job!",
    answers: [
        { text: "End Game", nextPrompt: gameOverPrompt  }
    ]
};

const feedbackEarlyWarningIgnore: Prompt = {
    question: "Yikes! Ignoring Mother Nature's mood swings isn't always the best idea. Feel like playing it safer this time?",
    answers: [
        { text: "Yes, let's be friends with the weather.", nextPrompt: welcomeToTwistervillePrompt },
        { text: "No, I dance in the face of danger.", nextPrompt: gameOverPrompt  }
    ]
};

const feedbackPreparingHomeOpenWindows: Prompt = {
    question: "Ah, the old 'open the windows' trick. Contrary to grandma's tales, it doesn't really help against tornadoes. Try again?",
    answers: [
        { text: "Sure, grandma won't mind.", nextPrompt: welcomeToTwistervillePrompt },
        { text: "No, I stand by grandma's wisdom.", nextPrompt: gameOverPrompt  }
    ]
};

const feedbackPreparingHomeCleaning: Prompt = {
    question: "You thought it was a good time for spring cleaning, but the tornado had other plans. Maybe re-think your priorities? 🌪️🍃",
    answers: [
        { text: "Right! Let's tidy up later.", nextPrompt: welcomeToTwistervillePrompt },
        { text: "I've got a clean yard. I win!", nextPrompt: gameOverPrompt  }
    ]
};

const sweptAwayByTornado: Prompt = {
    question: "Whoa there, Dorothy! Looks like you're not in Kansas anymore. Taking a selfie with a tornado in the background isn't as cool as it sounds. Remember, tornadoes don't like photobombers! Want to give it another shot?",
    answers: [
        { text: "Yes, Toto and I are ready!", nextPrompt: welcomeToTwistervillePrompt },
        { text: "No, I've always wanted to meet the Wizard.", nextPrompt: gameOverPrompt }
    ]
};

const sweptAwayByTornadoPart2: Prompt = {
    question: "Whoa there, Dorothy! We doing this dance again?",
    answers: [
        { text: "Yes!", nextPrompt: gameOverPrompt },
        { text: "No, I will hide under something sturdy", nextPrompt: protectingYourselfPrompt }
    ]
};

const tornadoWatchPromptWrongAnswer: Prompt = {
    question: "That's not correct. A tornado watch means that conditions are right for a tornado, but one hasn't been spotted yet.",
    answers: [
        { text: "Try Again", nextPrompt: welcomeToTwistervillePrompt},
        { text: "End Game", nextPrompt: gameOverPrompt}
    ]
};

// Linking up the sequence of prompts
welcomeToTwistervillePrompt.answers[0].nextPrompt = earlyWarningPrompt;

earlyWarningPrompt.answers[0].nextPrompt = sweptAwayByTornado;
earlyWarningPrompt.answers[1].nextPrompt = tornadoWatchPrompt;
earlyWarningPrompt.answers[2].nextPrompt = feedbackEarlyWarningIgnore;

tornadoWatchPrompt.answers[0].nextPrompt = tornadoWatchPromptWrongAnswer; 
tornadoWatchPrompt.answers[1].nextPrompt = preparingHomePrompt;
tornadoWatchPrompt.answers[2].nextPrompt = tornadoWatchPromptWrongAnswer; 

tornadoWatchPromptWrongAnswer.answers[0].nextPrompt = welcomeToTwistervillePrompt;
tornadoWatchPromptWrongAnswer.answers[1].nextPrompt = gameOverPrompt;

preparingHomePrompt.answers[0].nextPrompt = feedbackPreparingHomeOpenWindows;
preparingHomePrompt.answers[1].nextPrompt = takingShelterPrompt;
preparingHomePrompt.answers[2].nextPrompt = feedbackPreparingHomeCleaning;

protectingYourselfPrompt.answers[0].nextPrompt = sweptAwayByTornadoPart2;
protectingYourselfPrompt.answers[1].nextPrompt = postTornadoPrompt;
protectingYourselfPrompt.answers[2].nextPrompt = sweptAwayByTornadoPart2;

takingShelterPrompt.answers[0].nextPrompt = protectingYourselfPrompt;
takingShelterPrompt.answers[1].nextPrompt = feedbackPreparingHomeOpenWindows;
takingShelterPrompt.answers[2].nextPrompt = sweptAwayByTornadoPart2;

postTornadoPrompt.answers[0].nextPrompt = gameOverPrompt;
postTornadoPrompt.answers[1].nextPrompt = helpingNeighborsPrompt;

helpingNeighborsPrompt.answers[0].nextPrompt = gameOverPrompt;
helpingNeighborsPrompt.answers[1].nextPrompt = Congrats;
helpingNeighborsPrompt.answers[2].nextPrompt = gameOverPrompt;

export const initialPrompts: Prompt[] = [welcomeToTwistervillePrompt];

