import { useState } from 'react';

import {
  Container,
  FeedbackOptions,
  Notification,
  Section,
  Statistics,
} from './components/index';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const addNewFeedback = category => {
    const incValue = 1;

    setFeedback(prevState => ({
      ...prevState,
      [category]: prevState[category] + incValue,
    }));
  };

  const totalFeedback = Object.values(feedback).reduce(
    (total, value) => total + value,
    0
  );

  const positivePercentage = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={addNewFeedback}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback > 0 ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};
