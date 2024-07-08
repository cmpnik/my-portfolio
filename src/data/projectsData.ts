import Project from '../types/project'
import helicopterImage from '../images/helicopter.png'

const projectsData: Project[] = [
    {
        id: 1,
        title: 'Helicopter Rig Control Project',
        description: 'Collaboratively developed embedded systems project for university.',
        tags: ['Embedded systems', 'C'],
        repository: 'https://github.com/example/project2',
        page: '/helicopter',
        image: helicopterImage
    }
];

export default projectsData;