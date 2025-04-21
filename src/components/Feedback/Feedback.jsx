import css from "./Feedback.module.css";

export default function Feedback({
  values,
  totalFeedback,
  typeNames,
  positiveFeedback,
}) {
  return (
    <ul>
      {typeNames.map((typeName) => (
        <li key={typeName} className={css.feedbackItem}>
          {typeName.charAt(0).toUpperCase() + typeName.slice(1)}:{" "}
          {values[typeName]}
        </li>
      ))}
      <li className={css.feedbackItem}>Total: {totalFeedback}</li>
      <li className={css.feedbackItem}>Positive: {positiveFeedback}%</li>
    </ul>
  );
}
