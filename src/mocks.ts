import { IUser } from "./types/IUser";

export const user: IUser = {
  createdAt: "2022-05-26T15:33:08.583Z",
  firstName: "zayn",
  lastName: "malik",
  gender: "male",
  currencyExchangeRates: {
    usdToChf: "16.30",
    usdToEuro: "0.93",
    usdToTry: "0.96",
  },
  cards: [
    {
      amount: "290.36",
      cardNumber: "4581-2051-8082-3170",
      cardExpiration: "2022-10-08T08:59:13.055Z",
      cardCvv: "792",
      transactions: [
        {
          amount: "801.87",
          category: "entertainment",
          company: "Kris, Greenfelder and Stokes",
          date: "2021-12-17T12:47:58.761Z",
        },
        {
          amount: "298.82",
          category: "grocery",
          company: "Reichert Inc",
          date: "2021-12-13T18:52:57.535Z",
        },
        {
          amount: "995.96",
          category: "equipment",
          company: "Fay, Schultz and Hegmann",
          date: "2022-03-10T13:11:59.273Z",
        },
      ],
    },
  ],
  id: "79467853",
};
