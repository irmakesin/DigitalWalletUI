import * as React from "react";
import "../styles/transactions.scss";
import { ICurrencyExchangeRates } from "../types/ICurrencyExchangeRates";
import { IUser } from "../types/IUser";
import { CurrencyDropdown } from "./CurrencyDropdown";
import { Transaction } from "./Transaction";

interface TransactionsProps {
  readonly selectedCard: IUser["cards"][0];
  readonly currencies: ICurrencyExchangeRates;
}

export const Transactions: React.FC<TransactionsProps> = ({
  selectedCard,
  currencies,
}) => {
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

  const getMoneyByCurrency = React.useCallback(() => {
    if (selectedCurrency === "USD") {
      return selectedCard.amount;
    } else if (selectedCurrency === "EUR") {
      return +selectedCard.amount * +currencies.usdToEuro;
    } else if (selectedCurrency === "CHF") {
      return +selectedCard.amount * +currencies.usdToChf;
    }
    return +selectedCard.amount * +currencies.usdToTry;
  }, [selectedCurrency, selectedCard, currencies]);

  const getFormattedMoney = React.useCallback((): string => {
    const money = getMoneyByCurrency().toString();

    const formattedMain = Intl.NumberFormat(undefined, {
      currencySign: "accounting",
    }).format(+money)

    return `${formattedMain}${getCurrentCurrencySymbol()}`;
  }, [getCurrentCurrencySymbol, getMoneyByCurrency]);

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
