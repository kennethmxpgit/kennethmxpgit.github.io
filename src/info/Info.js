import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"


export let colors = ["rgb(0, 251, 255)", "rgb(202, 225, 86)"]; 

export const info = {
    firstName: "Kenneth",
    lastName: "Purwantoro",
    initials: "kmp", 
    position: "Welcome to my site!",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [
        {
            emoji: "📧",
            text: "kennethmxp@gmail.com"
        },
        {
            emoji: '👨‍🍳',
            text: 'World-class Indomie Chef'
        },
        {
            emoji: "💼",
            text: "Software Developer"
        },
    ],
    socials: [
        {
            link: "https://github.com/kennethmxpgit",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/kenneth-purwantoro-815983126/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://www.instagram.com/kennethmxp",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://soundcloud.com/yourmusickneeds",
            icon: "fa fa-soundcloud",
            label: 'twitter'
        }

    ],
    bio: "Hey there !, I'm Kenneth Purwantoro. I studied Computer Science in Shanghai Jiao Tong University. Send me an e-mail if you're looking for a team player and a problem-solver! Let's make something great together!",
    skills:
        {
            proficientWith: ['javascript', 'react js','python', 'git', 'github', 'figma','mongodb','sql','adobe illustrator',],
            exposedTo: ['C++','C#','unity', 'adobe photoshop', 'pytorch','firebase','nodejs']
        }
    ,
    hobbies: [
        {
            label: 'piano',
            emoji: '🎹'
        },
        {
            label: 'dogs',
            emoji: '🐕'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🍳'
        }

    ],
    portfolio: [ 

        {
            title: "Where's Waldo?",
            details:`(WIP) Classic. Find Waldo and his gang in this web app`,
            details2:'Javascript, Firebase',
            live: "https://wheres-waldo-74d8d.web.app/",
            source: "https://github.com/kennethmxpgit/wheres-waldo",
            image: mock2,
        },
        {
            title: "Memory Card Game",
            details:`Marvel-themed memory card game using React`,
            details2:`React JS`,
            live: "https://kennethmxpgit.github.io/memory-card/",
            source: "https://github.com/kennethmxpgit/memory-card",
            image: mock3
        },
        {
            title: "Tic Tac Toe",
            details:"Features single-player and multiplayer. A vanilla javascript practice",
            details2:"Javascript",
            live: "https://kennethmxpgit.github.io/odin-calculator/",
            source: "https://github.com/kennethmxpgit/odin-tictactoe",
            image: mock4
        },
        {
            title: "Calculator",
            details : "A simple calculator. But is it?",
            live: "https://kennethmxpgit.github.io/odin-calculator/",
            source: "https://github.com/kennethmxpgit/odin-calculator",
            image: mock5
        }
    ]
}