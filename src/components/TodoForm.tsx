'use client';

import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import useTodoStore from '@/lib/store';
import TodoList from './TodoList';
import EditTaskModal from './EditTaskModal';
import { Todo } from '@/types/todo';
import CustomButton from '@/themes/CustomButton';
import {
  FormPaper,
  FormTypography,
  FormRoot,
  FormRowBox,
  FormTextField,
  ButtonWrapper,
} from '@/themes/TodoFormTheme';

// Adjusted margin-top to match the spacing in the design
const StyledTodoListBox = styled('div')`
  width: 100%;
  margin-top: 24px; // Reduced from 40px
`;

const TodoForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const { addTodo } = useTodoStore();

  const [editOpen, setEditOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Todo | null>(null);



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;

    addTodo({
      title: trimmedTitle,
      completed: false,
      priority: 'medium',
    });

    setTitle('');
  };

  const handleEdit = (task: Todo) => {
    setSelectedTask(task);
    setEditOpen(true);
  };

  const handleCloseModal = () => {
    setEditOpen(false);
    setSelectedTask(null);
  };

  return (
    <FormPaper elevation={0}>
      <FormTypography>Add a task here:</FormTypography>

      <FormRoot onSubmit={handleSubmit}>
        <FormRowBox>
          {/* Inputi është shumë më i gjerë */}
          <FormTextField
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task title"
          />

          {/* Butoni i vogël në të djathtë */}
          <ButtonWrapper>
            <CustomButton
              type="submit"
              customVariant="primary"
              width='62px'
              height='44px'
              borderRadius='12px'

            >
              Add
            </CustomButton>
          </ButtonWrapper>
        </FormRowBox>
      </FormRoot>

      <StyledTodoListBox>
        {/* Adjusted typography for the "Task list:" label to match the "Add a task here:" label */}
        <p className="font-Figtree text-[16px] font-400 mb-2 text-gray-700">Task list:</p>
        <TodoList onEdit={handleEdit} />
      </StyledTodoListBox>

      {editOpen && selectedTask && (
        <EditTaskModal
          open={editOpen}
          onClose={handleCloseModal}
          todo={selectedTask}
          onSave={(updatedTitle: string) => {
            useTodoStore.getState().updateTodo(selectedTask.id, { title: updatedTitle });
            handleCloseModal();
          }}
        />
      )}
    </FormPaper>
  );
};

export default TodoForm;