export type Project = {
    title: string;
    tags: string[];
    disc: string;
    github: string;
    page?: string;
};


const projects: Project[] = [
    {
        title: "Flash Card App",
        tags: ["android", "kotlin"],
        disc: "Flash card app created for university assignment",
        github: "https://github.com/cmpnik/flashcard-app",
    },
    {
        title: "Portfolio Website",
        tags: ["react", "typescript"],
        disc: "Personal portfolio website built using React and TypeScript.",
        github: "https://github.com/cmpnik/my-portfolio",
    },
    // Add more projects here
];

export default projects;
