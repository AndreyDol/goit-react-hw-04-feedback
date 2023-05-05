//import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { ButtonWrap } from './ButtonWrap.styled';
import { Section } from './Section/Section';
import { useState } from 'react';

export const App =()=> {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackCounter = option => {
    if (option === 'good') setGood(prevState => prevState + 1);
    if (option === 'neutral') setNeutral(prevState => prevState + 1);
    if (option === 'bad') setBad(prevState => prevState + 1);
  };


  const countTotalFeedback = () =>
    good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    return (good + neutral + bad) === 0
      ? 0
      : Math.round(
          (good /
            (good + neutral + bad)) *
            100
        );
  };

 
    return (
      <div>
        <Section title="Please leave feedback">
          <ButtonWrap>
            <FeedbackOptions
              options={Object.keys({ good, neutral, bad })}
              onLeaveFeedback={feedbackCounter}
            />
          </ButtonWrap>
        </Section>
        <Section title="Statictics"></Section>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        ></Statistics>
      </div>
    );
  }

