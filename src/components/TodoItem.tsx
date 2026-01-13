'use client';

import React, { useState } from 'react';
import useTodoStore from '@/lib/store';
import { Todo } from '@/types/todo';
import EditTaskModal from './EditTaskModal';
import DeleteTaskModal from './DeleteTaskModal';

import EditIcon from '@/assets/EditIcon';
import DeleteIcon from '@/assets/DeleteIcon';
import CheckIcon from '@/assets/CheckIcon';
import Label from '@/themes/Label';
import { TodoItemPaper } from '@/themes/TodoItemTheme';

interface TodoItemProps {
  todo: Todo;
  onEdit: (item: Todo) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onEdit }) => {
  const { toggleTodo, deleteTodo, updateTodo } = useTodoStore();
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <>
      <TodoItemPaper
        itemVariant={todo.completed ? 'completed' : 'default'}
        className={`flex items-center justify-between pl-2 pr-0 py-3 border rounded-xl transition ${
          todo.completed
            ? 'bg-green-50 border-green-200'
            : 'bg-white-25 border-gray-200'
        }`}
      >
        {/* Checkbox + Titulli */}
        <div className="flex items-center gap-3">
          {/* Checkbox */}
          <button
            onClick={() => toggleTodo(todo.id)}
            className={`w-5 h-5 flex items-center justify-center rounded-full border-2 transition-all duration-200 ${
              todo.completed
                ? 'bg-white border-[#079455]'
                : 'bg-white border-[#717680]'
            }`}
            aria-pressed={todo.completed}
            aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
          >
            {todo.completed && <CheckIcon width="20" height="20" />}
          </button>

          {/* Titulli */}
          <Label completed={todo.completed}>{todo.title}</Label>
        </div>

        {/* Butonat për Edit dhe Delete */}
        <div className="flex items-center gap-0 mr-0">
          <button
            onClick={() => onEdit(todo)}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition"
            aria-label="Edit task"
          >
            <EditIcon />
          </button>
          <button
            onClick={() => setIsDeleting(true)}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-red-50 transition"
            aria-label="Delete task"
          >
            <DeleteIcon />
          </button>
        </div>
      </TodoItemPaper>

      {/* Modal për Edit */}
      {isEditing && (
        <EditTaskModal
          open={isEditing}
          onClose={() => setIsEditing(false)}
          todo={todo}
          onSave={(updatedTitle) => {
            updateTodo(todo.id, { title: updatedTitle });
            setIsEditing(false);
          }}
        />
      )}

      {/* Modal për Delete */}
      {isDeleting && (
        <DeleteTaskModal
          open={isDeleting}
          onClose={() => setIsDeleting(false)}
          onConfirm={() => {
            deleteTodo(todo.id);
            setIsDeleting(false);
          }}
        />
      )}
    </>
  );
};

export default TodoItem;


