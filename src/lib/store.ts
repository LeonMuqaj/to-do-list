import { Todo, TodoStore } from '@/types/todo';
import axios from 'axios';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type StoreType = TodoStore & { hydrated: boolean };

const useTodoStore = create<StoreType>()(
  persist(
    (set, get) => ({
      todos: [],
      hydrated: false,
      filter: {
        status: 'all',
        priority: undefined,
        search: '',
      },
        
      getTodos:async () => {
          try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      console.log(res)
      const users = res.data.slice(0,20);
           set(() => ({
          todos: users
        }));
    } catch (error) {
      console.log(error)
    }

      },
      addTodo: (todoData) => {
        const newTodo: Todo = {
          ...todoData,
          id: crypto.randomUUID(),
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        set((state) => ({
          todos: [newTodo, ...state.todos],
        }));
      },

      updateTodo: (id, updates) => {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id
              ? { ...todo, ...updates, updatedAt: new Date() }
              : todo
          ),
        }));
      },

      deleteTodo:async (id) => {
        try {
          const res = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
          console.log(res)
          set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
          }));
        } catch (error) {
          console.log(error)
        }
      },

      toggleTodo: (id) => {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id
              ? { ...todo, completed: !todo.completed, updatedAt: new Date() }
              : todo
          ),
        }));
      },

      setFilter: (newFilter) => {
        set((state) => ({
          filter: { ...state.filter, ...newFilter },
        }));
      },

      clearCompleted: () => {
        set((state) => ({
          todos: state.todos.filter((todo) => !todo.completed),
        }));
      },

      setHydrated: (hydrated: boolean) => {
        set({ hydrated });
      },

      getFilteredTodos: () => {
        const { todos, filter } = get();
        return todos.filter((todo) => {
          // Status filter
          if (filter.status === 'active' && todo.completed) return false;
          if (filter.status === 'completed' && !todo.completed) return false;

          // Priority filter
          if (filter.priority && todo.priority !== filter.priority) return false;

          // Search filter
          if (filter.search) {
            const searchLower = filter.search.toLowerCase();
            const matchesTitle = todo.title.toLowerCase().includes(searchLower);
            const matchesDescription = todo.description?.toLowerCase().includes(searchLower) || false;
            if (!matchesTitle && !matchesDescription) return false;
          }

          return true;
        });
      },
    }),
    {
      name: 'todo-storage',
      partialize: (state) => ({ todos: state.todos }),
      onRehydrateStorage: () => (state, error) => {
        if (state) {
          // Convert date strings back to Date objects when loading from localStorage
          state.todos = state.todos.map(todo => ({
            ...todo,
            createdAt: new Date(todo.createdAt),
            updatedAt: new Date(todo.updatedAt),
            dueDate: todo.dueDate ? new Date(todo.dueDate) : undefined,
          }));
        }
        // Set hydrated to true after rehydration
        state?.setHydrated && state.setHydrated(true);
      },
    }
  )
);

export default useTodoStore;
