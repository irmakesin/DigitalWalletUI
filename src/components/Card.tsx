import * as React from "react";
import "../styles/card.scss";
import { IUser } from "../types/IUser";

interface CardProps {
  readonly card: IUser["cards"][0];
  readonly userName: string;
}

export const Card: React.FC<CardProps> = ({ card, userName }) => {
  const renderDate = () => {
    const date = new Date(card.cardExpiration);
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const monthString = month < 10 ? `0${month}` : month;
    const yearString = year.toString().slice(-2);
    return `${monthString}/${yearString}`;
  };

  const getCardLogo = React.useCallback(() => {
    if (card.cardNumber.startsWith("5")) {
      return "https://logos-download.com/wp-content/uploads/2016/03/Mastercard_Logo_2019-1536x949.png";
    }
    return "https://marka-logo.com/wp-content/uploads/2020/04/Visa-Logo.png";
  }, [card.cardNumber]);

  return (
    <div className="card">
      <div className="card__logo-container">
        <img className="card__logo" src={getCardLogo()} alt="logo" />
      </div>
      <div className="card__number">{card.cardNumber.replaceAll("-", " ")}</div>

      <div className="card__bottom">
        <div className="card__bottom__two-line">
          <span className="card__bottom__two-line__title">Name</span>
          <span className="card__bottom__two-line__value">{userName}</span>
        </div>
        <div className="card__bottom__two-line">
          <span className="card__bottom__two-line__title">Valid Till</span>
          <span className="card__bottom__two-line__value">{renderDate()}</span>
        </div>
      </div>
    </div>
  );
};
