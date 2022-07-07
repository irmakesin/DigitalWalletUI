import * as React from "react";
import { AddCard } from "./components/AddCard";
import { BottomBar } from "./components/BottomBar";
import { Cards } from "./components/Cards";
import { Title } from "./components/Title";
import { Transactions } from "./components/Transactions";
import { user } from "./mocks";
import "./styles/main.scss";

function App() {
  return (
    <div className="container">
      <div>
        <Title name={`${user.firstName} ${user.lastName}`} />

        <Cards user={user} />

        <AddCard />
      </div>

      <Transactions selectedCard={user.cards[0]} />

      <BottomBar />
    </div>
  );
}

export default App;
