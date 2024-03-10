import { useState, useEffect } from 'react';
import './App.css';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
import Notification from './Notification/Notification';

function App() {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = window.localStorage.getItem('reviews-key');

    if (savedReviews !== null) {
      return JSON.parse(savedReviews);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem('reviews-key', JSON.stringify(reviews));
  }, [reviews]);

  const totalReviews = reviews.good + reviews.neutral + reviews.bad;
  const positiveReviews = Math.round(
    ((reviews.good + reviews.neutral) / totalReviews) * 100
  );

  const resetReviews = () => {
    setReviews({ good: 0, neutral: 0, bad: 0 });
  };

  const updateFeedback = feedbackType => {
    if (feedbackType.target.textContent.toLowerCase() === 'good') {
      setReviews({
        ...reviews,
        good: reviews.good + 1,
      });
    } else if (feedbackType.target.textContent.toLowerCase() === 'neutral') {
      setReviews({
        ...reviews,
        neutral: reviews.neutral + 1,
      });
    } else if (feedbackType.target.textContent.toLowerCase() === 'bad') {
      setReviews({
        ...reviews,
        bad: reviews.bad + 1,
      });
    }
  };

  return (
    <>
      <h1 className="title">Sip Happens Café</h1>
      <p className="hintText">
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>

      <Options
        onUpdate={updateFeedback}
        counter={totalReviews}
        onReset={resetReviews}
      />

      {totalReviews === 0 ? (
        <Notification />
      ) : (
        <Feedback
          counter={totalReviews}
          value={reviews}
          positiveReviews={positiveReviews}
        />
      )}
    </>
  );
}

export default App;
