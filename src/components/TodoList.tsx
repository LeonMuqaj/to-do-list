import React from 'react';
import useTodoStore from '@/lib/store';
import TodoItem from './TodoItem';
import { Todo } from '@/types/todo';

// Two usage modes:
// 1) Default (no items/renderItem): uses store todos and renders TodoItem
// 2) Custom (items + renderItem provided): renders arbitrary items

type DefaultModeProps = {
  items?: undefined;
  renderItem?: undefined;
  onEdit: (item: Todo) => void;
};

type CustomModeProps<T> = {
  items: T[];
  renderItem: (item: T, onEdit: (item: T) => void) => React.ReactNode;
  onEdit: (item: T) => void;
};

type TodoListProps<T = Todo> = DefaultModeProps | CustomModeProps<T>;

function isCustom<T>(p: TodoListProps<T>): p is CustomModeProps<T> {
  return (p as CustomModeProps<T>).items !== undefined && (p as CustomModeProps<T>).renderItem !== undefined;
}

function TodoList<T = Todo>(props: TodoListProps<T>) {
  const todos = useTodoStore((state) => state.todos);

  if (!isCustom<T>(props)) {
    if (!todos || todos.length === 0) {
      return <p>No items yet.</p>;
    }

    return (
      <>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onEdit={props.onEdit} />
        ))}
      </>
    );
  }

  // Custom mode
  const { items, renderItem, onEdit } = props;

  if (items.length === 0) {
    return <p>No items yet.</p>;
  }

  return <>{items.map((item) => renderItem(item, onEdit))}</>;
}

export default TodoList;
