import * as React from "react";
import "../styles/add-card.scss";

interface AddCardProps {}

export const AddCard: React.FC<AddCardProps> = () => {
  return (
    <div className="add-card-container">
      <button className="add-card-container__button">
        <span>+</span> <span>Add Card</span>
      </button>
    </div>
  );
};
