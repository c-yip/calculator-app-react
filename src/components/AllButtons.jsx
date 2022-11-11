import Button from "./Button";
import { useContext } from "react";
import { Context } from "../Context";
import { nanoid } from "nanoid";

export default function AllButtons() {
  const {
    onClick,
    onClickOperator,
    onClickEqual,
    onClickClear,
    onClickDelete,
  } = useContext(Context);

  const numberButtonsArray = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];
  const operatorButtonsArray = ["/", "*", "-", "+"];
  const additionalButtonsArray = ["+/-", "%", "**", "(", ")"];

  const numberButtonsElements = numberButtonsArray.map((number) => {
    return (
      <Button key={nanoid()} value={number} text={number} onClick={onClick} />
    );
  });

  const operatorButtonsElements = operatorButtonsArray.map((operator) => {
    return (
      <Button
        key={nanoid()}
        value={operator}
        text={operator}
        onClick={onClickOperator}
      />
    );
  });

  const additionalButtonsElements = additionalButtonsArray.map((additional) => {
    return (
      <Button
        key={nanoid()}
        value={additional}
        text={additional}
        onClick={onClick}
      />
    );
  });

  return (
    <>
      <div className="num-buttons">
        {numberButtonsElements}{" "}
        <Button value={"="} text={"="} onClick={onClickEqual} />
      </div>
      <div className="op-buttons">{operatorButtonsElements}</div>
      <div className="additional-buttons">
        <Button value={"ac"} text={"AC"} onClick={onClickClear} />
        {additionalButtonsElements}
        <Button value={"del"} text={"DEL"} onClick={onClickDelete} />
      </div>
    </>
  );
}
