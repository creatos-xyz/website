import { ReactNode, useState } from "react";

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [Modal, setModalContent] = useState<string | ReactNode>("");

  const openModal = (content: string | ReactNode) => {
    setIsModalOpen(true);
    setModalContent(content);
    console.log("modal opened");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    Modal,
    openModal,
    closeModal,
  };
};
