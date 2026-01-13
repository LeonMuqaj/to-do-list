export interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
  updatedAt: Date;
  dueDate?: Date;
  tags?: string[];
}

export interface TodoFilter {
  status: 'all' | 'active' | 'completed';
  priority?: 'low' | 'medium' | 'high';
  search?: string;
}

export interface TodoStore {
  todos: Todo[];
  filter: TodoFilter;
  hydrated: boolean;
  addTodo: (todo: Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateTodo: (id: string, updates: Partial<Todo>) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  setFilter: (filter: Partial<TodoFilter>) => void;
  clearCompleted: () => void;
  getTodos: () => void;
  getFilteredTodos: () => Todo[];
  setHydrated: (hydrated: boolean) => void;
}
