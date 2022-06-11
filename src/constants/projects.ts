import { LinkType } from "../entities/LinkType";
import { ProjectType } from "../entities/ProjectType";

interface Content {
    fullType: string,
    desc: string,
    mission: string,
    date: string,
    techno: string[],
    pagePic?: string,
    button?: string
}

interface Project {
    name: string,
    type: ProjectType,
    url?: string,
    urlType?: LinkType,
    hidden?: boolean,
    confidential?: boolean,
    content?: Content
}

const projects: Project[] = [
    {
        name: "Explore",
        type:ProjectType.ILLUSTRATION
    },
    {
        name:"Bloom",
        type:ProjectType.GRAPHIC,
        content: {
            fullType: "Graphic Design",
            desc: "During an internship in United Kingdom, I worked on the brand identity of a new agency called Bloom.",
            mission: "create logo, business card, patern and mock up.",
            date: "October 2019 | alone | 2 weeks",
            techno: [
                "/techIcon/illustrator.jpg",
                "/techIcon/logo-photoshop-original.png",
            ],
            pagePic: "/pagePic/bloom.png"
        }
    },
    {
        name: "Bring and eat",
        type:ProjectType.UIUX,
        content: {
            fullType: "UI / UX",
            desc: "For a competition, we proposed a service that permits users and nearby restaurants to avoid food waste.",
            mission: "Creation of the iconography, and the user experience.",
            date: "August 2019 | 5 co-workers | 3 months",
            techno: [
                "/techIcon/figma.png",
                "/techIcon/illustrator.jpg",
                "/techIcon/logo-photoshop-original.png",
            ],
            pagePic: "/pagePic/BringAndEat.jpg"
        }
    },
    {
        name: "Gilles Massé website",
        type:ProjectType.UIUX,
        content: {
            fullType: "UI / UX - Redesign",
            desc: "With another student, we redesign the website of Gilles Massé from the desktop to the mobile interfaces.",
            mission: "Creation of the user experience, user interface and protoype.",
            date: "November 2019 | 2 co-workers | 3 weeks",
            techno: [
                "/techIcon/xd.png",
                "/techIcon/logo-photoshop-original.png",
            ],
            pagePic: "/pagePic/gillesMasse.png"
        }
    },
    {
        name: "Square Room",
        type:ProjectType.GRAPHIC,
        content: {
            fullType: "Graphic Design",
            desc: "During an internship in the UK, I designed a new brand identity for a new agency called Square room.",
            mission: "Find a name, create logo, business card, patern and mock up.",
            date: "October 2019 | alone | 2 weeks",
            techno: [
                "/techIcon/illustrator.jpg",
                "/techIcon/logo-photoshop-original.png",
            ],
            pagePic: "/pagePic/squareRoom.png"
        }
    },
    {
        name:"Intuitive Robot",
        type:ProjectType.AUDIOVISUAL,
        url:"https://vimeo.com/313771129",
        urlType: LinkType.VIDEO,
        content: {
            fullType: "Audiovisual Documentary",
            desc: "Creation of a three-minute documentary, on the company intuitive robot, during a workshop of four days.",
            mission: "Creation of the scenario and storyboard with my team, in charge of the video editing.",
            date: "October 2018 | 4 co-workers | 4 days",
            techno: [
                "/techIcon/fcp.png",
            ],
            pagePic: "/pagePic/intuitiveRobot.png"
        }
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
        type:ProjectType.GAME,
        url:"https://youtu.be/E7Dmd5YXlgQ",
        urlType: LinkType.VIDEO,
        content: {
            fullType: "Game",
            desc: "During a workshop of four days nammed \"creative code” we developed a short game, called Splash Light.",
            mission: "Create the graphic, game level and gameplay. In charge of the maquette, user test and demonstration.",
            date: "January 2019 | 4 co-workers | 4 days",
            techno: [
                "/techIcon/processing3.png",
            ],
            pagePic: "/pagePic/splashLight.png"
        }
    },
    {
        name: "Patatap",
        type:ProjectType.AUDIOVISUAL,
        url:"https://ateliernum.github.io/projet_patatap_1819/Herlem_Juliette/index.html",
        urlType: LinkType.PROTOTYPE_DESKTOP,
        content: {
            fullType: "Audiovisual - Experience",
            desc: "I have created a synesthesia experience allying sound and image: each letter of the keyboard make a sound and an animation.",
            mission: "Code the experience, imagine the shapes and add music.",
            date: "January 2019 | alone | 2 months",
            techno: [
                "/techIcon/javascript.png",
            ],
            pagePic: "/pagePic/patatap.png",
            button: "Try my patatap"
        }
    },
    {
        name: "Together",
        type:ProjectType.GAME,
        url:"https://youtu.be/Z7zpWL3cr5k",
        urlType: LinkType.VIDEO,
        content: {
            fullType: "Game - Audiovisual",
            desc: "Design of a prototype that would help the auditive impaired (hearing impaired and deaf) to visualise and feel the music.",
            mission: "User meeting, developpement and gameplay with my team, in charge of the illustration.",
            date: "March 2021 | 3 co-workers | 2 weeks",
            techno: [
                "/techIcon/TouchDesigner_logo.png",
            ],
            pagePic: "/pagePic/together.jpg"
        }
    },
    {
        name: "Neil Wilson website",
        type:ProjectType.UIUX,
        hidden: true,
        content: {
            fullType: "UI / UX",
            desc: "During an internship in Newcastle upon Tyne, I designed desktop and mobile interfaces for Neil Wilson brand.",
            mission: "Research, wireframe, user experience and user interface, graphics, prototype, mock-up...",
            date: "August 2019 | alone | 3 weeks",
            techno: [
                "/techIcon/xd.png",
                "/techIcon/illustrator.jpg",
                "/techIcon/logo-photoshop-original.png",
            ],
            pagePic: "/pagePic/neilWilson.png"
        }
    },
    {
        name: "Black Swan",
        type:ProjectType.GRAPHIC,
        content: {
            fullType: "Graphic Design",
            desc: "Modernization and redesign of a pre-existing logo. I designed this logo for a client during an internship in Newcastle upon Tyne (UK).",
            mission: "Redesign the logo, and create mock up",
            date: "October 2019 | alone | 10 days",
            techno: [
                "/techIcon/affinity.png",
            ],
            pagePic: "/pagePic/blackSwan.png"
        }
    },
    {
        name: "DigiCamp",
        type:ProjectType.UIUX,
        url:"https://youtu.be/QDk8v1Kly98",
        urlType: LinkType.VIDEO,
        content: {
            fullType: "UI / UX",
            desc: "For a competition, we proposed a service that permits users and nearby restaurants to avoid food waste.",
            mission: "Creation of the iconography, and the user experience.",
            date: "August 2019 | 5 co-workers | 3 months",
            techno: [
                "/techIcon/figma.png",
                "/techIcon/illustrator.jpg",
            ],
            pagePic: "/pagePic/digicamp.png",
            button: "Watch the prototype"
        }
    },
    {
        name: "Depreciated",
        type: ProjectType.ILLUSTRATION
    },
    {
        name: "Wrath",
        type:ProjectType.ILLUSTRATION
    },
    {
        name: "Relativity",
        type:ProjectType.ILLUSTRATION
    },
    {
        name: "Comapper",
        type:ProjectType.UIUX,
        url:"https://www.figma.com/proto/OwjjvdOa8MGLxHb99lReP4/Co'Mapper?page-id=0%3A1&node-id=3%3A5130&viewport=1448%2C373%2C0.08&scaling=scale-down&starting-point-node-id=3%3A5078",
        urlType: LinkType.PROTOTYPE,
        content: {
            fullType: "UI / UX",
            desc: "Co'Mapper is an application that tends to improve passenger information. Through this service, we have redesigned their journey.",
            mission: "Creation of the interfaces and user experience. Prototype and animation development.",
            date: "June 2021 | 2 co-workers | 4 months",
            techno: [
                "/techIcon/figma.png",
                "/techIcon/illustrator.jpg",
                "/techIcon/logo-photoshop-original.png",
                "/techIcon/qgis-logo.png"
            ],
            pagePic: "/pagePic/Comapper.jpg",
            button: "Try the prototype"
        }
    },
    {
        name: "Effet Papillon",
        type:ProjectType.GAME,
        url:"https://4cbf4010-8f8d-4281-beb3-97a13dd6e5be.filesusr.com/ugd/6fd505_725b91ed188a4062bdd7513db39213e2.pdf",
        urlType: LinkType.PROTOTYPE,
        content: {
            fullType: "Game - Graphic - UI UX",
            desc: "Effet Papillon (Butterfly Effect) is a fun and educational board game, which raises awareness about threatened and depreciated species. This game is my end of studies project, conceived and designed during my master's degree.",
            mission: "Game design, content, UI UX and graphic design, print, users and experts interviews and tests, prototype... (the whole project)",
            date: "February 2022 | Alone | 1 year",
            techno: [
                "/techIcon/figma.png",
                "/techIcon/illustrator.jpg",
                "/techIcon/logo-InDesign.png"
            ],
            pagePic: "/pagePic/EffetPapillon.jpg",
            button: "Download the print version"
        }
    }
];

export default projects;