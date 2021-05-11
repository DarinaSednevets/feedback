import PropTypes from 'prop-types'
import styles from './Section.module.css'

const Section = ({ title, children }) => {
    return (
        <section className={styles.section}>
            <p className={styles.title}>{title}</p>
            {children}
        </section>)
};

Section.propTypes = {
    title: PropTypes.string.isRequired
};

export default Section;