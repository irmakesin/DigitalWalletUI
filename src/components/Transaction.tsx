import * as React from "react";
import { IUser } from "../types/IUser";
import "../styles/transaction.scss";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillCamera } from "react-icons/ai";
import { IoLogoGameControllerB } from "react-icons/io";
import moment from "moment";
import { IconType } from "react-icons";

interface TransactionProps {
  readonly transaction: IUser["cards"][0]["transactions"][0];
}

export const Transaction: React.FC<TransactionProps> = ({ transaction }) => {
  const getIconColor = React.useCallback((): string => {
    const colors: { [key: string]: string } = {
      grocery: "rgba(50, 167, 226, 1)",
      entertainment: "rgba(181, 72, 198, 1)",
      equipment: "rgba(255, 135, 0, 1)",
    };

    return colors[transaction.category];
  }, [transaction.category]);

  const getIconByCategory = React.useCallback((): JSX.Element => {
    const icons: { [key: string]: IconType } = {
      grocery: FaShoppingCart,
      entertainment: IoLogoGameControllerB,
      equipment: AiFillCamera,
    };

    const Icon = icons[transaction.category];

    const color = getIconColor();

    return <Icon color={color} />;
  }, [transaction.category, getIconColor]);

  return (
    <div className="transaction-container">
      <div className="transaction-container__left">
        <div
          className={`transaction-container__left__icon ${transaction.category}`}
        >
          {getIconByCategory()}
        </div>
        <div className="transaction-container__flex-box">
          <span className="transaction-container__bold-text">
            {transaction.category}
          </span>
          <span className="transaction-container__light-text">
            {moment(transaction.date).format("MMM YY")}
          </span>
        </div>
      </div>
      <div className="transaction-container__flex-box right">
        <span className="transaction-container__bold-text">
          {transaction.amount}
        </span>
        <span className="transaction-container__light-text">
          {transaction.company}
        </span>
      </div>
    </div>
  );
};
