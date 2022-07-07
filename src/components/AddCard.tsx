import * as React from "react";
import "../styles/add-card.scss";
import { IUser } from "../types/IUser";
import { Modal } from "./Modal";

interface AddCardProps {
  readonly user: IUser;
  readonly setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

export const AddCard: React.FC<AddCardProps> = ({ user, setUser }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="add-card-container">
      <button className="add-card-container__button" onClick={handleOpenModal}>
        <span>+</span> <span>Add Card</span>
      </button>

      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        currentUser={user}
        setUser={setUser}
      />
    </div>
  );
};
