import { useState } from 'react';

import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

function App() {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = e => {
    const currentReview = e.target.textContent.toLowerCase();

    if (currentReview === 'good') {
      setGood(good + 1);
    }
    if (currentReview === 'neutral') {
      setNeutral(neutral + 1);
    }
    if (currentReview === 'bad') {
      setBad(bad + 1);
    }
  };

  const countPositiveFeedbackPercentage = () => {
    const result = (good * 100) / (good + neutral + bad);

    return result ? result : 0;
  };

  return (
    <>
      <div style={{ fontSize: 24 }}>Please leave feedback</div>

      <FeedbackOptions onLeaveFeedback={leaveFeedback} />
      {good + neutral + bad > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={good + neutral + bad}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </>
  );
}

export default App;
