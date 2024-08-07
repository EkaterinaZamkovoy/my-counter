import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Button } from "./Button";

type controlCounterPropsType = {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleMaxValueChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleStartValueChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setToLocalStorageHandler: () => void;
  maxValue: number;
  startValue: number;
  error: string;
};

export const ControlCounter = ({
  maxValue,
  startValue,
  error,
  handleSubmit,
  handleMaxValueChange,
  handleStartValueChange,
  setToLocalStorageHandler,
}: controlCounterPropsType) => {
  return (
    <div className="counter">
      <div className="display">
        <form onSubmit={handleSubmit}>
          <div className="wrap">
            <label htmlFor="maxValue">maxValue: </label>
            <input
              type="number"
              onChange={handleMaxValueChange}
              value={maxValue}
              className={error ? "input-error" : ""}
            />
          </div>
          <div className="wrap">
            <label htmlFor="startValue">startValue: </label>
            <input
              type="number"
              onChange={handleStartValueChange}
              value={startValue}
              className={error ? "input-error" : ""}
            />
          </div>
        </form>
      </div>

      <div className="btn-block">
        <Button
          title={"SET"}
          onClick={setToLocalStorageHandler}
          disabled={!!error}
        />
      </div>
    </div>
  );
};
