import Button from "./Button";

export default function AllButtons() {
  const numberButtonsArray = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];
  const operatorButtonsArray = ["/", "x", "-", "+"];
  const additionalButtonsArray = ["+/-", "%", "^", "(", ")"];

  const numberButtonsElements = numberButtonsArray.map((number) => {
    return <Button value={number} text={number} />;
  });

  const operatorButtonsElements = operatorButtonsArray.map((operator) => {
    return <Button value={operator} text={operator} />;
  });

  const additionalButtonsElements = additionalButtonsArray.map((additional) => {
    return <Button value={additional} text={additional} />;
  });

  return (
    <>
      <div className="num-buttons">
        {numberButtonsElements} <Button value={"="} text={"="} />
      </div>
      <div className="op-buttons">{operatorButtonsElements}</div>
      <div className="additional-buttons">
        <Button value={"ac"} text={"AC"} />
        {additionalButtonsElements}
        <Button value={"del"} text={"DEL"} />
      </div>
    </>
  );
}
