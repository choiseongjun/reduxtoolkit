import React, { useState } from "react";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync
} from "../redux/slice/counterSlice";
import styles from "./Counter.module.css";
import { useDispatch, useSelector } from 'react-redux'


function Counter() {
  const [incrementAmount, setIncrementAmount] = useState("2");
  const dispatch = useDispatch()//보낼떄 쓰는거에요 //setState   useSelector->변수를 가져올떄 쓰는거 
  const count = useSelector((state) => state.counter)


  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span className={styles.value}>{count.value}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)) || 0)}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount)) || 0)}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}


export default (Counter);
