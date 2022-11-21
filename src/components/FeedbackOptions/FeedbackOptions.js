import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css';

function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div className={style.container}>
      <button
        className={style.btn}
        onClick={e => {
          onLeaveFeedback(e);
        }}
      >
        Good
      </button>
      <button
        className={style.btn}
        onClick={e => {
          onLeaveFeedback(e);
        }}
      >
        Neutral
      </button>
      <button
        className={style.btn}
        onClick={e => {
          onLeaveFeedback(e);
        }}
      >
        Bad
      </button>
    </div>
  );
}
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
