'use client';

import React, { useEffect } from 'react';
import ModalWrapper from '@/themes/ModalWrapper';
import ModalContent from '@/themes/ModalContent';
import CustomButton from '@/themes/CustomButton';
import DeleteIconBox from '@/assets/DeleteIconBox';

interface DeleteTaskModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  description?: string;
}

const DeleteTaskModal: React.FC<DeleteTaskModalProps> = ({
  open,
  onClose,
  onConfirm,
  title = 'Delete task',
  description = 'Are you sure you want to delete this task? This action cannot be undone!',
}) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        onConfirm();
      }
    };

    if (open) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onConfirm]);

  const buttons = (
    <>
      <CustomButton customVariant="secondary" onClick={onClose} height="44px" className="flex-1">
        Cancel
      </CustomButton>



      <CustomButton customVariant="danger" onClick={onConfirm} height="44px" className="flex-1">
        Delete
      </CustomButton>
    </>
  );

  return (
    <ModalWrapper open={open} onClose={onClose}>
      <ModalContent
        title={title}
        description={description}
        onClose={onClose}
        buttons={buttons}
        icon={<DeleteIconBox />}
      />
    </ModalWrapper>
  );
};

export default DeleteTaskModal;
