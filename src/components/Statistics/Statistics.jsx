
import PropTypes from 'prop-types';
import style from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <div>
        <ul className={style.statisticList}>
            <li className={style.statisticItem}>Good: {good}</li>
            <li className={style.statisticItem}>Neutral: {neutral}</li>
            <li className={style.statisticItem}>Bad: {bad}</li>
            <li className={style.statisticItem}>Total: {total}</li>
            <li className={style.statisticItem}>
                Positive Feedback:{positivePercentage}%
      </li>
        </ul>
    </div>
);

Statistics.defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
};

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
};

export default Statistics;