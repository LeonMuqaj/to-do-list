'use client';

import React, { useState, useEffect } from 'react';
import ModalWrapper from '@/themes/ModalWrapper';
import ModalContent from '@/themes/ModalContent';
import CustomButton from '@/themes/CustomButton';
import EditIconBox from '@/assets/EditIconBox';

interface EditTaskModalProps {
  open: boolean;
  onClose: () => void;
  todo: { id: string; title: string };
  onSave: (updatedTitle: string) => void;
  title?: string;
  description?: string;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({
  open,
  onClose,
  todo,
  onSave,
  title = 'Edit task',
  description = 'Below you can change the title of the task',
}) => {
  const [editedTitle, setEditedTitle] = useState(todo.title);

  useEffect(() => {
    setEditedTitle(todo.title);
  }, [todo]);

  const handleSave = () => {
    if (editedTitle.trim()) {
      onSave(editedTitle.trim());
      onClose();
    }
  };

  const buttons = (
    <>
      <CustomButton customVariant="secondary" onClick={onClose} width="195px" height="44px">
        Cancel
      </CustomButton>



      <CustomButton customVariant="primary" onClick={handleSave} width="195px" height="44px" disabled={!editedTitle.trim() || editedTitle.trim() === todo.title}>
        Save
      </CustomButton>
    </>
  );

  return (
    <ModalWrapper open={open} onClose={onClose}>
      <ModalContent title={title} description={description} onClose={onClose} buttons={buttons} icon={<EditIconBox />} width="450px" height="308px">
        <input
          className="w-full h-10 rounded-xl border border-gray-300 bg-white px-3 text-gray-900 placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-blue-500 mt-4 mb-4"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          onKeyDown={(e) => {
            if (
              e.key === 'Enter' &&
              !e.shiftKey &&
              editedTitle.trim() &&
              editedTitle.trim() !== todo.title
            ) {
              e.preventDefault();
              handleSave();
            }
          }}
          placeholder="Task title"
        />
      </ModalContent>
    </ModalWrapper>
  );
};

export default EditTaskModal;
