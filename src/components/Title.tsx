import * as React from "react";
import "../styles/title.scss";

interface TitleProps {
  readonly name: string;
}

export const Title: React.FC<TitleProps> = ({ name }) => {
  return (
    <div className="title-container">
      <div className="light-text">Good Morning</div>
      <div className="bold-text">Mr. {name}</div>
    </div>
  );
};
