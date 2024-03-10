import css from './Feedback.module.css';

const Feedback = ({ value, counter, positiveReviews }) => (
  <ul className={css.feedbackList}>
    <li>
      <p>Good:{value.good}</p>
    </li>
    <li>
      <p>Neutral:{value.neutral}</p>
    </li>
    <li>
      <p>Bad:{value.bad}</p>
    </li>
    <li>
      <p>Total:{counter}</p>
    </li>
    <li>
      <p>Positive:{positiveReviews}</p>
    </li>
  </ul>
);

export default Feedback;
