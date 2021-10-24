import { ProjectType } from "../entities/ProjectType";

interface Content {
    fullType: string,
    desc: string,
    mission: string,
    date: string,
    techno: string[]
}

interface Project {
    name: string,
    type: ProjectType,
    url?: string,
    content?: Content
}

const projects: Project[] = [
    {
        name:"Intuitive Robot",
        type:ProjectType.AUDIOVISUAL,
        url:"https://vimeo.com/313771129",
        content: {
            fullType: "Audiovisual Documentary",
            desc: "Creation of a three-minute documentary, on the company intuitive robot, during a workshop of four days.",
            mission: "My mission: Creation of the scenario and storyboard with my team, in charge of the video editing.",
            date: "October 2018 | 4 co-workers | 4 days",
            techno: [
                "/techIcon/fcp.png",
            ]
        }
    },
    {
        name:"Bloom",
        type:ProjectType.GRAPHIC,
        content: {
            fullType: "Graphic Design",
            desc: "During an internship in United Kingdom, I worked on the brand identity of a new agency called Bloom.",
            mission: "My mission: create logo, business card, patern and mock up.",
            date: "October 2019 | alone | 2 weeks",
            techno: [
                "/techIcon/illustrator.jpg",
                "/techIcon/logo-photoshop-original.png",
            ]
        }
    },
    {
        name: "Bring and eat",
        type:ProjectType.UIUX,
        content: {
            fullType: "UI / UXs",
            desc: "For a competition, we proposed a service that permits users and nearby restaurants to avoid food waste.",
            mission: "My mission: Creation of the iconography, and the user experience.",
            date: "August 2019 | 5 co-worker | 3 months",
            techno: [
                "/techIcon/figma.jpg",
                "/techIcon/illustrator.jpg",
                "/techIcon/logo-photoshop-original.png",
            ]
        }
    },
    {
        name: "Black Swan",
        type:ProjectType.GRAPHIC,
        content: {
            fullType: "Graphic Design",
            desc: "Modernization and redesign of a pre-existing logo. I designed this logo for a client during an internship in Newcastle upon Tyne (UK).",
            mission: "My mission: redesign the logo, and create mock up",
            date: "October 2019 | alone | 10 days",
            techno: [
                "/techIcon/affinity.png",
            ]
        }
    },
    {
        name: "Square Room",
        type:ProjectType.GRAPHIC,
        content: {
            fullType: "Graphic Design",
            desc: "During an internship in the UK, I designed a new brand identity for a new agency called Square room.",
            mission: "My mission: find a name, create logo, business card, patern and mock up.",
            date: "October 2019 | alone | 2 weeks",
            techno: [
                "/techIcon/illustrator.jpg",
                "/techIcon/logo-photoshop-original.png",
            ]
        }
    },
    {
        name: "Snake",
        type:ProjectType.ILLUSTRATION
    },
    {
        name: "Bestiary",
        type:ProjectType.ILLUSTRATION
    },
    {
        name: "Ray",
        type:ProjectType.ILLUSTRATION
    },
    {
        name: "Splash light",
        type:ProjectType.AUDIOVISUAL,
        url:"https://youtu.be/E7Dmd5YXlgQ",
        content: {
            fullType: "Audiovisual - Game",
            desc: "During a workshop of four days nammed \"creative code” we developed a short game, called Splash Light.",
            mission: "My mission: Create the graphic, game level and gameplay. In charge of the maquette, user test and demonstration.",
            date: "January 2019 | 4 co-workers | 4 days",
            techno: [
                "/techIcon/processing3.png",
            ]
        }
    },
    {
        name: "Patatap",
        type:ProjectType.AUDIOVISUAL,
        url:"https://ateliernum.github.io/projet_patatap_1819/Herlem_Juliette/index.html",
        content: {
            fullType: "Audiovisual - Experience",
            desc: "I have created a synesthesia experience allying sound and image: each letter of the keyboard make a sound and an animation.",
            mission: "My mission: code the experience, imagine the shapes and add music.",
            date: "January 2019 | alone | 2 months",
            techno: [
                "/techIcon/javascript.png",
            ]
        }
    },
    {
        name: "Together",
        type:ProjectType.AUDIOVISUAL,
        url:"https://youtu.be/Z7zpWL3cr5k",
        content: {
            fullType: "Audiovisual - Game",
            desc: "Design of a prototype that would help the auditive impaired (hearing impaired and deaf) to visualise and feel the music.",
            mission: "My mission: User meetin, developpement and gameplay with my team, In charge of the illustration.",
            date: "March 2021 | 3 co-workers | 2 weeks",
            techno: [
                "/techIcon/TouchDesigner_logo.png",
            ]
        }
    },
    {
        name: "Neil Wilson website",
        type:ProjectType.UIUX,
        content: {
            fullType: "UI / UX",
            desc: "During an internship in Newcastle upon Tyne, I designed desktop and mobile interfaces for Neil Wilson brand.",
            mission: "My mission: Research, wireframe, user experience and user interface, graphics, prototype, mock-up...",
            date: "August 2019 | alone | 3 weeks",
            techno: [
                "/techIcon/xd.png",
                "/techIcon/illustrator.jpg",
                "/techIcon/logo-photoshop-original.png",
            ]
        }
    },
    {
        name: "Gilles Massé website",
        type:ProjectType.UIUX,
        content: {
            fullType: "UI / UX - Redesign",
            desc: "With another student, we redesign the website of Gilles Massé from the desktop to the mobile interfaces.",
            mission: "My mission: Creation of the user experience, user interface and protoype.",
            date: "November 2019 | 2 co-worker | 3 weeks",
            techno: [
                "/techIcon/xd.png",
                "/techIcon/logo-photoshop-original.png",
            ]
        }
    },
    {
        name: "DigiCamp",
        type:ProjectType.UIUX,
        content: {
            fullType: "UI / UX",
            desc: "For a competition, we proposed a service that permits users and nearby restaurants to avoid food waste.",
            mission: "My mission: Creation of the iconography, and the user experience.",
            date: "August 2019 | 5 co-worker | 3 months",
            techno: [
                "/techIcon/figma.png",
                "/techIcon/illustrator.jpg",
            ]
        }
    }
];

export default projects;