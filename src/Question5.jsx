import Question from './Question';

function Question5() {
    return (
        <Question
            questionText="What is your natural hair color(s) today?"
            savedAnswerKey="trouble" 
            options={['a. Black', 'b. Blonde', 'c. Red/Orange', 'd. Silver/Grey']}
            backLink='/question4' 
            nextLink='/results'
            number="fifth"
            buttonValue="Discover your results"
            buttonClass='discover'
        />
    );
}

export default Question5;
