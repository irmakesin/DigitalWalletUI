import * as React from "react";
import { Card } from "./Card";
import "../styles/cards.scss";
import { IUser } from "../types/IUser";

interface CardsProps {
  readonly user: IUser;
}

export const Cards: React.FC<CardsProps> = ({ user }) => {
  return (
    <div className="cards">
      <div className="cards__title">Credit Cards</div>
      {user.cards.map((card, index) => (
        <Card
          key={index}
          card={card}
          userName={`${user.firstName} ${user.lastName}`}
        />
      ))}
    </div>
  );
};
