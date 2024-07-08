interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    repository: string;
    page?: string; // Optional property
    image?: string;
  }
  
export default Project