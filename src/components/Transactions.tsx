import * as React from "react";
import "../styles/transactions.scss";
import { IUser } from "../types/IUser";
import { CurrencyDropdown } from "./CurrencyDropdown";
import { Transaction } from "./Transaction";

interface TransactionsProps {
  readonly selectedCard: IUser["cards"][0];
}

export const Transactions: React.FC<TransactionsProps> = ({ selectedCard }) => {
  const [selectedCurrency, setSelectedCurrency] = React.useState("USD");

  const getCurrentCurrencySymbol = React.useCallback((): string => {
    const symbols: { [key: string]: string } = {
      TL: "₺",
      USD: "$",
      EUR: "€",
      CHF: "CHF",
    };

    return symbols[selectedCurrency];
  }, [selectedCurrency]);

  const getFormattedMoney = React.useCallback((): string => {
    const [main, sub] = selectedCard.amount.split(".");
    const formattedMain = main?.match(/.{1,3}/g)?.join(".") || main;

    return `${formattedMain},${sub}${getCurrentCurrencySymbol()}`;
  }, [selectedCard.amount, getCurrentCurrencySymbol]);

  const handleChangeCurrency = React.useCallback(
    (currency: string): void => {
      setSelectedCurrency(currency);
    },
    [setSelectedCurrency]
  );

  return (
    <div className="transactions-container">
      <div className="transactions-container__header">
        <div className="transactions-container__header__left">
          <div className="transactions-container__header__left__title">
            Your Balance
          </div>
          <div className="transactions-container__header__left__balance">
            {getFormattedMoney()}
          </div>
        </div>

        <CurrencyDropdown
          currentCurrency={selectedCurrency}
          handleChangeCurrency={handleChangeCurrency}
        />
      </div>

      <div className="transactions-container__body">
        <div className="transactions-container__body__title">Transactions</div>

        {selectedCard.transactions.map((transaction, index) => (
          <Transaction key={index} transaction={transaction} />
        ))}
      </div>
    </div>
  );
};
