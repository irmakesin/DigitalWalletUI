import { ITransaction } from "./ITransaction";

export interface ICard {
  readonly amount: string;
  readonly cardNumber: string;
  readonly cardExpiration: string;
  readonly cardCvv: string;
  readonly transactions: ITransaction[];
}
