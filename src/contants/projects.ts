import { ProjectType } from "../entities/ProjectType";

interface Project {
    name: string,
    type: ProjectType
}

const projects: Project[] = [
    {
        name:"Intuitive Robot",
        type:ProjectType.AUDIOVISUAL
    },
    {
        name:"Bloom",
        type:ProjectType.GRAPHIC
    },
    {
        name: "Bring and eat",
        type:ProjectType.UIUX
    },
    {
        name: "Black Swan",
        type:ProjectType.GRAPHIC
    },
    {
        name: "Square Room",
        type:ProjectType.GRAPHIC
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
        type:ProjectType.AUDIOVISUAL
    },
    {
        name: "Patatap",
        type:ProjectType.AUDIOVISUAL
    },
    {
        name: "Together",
        type:ProjectType.AUDIOVISUAL
    },
    {
        name: "Neil Wilson website",
        type:ProjectType.UIUX
    },
    {
        name: "Gilles Massé website",
        type:ProjectType.UIUX
    },
    {
        name: "DigiCamp",
        type:ProjectType.UIUX
    }
];

export default projects;