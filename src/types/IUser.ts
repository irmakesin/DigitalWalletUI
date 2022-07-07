import { ICard } from "./ICard";
import { ICurrencyExchangeRates } from "./ICurrencyExchangeRates";

export interface IUser {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly gender: string;
  readonly currencyExchangeRates: ICurrencyExchangeRates;
  readonly cards: ICard[];
  readonly createdAt: string;
}
