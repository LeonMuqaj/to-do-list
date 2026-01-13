import { Todo } from '@/types/todo';

export const demoTodos: Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>[] = [
  {
    title: 'Complete project documentation',
    description: 'Write comprehensive documentation for the todo app including setup instructions, features, and usage examples.',
    priority: 'high',
    completed: false,
    dueDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
  },
  {
    title: 'Review code with team',
    description: 'Schedule a code review session with the development team to get feedback on the implementation.',
    priority: 'medium',
    completed: false,
    dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
  },
  {
    title: 'Set up testing environmenlucidt',
    description: 'Configure Jest and React Testing Library for unit and integration tests.',
    priority: 'medium',
    completed: true,
  },
  {
    title: 'Learn TypeScript basics',
    description: 'Complete the TypeScript fundamentals course to better understand type safety.',
    priority: 'low',
    completed: false,
  },
  {
    title: 'Design user interface mockups',
    description: 'Create wireframes and mockups for the todo app using Figma.',
    priority: 'high',
    completed: true,
  },
  {
    title: 'Implement dark mode toggle',
    description: 'Add a toggle button to switch between light and dark themes.',
    priority: 'low',
    completed: false,
    dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
  },
  {
    title: 'Write unit tests',
    description: 'Create comprehensive unit tests for all components and utility functions.',
    priority: 'medium',
    completed: false,
  },
  {
    title: 'Deploy to production',
    description: 'Set up CI/CD pipeline and deploy the application to a production environment.',
    priority: 'high',
    completed: false,
    dueDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days from now
  },
];


