import { useState } from 'react'

const App = () => {
    const [feedback, setFeedback] = useState({
        good: 0, neutral: 0, bad: 0
    });

    const handleGoodClick = () => setFeedback({...feedback, good: feedback.good + 1});
    const handleNeutralClick = () => setFeedback({...feedback, neutral: feedback.neutral + 1});
    const handleBadClick = () => setFeedback({...feedback, bad: feedback.bad + 1});

    return (
        <div>
            <Header name="give feedback" />
            <Button handleClick={handleGoodClick} name="good"/>
            <Button handleClick={handleNeutralClick} name="neutral"/>
            <Button handleClick={handleBadClick} name="bad"/>
            <Header name="statistics" />
            <Statistics feedback={feedback} />     
        </div>
    );
}

const Header = ({name}) => {
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
}

const Button = ({name, handleClick}) => {
    return (
        <>
            <button onClick={handleClick}>{name}</button>
        </>
    );
}

const Statistics = (props) => {
    const good = props.feedback.good;
    const neutral = props.feedback.neutral;
    const bad = props.feedback.bad;
    
    if (good === 0 && neutral === 0 && bad === 0) {
        return (
            <div>
                <p>No feedback given</p>
            </div>
        );
    }

    const score = {good: 1, neutral: 0, bad: -1};
    const total = good + neutral + bad;
    const average = Number((good * score.good + neutral * score.neutral + bad * score.bad) / (total)).toFixed(2);
    const positive = Number((good / total * 100).toFixed(2)) + "%";
    

    return (
        <div>
            <StatisticsLine text="Good" value={good} />
            <StatisticsLine text="Neutral" value={neutral} />
            <StatisticsLine text="Bad" value={bad} />
            <StatisticsLine text="All" value={total} />
            <StatisticsLine text="Average" value={average} />
            <StatisticsLine text="Positive" value={positive} />
        </div>
    );
}

const StatisticsLine = ({text, value}) => {
return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
)};

export default App
