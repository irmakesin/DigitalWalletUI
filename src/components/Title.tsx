import * as React from "react";
import "../styles/title.scss";

interface TitleProps {
  readonly name: string;
  readonly gender: string;
}

export const Title: React.FC<TitleProps> = ({ name, gender }) => {
  const welcomeMessage = React.useMemo(() => {
    const now = new Date();
    const hours = now.getHours();
    console.log(hours);
    if (hours > 6 && hours < 12) {
      return "Good morning";
    } else if (hours >= 12 && hours < 18) {
      return "Good afternoon";
    } else if (hours >= 18 || hours < 6) {
      return "Good evening";
    }
  }, []);

  const personalTitle = React.useMemo(() => {
    if (gender === "female") {
      return "Mrs.";
    } else if (gender === "male") {
      return "Mr.";
    }

    return "";
  }, [gender]);

  return (
    <div className="title-container">
      <div className="light-text">{welcomeMessage}</div>
      <div className="bold-text">
        {personalTitle} {name}
      </div>
    </div>
  );
};
