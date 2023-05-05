import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { ButtonWrap } from './ButtonWrap.styled';
import { Section } from './Section/Section';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackCounter = option => {
    this.setState({
      [option]: this.state[option] + 1,
    });
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () => {
    return this.state.good + this.state.neutral + this.state.bad === 0
      ? 0
      : Math.round(
          (this.state.good /
            (this.state.good + this.state.neutral + this.state.bad)) *
            100
        );
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Section title="Please leave feedback">
          <ButtonWrap>
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.feedbackCounter}
            />
          </ButtonWrap>
        </Section>
        <Section title="Statictics"></Section>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback(this.state)}
          positivePercentage={this.countPositiveFeedbackPercentage(this.state)}
        ></Statistics>
      </div>
    );
  }
}
