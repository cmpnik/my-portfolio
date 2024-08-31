export type Project = {
    img: string;
    title: string;
    tags: string[];
    disc: string;
    github: string;
    page: string;
};


const projects: Project[] = [
    {
        img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/android-studio-icon.png",
        title: "Flash Card App",
        tags: ["android", "kotlin"],
        disc: "Flash card app created for university assignment",
        github: "https://github.com/",
        page: "#"
    },
    {
        img: "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/react-3.png",
        title: "Portfolio Website",
        tags: ["react", "typescript"],
        disc: "Personal portfolio website built using React and TypeScript.",
        github: "https://github.com/",
        page: ""
    },
    // Add more projects here
];

export default projects;
