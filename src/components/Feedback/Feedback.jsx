export default function Feedback({
  values,
  notification,
  totalFeedback,
  typeNames,
  positiveFeedback,
}) {
  return (
    <>
      {totalFeedback !== 0 ? (
        <ul>
          {typeNames.map((typeName) => (
            <li key={typeName}>
              {typeName.charAt(0).toUpperCase() + typeName.slice(1)}:{" "}
              {values[typeName]}
            </li>
          ))}
          <li>Total: {totalFeedback}</li>
          <li>Positive: {positiveFeedback}%</li>
        </ul>
      ) : (
        <p>{notification}</p>
      )}
    </>
  );
}
