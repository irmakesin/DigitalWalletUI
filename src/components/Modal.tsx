import axios from "axios";
import * as React from "react";
import "../styles/modal.scss";
import { IUser } from "../types/IUser";
import {
  formatForCCExp,
  getDateFromCCExp,
  getFormattedCardNumber,
} from "../utilties/stringUtilities";

interface ModalProps {
  readonly isOpen: boolean;
  readonly currentUser: IUser;
  readonly onClose: () => void;
  readonly setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  currentUser,
  setUser,
  onClose,
}) => {
  const [newCard, setNewCard] = React.useState<IUser["cards"][0]>({
    cardNumber: "",
    amount: "",
    cardCvv: "",
    cardExpiration: "",
    transactions: [],
  });

  const handlePreventClose = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCard({ ...newCard, [name]: value });
  };

  const handleChangeExpDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const formattedValue = formatForCCExp(value);

    setNewCard({ ...newCard, [name]: formattedValue });
  };

  const handleSaveCard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newCardData: IUser["cards"][0] = {
      ...newCard,
      cardNumber: getFormattedCardNumber(newCard.cardNumber),
      cardExpiration: getDateFromCCExp(newCard.cardExpiration),
    };

    const newUserData = {
      ...currentUser,
      cards: [...currentUser.cards, newCardData],
    };

    axios
      .put(
        "https://62c3ed4d7d83a75e39eac178.mockapi.io/user/123599235",
        newUserData
      )
      .then(() => {
        setNewCard({
          cardNumber: "",
          amount: "",
          cardCvv: "",
          cardExpiration: "",
          transactions: [],
        });
        setUser(newUserData);
      });
  };

  return (
    <div className={`add-card-modal ${isOpen ? "open" : ""}`} onClick={onClose}>
      <form
        className="add-card-modal__content"
        onClick={handlePreventClose}
        onSubmit={handleSaveCard}
      >
        <div className="add-card-modal__close-button">
          <button type="button" onClick={onClose}>
            X
          </button>
        </div>
        <h1>Add Card</h1>
        <label>
          Cardholder Name
          <input type="text" placeholder="Enter your name as written on card" />
        </label>
        <label>
          Card Number
          <input
            type="text"
            name="cardNumber"
            placeholder="Enter your card number"
            onChange={handleChange}
            value={newCard.cardNumber}
            maxLength={16}
          />
        </label>
        <div className="add-card-modal__content__row">
          <label>
            cvv/cvc
            <input
              type="text"
              name="cardCvv"
              placeholder="123"
              onChange={handleChange}
              value={newCard.cardCvv}
              maxLength={3}
            />
          </label>
          <label>
            Exp. Date
            <input
              type="text"
              name="cardExpiration"
              placeholder="10/25"
              maxLength={5}
              onChange={handleChangeExpDate}
              value={newCard.cardExpiration}
            />
          </label>
        </div>
        <button type="submit">Add Card</button>
      </form>
    </div>
  );
};
