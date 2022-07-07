import * as React from "react";
import "../styles/dropdown.scss";
import { AiOutlineDown } from "react-icons/ai";

interface CurrencyDropdownProps {
  readonly currentCurrency: string;
  readonly handleChangeCurrency: (currency: string) => void;
}

const currencies = ["TL", "USD", "EUR", "CHF"];

export const CurrencyDropdown: React.FC<CurrencyDropdownProps> = ({
  currentCurrency,
  handleChangeCurrency,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = React.useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <div className="dropdown-container">
      <div className="dropdown-container__button" onClick={toggleDropdown}>
        {currentCurrency}{" "}
        <AiOutlineDown className={`${isOpen ? "active" : null}`} />
      </div>
      <div
        className={`dropdown-container__dropdown ${isOpen ? "active" : null}`}
      >
        {currencies.map((currency) => (
          <div
            className="dropdown-container__dropdown__item"
            key={currency}
            onClick={() => {
              handleChangeCurrency(currency);
              toggleDropdown();
            }}
          >
            {currency}
          </div>
        ))}
      </div>
    </div>
  );
};
