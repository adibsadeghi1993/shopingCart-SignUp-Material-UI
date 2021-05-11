import "./sms.css";
import { React, useState, useEffect } from "react";
const INITIAL_TIMER = 10;

const SmsValidation = ({ phone }) => {
  const [code, setCode] = useState("");
  const [timer, setTimer] = useState(INITIAL_TIMER);
  const [isWrong, setIsWrong] = useState(false);
  const [newNumber,setNewNumber] = useState("");

  useEffect(() => {
    const interval =
      timer > 0 && setInterval(() => setTimer((prev) => prev - 1), 1000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [timer]);

  const changeHandler = (e) => {
    setCode(e.target.value);
  };

  const verifyHandler = () => {
    console.log(`verify: ${newNumber||phone}`);
    setTimer(INITIAL_TIMER);
  };
  const resendCodeHandler = () => {
    console.log(`send code to ${newNumber||phone}`);
    setTimer(INITIAL_TIMER);
  };

  const changeNumberHandler = () => {
    setIsWrong(true);
  };

  const newNumberHandler = (e) => {
    setNewNumber(e.target.value);
  };

  const clickHandler = () => {
    setIsWrong(false);
    console.log(`send code to ${newNumber||phone}`)
  };

  const resendLogic = timer ? (
    <p>you could request new code after: {timer}</p>
  ) : (
    <div style={{ padding: "15px" }} onClick={resendCodeHandler}>
      resend code 
    </div>
  );

  return (
    <div className="sms">
      {isWrong ? (
        <>
          <p>enter new number</p>
          <input type="text" value={newNumber} onChange={newNumberHandler} />
          <button onClick={clickHandler}>send varification number</button>
        </>
      ) : (
        <>
          <h3>please enter sms code</h3>

          {resendLogic}
          <input className="smsInput" value={code} onChange={changeHandler} />

          <button onClick={verifyHandler} className="button">
            confirm
          </button>

          <p onClick={changeNumberHandler}> if you want to change your phone click here </p>
        </>
      )}
    </div>
  );
};

export default SmsValidation;
