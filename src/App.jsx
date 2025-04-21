import "./App.css";
import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

function App() {
  const feedbackTypes = ["good", "neutral", "bad"];

  const [values, setValues] = useState(() => {
    const saveFeedback = localStorage.getItem("feedback-info");
    if (saveFeedback !== null) {
      return JSON.parse(saveFeedback);
    } else {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    }
  });

  const resetTotalFeedback = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem("feedback-info", JSON.stringify(values));
  }, [values]);

  const totalFeedback = values.good + values.neutral + values.bad;

  const positiveFeedback = Math.round((values.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };

  return (
    <>
      <Description />
      <main>
        <Options
          onClickReset={resetTotalFeedback}
          typeNames={feedbackTypes}
          updateFeedback={updateFeedback}
          totalFeedback={totalFeedback}
        />
        <Feedback
          typeNames={feedbackTypes}
          values={values}
          notification={"No feedback yet"}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      </main>
    </>
  );
}

export default App;
