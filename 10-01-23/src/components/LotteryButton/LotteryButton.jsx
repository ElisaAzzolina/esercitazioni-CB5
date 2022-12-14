export function LotteryButton(props) {
  const { clickHandler, isDisabled, ...attributes } = props;

  return (
    <button disabled={!!isDisabled} onClick={clickHandler} {...attributes}>
      {!!isDisabled ? "Numeri estratti" : "Estrai"}
    </button>
  );
}
