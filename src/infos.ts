export interface Data {
    projects: ProjectData[],
    skills: Skills
}

export interface Skills {
    languages: LanguageSkill[]
    tools: string[],
    operatingSystems: OsSkills
}

export interface LanguageSkill {
    name: string,
    side: string,
    frameworks?: string[]
}

export interface OsSkills {
    main: string,
    used: Record<string, string[]>,
    using: Record<string, string[]>
}

export interface ProjectData {
    name: string,
    id: string,
    techs: string[],
    images: {
        original: string,
        avif: string,
        jxl: string
    },
    link: string,
    dates: {
        start: number,
        end: number
    },
    role: string
}

// Originals
const papilloteBotImg = 'assets/original/papillotebot.jpg'
const paintingModImg = 'assets/original/paintingmod.png'
const fdlinkImg = 'assets/original/fdlink.png'
const serverTranslationsImg = 'assets/original/translate.png'
const rustyCraftImg = 'assets/original/rust.png'
const legacyFabricImg = 'assets/original/legacyfabric.png'
const nucleoidImg = 'assets/original/nucleoid.png'
const multiteamImg = 'assets/original/multiteam.png'
const gardenArsenalImg = 'assets/original/gardenarsenal.png'

// Avifs
const papilloteBotAvif = 'assets/avif/papillotebot.avif'
const paintingModAvif = 'assets/avif/paintingmod.avif'
const fdlinkAvif = 'assets/avif/fdlink.avif'
const serverTranslationsAvif = 'assets/avif/translate.avif'
const rustyCraftAvif = 'assets/avif/rust.avif'
const legacyFabricAvif = 'assets/avif/legacyfabric.avif'
const nucleoidAvif = 'assets/avif/nucleoid.avif'
const multiteamAvif = 'assets/avif/multiteam.avif'
const gardenArsenalAvif = 'assets/avif/gardenarsenal.avif'

// Jxl
const papilloteBotJxl = 'assets/jxl/papillotebot.jxl'
const paintingModJxl = 'assets/jxl/paintingmod.jxl'
const fdlinkJxl = 'assets/jxl/fdlink.jxl'
const serverTranslationsJxl = 'assets/jxl/translate.jxl'
const rustyCraftJxl = 'assets/jxl/rust.jxl'
const legacyFabricJxl = 'assets/jxl/legacyfabric.jxl'
const nucleoidJxl = 'assets/jxl/nucleoid.jxl'
const multiteamJxl = 'assets/jxl/multiteam.jxl'
const gardenArsenalJxl = 'assets/jxl/gardenarsenal.jxl'

const projectsList = [
    {
        name: "PapilloteBot",
        id: "papillote-bot",
        techs: ["JavaScript", "NodeJS", "Firebase"],
        images: {
            original: papilloteBotImg,
            avif: papilloteBotAvif,
            jxl: papilloteBotJxl
        },
        link: "https://github.com/arthurbambou/PapilloteBot",
        dates: {
            start: 2017,
            end: 2018
        },
        role: "role-main-dev"
    },
    {
        name: "Painting Mod",
        id: "painting-mod",
        techs: ["Java"],
        images: {
            original: paintingModImg,
            avif: paintingModAvif,
            jxl: paintingModJxl
        },
        link: "https://github.com/arthurbambou/Painting-Mod",
        dates: {
            start: 2018,
            end: 2019
        },
        role: "role-main-dev"
    },
    {
        name: "Fabric <-> Discord Link",
        id: "fdlink",
        techs: ["Java"],
        images: {
            original: fdlinkImg,
            avif: fdlinkAvif,
            jxl: fdlinkJxl
        },
        link: "https://github.com/arthurbambou/Fabric---Discord-Link",
        dates: {
            start: 2019,
            end: -1
        },
        role: "role-main-dev"
    },
    {
        name: "Server Translations API",
        id: "server-translations-api",
        techs: ["Java"],
        images: {
            original: serverTranslationsImg,
            avif: serverTranslationsAvif,
            jxl: serverTranslationsJxl
        },
        link: "https://github.com/NucleoidMC/Server-Translations",
        dates: {
            start: 2021,
            end: -1
        },
        role: "role-original-dev-maitainer"
    },
    {
        name: "rusty-craft",
        id: "rusty-craft",
        techs: ["Rust"],
        images: {
            original: rustyCraftImg,
            avif: rustyCraftAvif,
            jxl: rustyCraftJxl
        },
        link: "https://github.com/arthurbambou/rusty-craft",
        dates: {
            start: 2021,
            end: 2021
        },
        role: "role-main-dev"
    },
    {
        name: "Legacy Fabric",
        id: "legacy-fabric",
        techs: ["Java", "Python", "Gradle", "Groovy", "Javalin", "Swing"],
        images: {
            original: legacyFabricImg,
            avif: legacyFabricAvif,
            jxl: legacyFabricJxl
        },
        link: "https://github.com/Legacy-Fabric/",
        dates: {
            start: 2021,
            end: -1
        },
        role: "role-contributor-dev-maintainer"
    },
    {
        name: "Nucleoid",
        id: "nucleoid",
        techs: ["Java", "Rust"],
        images: {
            original: nucleoidImg,
            avif: nucleoidAvif,
            jxl: nucleoidJxl
        },
        link: "https://github.com/NucleoidMC",
        dates: {
            start: 2021,
            end: -1
        },
        role: "role-contributor-dev"
    },
    {
        name: "MultiTeamLauncher",
        id: "multiteam-launcher",
        techs: ["HTML/CSS", "JavaScript", "TypeScript", "ElectronJS", "VueJS"],
        images: {
            original: multiteamImg,
            avif: multiteamAvif,
            jxl: multiteamJxl
        },
        link: "https://github.com/Laz-The-Artist/MultiTeamLauncher",
        dates: {
            start: 2020,
            end: 2022
        },
        role: "role-dev"
    },
    {
        name: "GardenArsenal",
        id: "garden-arsenal",
        techs: ["Java"],
        images: {
            original: gardenArsenalImg,
            avif: gardenArsenalAvif,
            jxl: gardenArsenalJxl
        },
        link: "https://github.com/MultiTeamDevGroup/GardenArsenal",
        dates: {
            start: 2021,
            end: -1
        },
        role: "role-contributor-dev"
    }
]

const skillsList = {
    languages: [
        {
            name: "HTML",
            side: "front"
        },
        {
            name: "CSS/SCSS",
            side: "front"
        },
        {
            name: "JavaScript/TypeScript",
            side: "fullstack",
            frameworks: [
                "NodeJS",
                "DenoJS",
                "ElectronJS",
                "VueJS"
            ]
        },
        {
            name: "WordPress",
            side: "front",
            frameworks: [
                "Divi"
            ]
        },
        {
            name: "Rust",
            side: "back"
        },
        {
            name: "Python",
            side: "back"
        },
        {
            name: "Java",
            side: "fullstack",
            frameworks: [
                "Gradle",
                "Maven",
                "ASM",
                "Minecraft Modding",
                "Mixin",
                "FabricLoader",
                "ForgeModLoader",
                "Javalin",
                "Swing",
            ]
        }
    ],
    tools: [
        "Visual Studio Code",
        "IntelliJ IDEA",
        "Git",
        "Github et Github Actions (CI/CD)",
        "Pack Office"
    ],
    operatingSystems: {
        used: {
            "Windows": [
                "XP",
                "Vista",
                "7",
                "10"
            ],
            "MacOSX": [
                "Lion (10.7)",
                "Mountain Lion (10.8)",
                "Mavericks (10.9)",
                "Yosemite (10.10)",
                "El Capitan (10.11)"
            ],
            "Pop_Os! (Linux)": [
                "20.04",
                "20.10",
                "21.04",
                "21.10",
                "22.04"
            ]
        },
        using: {
            "Windows": ["10"],
            "Pop_Os! (Linux)": ["22.04"]
        },
        main: "Pop_Os! 22.04 (Linux)"
    }
}

export const data: Data = {
    projects: projectsList,
    skills: skillsList
}