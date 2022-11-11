export default function Button(props) {
  return (
    <button className="btn" value={props.value} onClick={props.onClick}>
      {props.text}
    </button>
  );
}
