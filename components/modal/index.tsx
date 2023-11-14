import React, { Dispatch, SetStateAction } from "react";
import { XMarkIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
type ModalProps = {
  title?: string;
  children: React.ReactNode;
  toggleModal: boolean;
  setToggleModal: Dispatch<SetStateAction<boolean>>;
  handleBackBtn?: () => void;
  backBtn?: boolean;
  closeBtn?: boolean;
};
const Modal: React.FC<ModalProps> = (props) => {
  const {
    setToggleModal,
    toggleModal,
    children,
    title,
    closeBtn,
    backBtn,
    handleBackBtn,
  } = props;
  return (
    <div
      className={`w-full max-h-[90%] overflow-auto transition-all ease-in-out duration-700 ${
        toggleModal
          ? "fixed opacity-100"
          : "fixed translate-y-[-400px] opacity-0"
      }`}
    >
      <div className="relative w-max max-w-[90%] m-auto h-max bg-purple-100 p-3 rounded-lg flex flex-col justify-center items-center gap-4">
        {closeBtn && (
          <XMarkIcon
            className="absolute w-4 right-4 top-4 cursor-pointer"
            onClick={() => setToggleModal(false)}
          />
        )}
        {backBtn && (
          <ChevronLeftIcon
            className="absolute w-4 left-4 top-4 cursor-pointer"
            onClick={() => {
              handleBackBtn && handleBackBtn();
              setToggleModal(false);
            }}
          />
        )}
        <span className="text-lg mx-auto">{title}</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
