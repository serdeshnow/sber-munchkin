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
    placement="center"
    className="h-auto w-[92vw] sm:w-96 md:w-[30rem] rounded-2xl p-6 bg-dark-gray-500 mx-auto"
  >
    <ModalContent className="max-h-[80vh]">
      {title && (
        <ModalHeader className="p-0 pb-4 self-center text-xl sm:text-2xl font-bold text-center">
          {title}
        </ModalHeader>
      )}
      <ModalBody className="overflow-y-auto p-0">{children}</ModalBody>
    </ModalContent>
  </HeroModal>
);
