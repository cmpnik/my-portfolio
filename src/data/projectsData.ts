import Project from '../types/project'

const projectsData: Project[] = [
    {
        id: 1,
        title: 'Project 1',
        description: 'Description for Project 1',
        tags: ['Web development', 'React', 'Typescript'],
        repository: 'https://github.com/example/project1',
        page: '/projects/project1'
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'Description for Project 2',
        tags: ['Embedded systems', 'C'],
        repository: 'https://github.com/example/project2',
        page: '/projects/project2'
    }
];

export default projectsData;