import React from 'react';
import { Modal as HeroModal, ModalContent, ModalHeader, ModalBody } from '@heroui/react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => (
  <HeroModal
    isOpen={isOpen}
    onClose={onClose}
    scrollBehavior="inside"
    className="min-w-lg rounded-3xl px-13 py-9 bg-dark-gray-500"
  >
    <ModalContent className="max-h-[80vh]">
      {title && (
        <ModalHeader className="p-0 pb-5 self-center text-2xl font-bold">
          {title}
        </ModalHeader>
      )}
      <ModalBody className="overflow-y-auto p-0">{children}</ModalBody>
    </ModalContent>
  </HeroModal>
);
