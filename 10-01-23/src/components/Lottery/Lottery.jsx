import { useState } from "react";
import "./lottery.css";
import { LotteryButton } from "../LotteryButton/LotteryButton";

export function Lottery(props) {
  const [number, setNumber] = useState([]);

  const lotteryButtonClick = () => {
    const newNumber = Math.round(Math.random() * 91);
    setNumber([...number, newNumber]);
  };

  return (
    <div className="lottery_Wrapper">
      <h1 className="lottery_Title">Lotteria!</h1>
      <p className="lottery_par">Numeri estratti:</p>
      <ul className="lottery_list">
        {number.map((num, index) => {
          return <li key={index}>{num}</li>;
        })}
      </ul>
      <LotteryButton
        className="lottery_Btn"
        clickHandler={lotteryButtonClick}
        {...(number.length >= 6 ? { isDisabled: true } : { isDisabled: false })}
      />
    </div>
  );
}
