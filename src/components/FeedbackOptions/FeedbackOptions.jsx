import PropTypes from 'prop-types'
import styles from './FeedbackOptions.module.css'


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={styles.feedbackList}>
            {options.map(option => (
                <button
                    type="button"
                    key={option}
                    name={option}
                    onClick={onLeaveFeedback}
                    className={styles.btn}
                >
                    {option}
                </button>
            ))}
        </div>
    );
};


FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default FeedbackOptions;