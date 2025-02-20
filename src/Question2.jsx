import Question from './Question';

function Question2() {
    return (
        <Question
            questionText="How often do you wash your hair?"
            savedAnswerKey="frequency"
            options={['a. Daily', 'b. Every other day', 'c. Twice a week', 'd. Once a week', 'e. Every two weeks']}
            backLink='/question1' 
            nextLink='/question3'
            number='second'
            buttonValue="Next question"
             buttonClass='next'
        />
    );
}

export default Question2;
