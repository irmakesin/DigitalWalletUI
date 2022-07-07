import axios from "axios";
import * as React from "react";
import { AddCard } from "./components/AddCard";
import { BottomBar } from "./components/BottomBar";
import { Cards } from "./components/Cards";
import { Title } from "./components/Title";
import { Transactions } from "./components/Transactions";
import "./styles/main.scss";
import { IUser } from "./types/IUser";

function App() {
  const [user, setUser] = React.useState<IUser | null>(null);
  React.useEffect(() => {
    axios
      .get("https://62c3ed4d7d83a75e39eac178.mockapi.io/user/123599235")
      .then((res) => setUser(res.data));
  }, []);

  if (!user) {
    return null;
  }

  return (
    <div className="container">
      <div>
        <Title
          name={`${user.firstName} ${user.lastName}`}
          gender={user.gender}
        />

        <Cards user={user} />

        <AddCard user={user} setUser={setUser} />
      </div>

      <Transactions
        selectedCard={user.cards[0]}
        currencies={user.currencyExchangeRates}
      />

      <BottomBar />
    </div>
  );
}

export default App;
