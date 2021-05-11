import React, { Component } from 'react'
import Container from './components/Container/Container'
import Section from './components/Section/Section'
import Notification from './components/Notification/Notification'
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions'
import Statistics from './components/Statistics/Statistics'

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    countFeedbackHandler = event => {
        const { name } = event.currentTarget;

        this.setState(prevState => ({
            [name]: prevState[name] + 1,
        }));
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        const total = good + neutral + bad;

        return total;
    };

    countPositiveFeedbackPercentage = () => {
        let totalFeedback = this.countTotalFeedback();
        let positiveFeedback = (this.state.good * 100) / totalFeedback;

        return totalFeedback !== 0 ? Math.round(positiveFeedback) : 0;
    };

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();

        return (
            <Container>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={['good', 'neutral', 'bad']}
                        onLeaveFeedback={this.countFeedbackHandler}
                    />
                </Section>
                <Section title="Statistics">
                    {total ? (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={total}
                            positivePercentage={positivePercentage}
                        />
                    ) : (
                        <Notification message="No feedback given"></Notification>
                    )}
                </Section>
            </Container>
        );
    }
}


export default App;