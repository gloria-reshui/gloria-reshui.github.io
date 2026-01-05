interface Project {
    title: string;
    description: string;
    techStack: string[];
    githubUrl?: string;
    demoUrl?: string;
    progress?: number;
    detailUrl?: string;
}

export const projects: Project[] = [];