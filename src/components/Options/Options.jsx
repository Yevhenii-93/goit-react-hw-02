import css from "./Options.module.css";

export default function Options({
  typeNames,
  updateFeedback,
  totalFeedback,
  onClickReset,
}) {
  return (
    <div className={css.container}>
      {typeNames.map((typeName, index) => (
        <button
          key={index}
          onClick={() => updateFeedback(typeName)}
          className={css.btn}
        >
          {typeName.charAt(0).toUpperCase() + typeName.slice(1)}
        </button>
      ))}
      {totalFeedback === 0 ? (
        <></>
      ) : (
        <button onClick={onClickReset} className={css.btn}>
          Reset
        </button>
      )}
    </div>
  );
}
